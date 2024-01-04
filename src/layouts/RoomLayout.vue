<script setup lang="ts">
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
</script>

<template lang="html">
  <NavbarComponent />
  <div class="room-layout">
    <slot></slot>
  </div>
</template>

<style scoped>
.room-layout {
  background-color: var(--white);
  margin-top: 5vh;
  padding-right: 5%;
  padding-left: 5%;
}
</style>
