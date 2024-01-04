<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
<template>
  <div class="modal">
    <div class="content">
      <h1 class="title">{{ props.title }}</h1>
      <slot></slot>
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
.content{
    height: 100%;
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
</style>
