<script setup lang="ts">
import type MessageUserModel from "@/@types/message.model";
import { inject } from "vue";

const props = defineProps<{ message: MessageUserModel }>();
const { user } = inject("auth");
let styleMessage: string = "host";
if (user.id != props.message.user.id) {
  styleMessage = "guest";
}
</script>

<template lang="html">
  <div :class="'message-container ' + styleMessage">
    <p class="user">{{ message.user.username }}</p>
    <p>{{ props.message.content }}</p>
  </div>
</template>

<style scoped>
.message-container {
  padding: 8px;
  border-radius: 5px;
  margin: 5px;
  max-width: 60%;
}
p {
  font-size: 1.02em;
  padding: 1px;
  font-family: var(--pt-sans);
  margin: 0;
}
.host {
  align-self: end;
  background: var(--light-blue);
  color: var(--deep-blue);
  text-align: end;
}
.guest {
  align-self: start;
  background: var(--deep-blue);
  color: var(--white);
}
.host > .user {
  color: var(--white);
}
.guest > .user {
  color: var(--light-blue);
}
.user {
  font-size: 0.7em;
}
</style>
