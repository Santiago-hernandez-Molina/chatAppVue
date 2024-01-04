<script setup lang="ts">
import { type Ref, inject, ref } from "vue";
import * as feather from "feather-icons";
import { useRouter } from "vue-router";
import type MessageUserModel from "@/@types/message.model";

const emit = defineEmits(["addMessage"]);
const { user } = inject("auth");
const router = useRouter();
if (user === null) {
  router.push("/");
}
const msg: Ref<string> = ref("");

const sendMessage = () => {
  const message: MessageUserModel = {
    content: msg.value,
    user: {
      id: user.id,
      username: user.username,
    },
  };
  emit("addMessage", message);
  msg.value = "";
};

const icon = feather.icons["send"].toSvg({ width: "1.3em" });
</script>

<template>
  <form @submit.prevent="sendMessage" class="input-message">
    <input v-model="msg" type="text" placeholder="type something" />
    <button v-html="icon"></button>
  </form>
</template>

<style scoped>
.input-message {
  margin-top: 5px;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 90% auto;
  padding: none;
}

.input-message > input {
  padding: 0;
  padding-left: 10px;
  height: 35px;
  font-family: var(--pt-sans);
  color: var(--deep-blue);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: var(--light-blue);
  font-size: 0.9em;
  border: 3px solid var(--deep-blue);
  border-right: 0;
}
.input-message > input::placeholder {
  border: none;
  color: var(--deep-blue);
  font-weight: bold;
}
.input-message > input:focus {
  outline-style: none;
}
.input-message > button {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 3px solid var(--deep-blue);
  border-left: 0;
  background: var(--deep-red);
  padding: 0;
  margin: 0;
  cursor: pointer;
  color: var(--white);
  display: grid;
  overflow: hidden;
  place-content: center;
}
.input-message > button:hover {
  background: var(--light-red);
}
</style>
