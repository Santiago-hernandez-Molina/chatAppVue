<script setup lang="ts">
    defineProps<{rotate: boolean}>()
</script>
<template>
    <div :class="'decoration '+ (rotate?'':'rotate')">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
</template>

<style scoped>
.rotate{
  transform: rotateY(180deg);
}
.decoration {
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: end;
}
.decoration > div:nth-child(1) {
  background: var(--deep-blue);
  width: 16px;
  height: 12vh;
}
.decoration > div:nth-child(2) {
  background: var(--deep-blue);
  width: 32px;
  height: 72px;
}
.decoration > div:nth-child(3) {
  background: var(--deep-blue);
  width: 48px;
  height: 72px;
}
.decoration > div:nth-child(4) {
  background: var(--deep-blue);
  width: 64px;
  height: 32px;
}
.decoration > div:nth-child(5) {
  background: var(--deep-blue);
  width: 96px;
  height: 16px;
}
.decoration > div:nth-child(6) {
  background: var(--deep-blue);
  width: 50%;
  height: 16px;
}
.decoration > div:nth-child(7) {
  background: var(--deep-blue);
  width: 65%;
  height: 16px;
}
@media (max-width: 850px) {
    .rotate{
        display: none;
    }
  .decoration {
    width: 0;
    overflow: hidden;
  }
}
</style>
