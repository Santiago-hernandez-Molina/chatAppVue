<script setup lang="ts">
import MessageComponent from "@/components/message/MessageComponent.vue";
import InputMessageComponent from "@/components/input/InputMessageComponent.vue";
import RoomLayout from "@/layouts/RoomLayout.vue";
import { type Ref, ref, watch, nextTick, onUnmounted } from "vue";
import { getMessages } from "@/helpers/services/room_services";
import { BASE_URL_WEBSOCKET } from "@/helpers/utils/constants";
import { MessageUserModel } from "@/models/message.model";

const props = defineProps<{ id: string }>();
const messages: Ref<MessageUserModel[]> = ref([]);
const URLWEBSOCKET = BASE_URL_WEBSOCKET + "/v1/room/ws/" + props.id;

const socket = new WebSocket(URLWEBSOCKET);
const messageContainer: Ref<HTMLDivElement | null> = ref(null);
let active = true;

window.addEventListener("blur", () => {
  active = false;
  console.log("inactive");
});
window.addEventListener("focus", () => {
  active = true;
  console.log("active");
});

if (Notification.permission === "default") {
  Notification.requestPermission();
}

getMessages(parseInt(props.id)).then((data) => {
  messages.value = data;
});

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  messages.value = [...messages.value, message];
  if (active) {
    return;
  }
  if (Notification.permission === "granted") {
    const notify = new Notification(
      `Chat App \n ${message.user.username}: ${message.content}`,
    );
    setTimeout(() => notify.close, 200);
  } else {
    Notification.requestPermission();
  }
};

const addMessage = (message: MessageUserModel) => {
  socket.send(JSON.stringify(message));
  messages.value = [...messages.value, message];
};

onUnmounted(() => {
  socket.close();
});

watch(
  () => messages.value,
  async () => {
    await nextTick();
    if (messageContainer.value == null) {
        return
    }
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight;
  },
);
</script>

<template lang="html">
  <RoomLayout>
    <div class="chat">
      <div class="messages" ref="messageContainer">
        <MessageComponent
          v-for="message in messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <InputMessageComponent @add-message="addMessage" />
    </div>
  </RoomLayout>
</template>

<style scoped>
.room {
  display: grid;
}
.chat {
  height: 75vh;
  display: grid;
  grid-template-rows: 1.85fr auto;
}
.messages {
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
}
@media (max-width: 800px) {
  .chat {
    height: 80vh;
  }
}
</style>
