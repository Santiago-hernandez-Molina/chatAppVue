<script setup lang="ts">
import { type Ref } from 'vue';

const props = defineProps<{
  title: string;
  error: Ref<string | null>;
}>();

</script>
<template>
  <div class="modal">
    <div class="content">
      <h1 class="title">{{ props.title }}</h1>
      <slot></slot>
      <p v-if="error != null">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: var(--montserrat);
  color: var(--light-blue);
  font-weight: bold;
  text-align: center;
}
.content {
  height: 100%;
}
.content>p{
  font-family: var(--montserrat);
  color: var(--deep-red);
  font-weight: bold;
  text-align: center;
}
.modal {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background: var(--deep-blue);
}
.modal > div:nth-child(1) {
  min-width: 500px;
  height: 85vh;
  border-radius: 5px;
  background: var(--white);
  padding: 5px;
}

@media (max-width: 800px) {
  .modal > div:nth-child(1) {
    min-width: 100%;
    height: 85vh;
    border-radius: 0;
    background: var(--white);
    padding: 0;
  }
}
</style>
