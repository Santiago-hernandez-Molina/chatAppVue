<script setup lang="ts">
import MessageComponent from "@/components/message/MessageComponent.vue";
import InputMessageComponent from "@/components/input/InputMessageComponent.vue";
import type MessageUserModel from "@/@types/message.model";
import RoomLayout from "@/layouts/RoomLayout.vue";
import { type Ref, ref, watch, nextTick, onUnmounted } from "vue";
import { getMessages } from "@/helpers/services/room_services";

const props = defineProps<{ id: string }>();
const messages: Ref<MessageUserModel[]> = ref([]);
const URLWEBSOCKET = "ws://localhost:8080/v1/room/ws/" + props.id;

const socket = new WebSocket(URLWEBSOCKET);
const messageContainer: Ref<HTMLDivElement> = ref(null);

getMessages(parseInt(props.id)).then((data) => {
  messages.value = data;
});

socket.onmessage = (event) => {
  const message = JSON.parse(event.data);
  messages.value = [...messages.value, message];
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
</style>
