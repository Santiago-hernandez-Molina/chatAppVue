<script setup lang="ts">
import { useRouter } from "vue-router";
import type RoomModel from "@/@types/room.model";

const props = defineProps<{ room: RoomModel }>();
const router = useRouter();
const goToRoom = () => {
  router.push("/rooms/" + props.room.id);
};
const defaultImg: string =
  "https://cdn.icon-icons.com/icons2/1674/PNG/512/messagesquare_111096.png";
</script>

<template lang="html">
  <div class="room-card" @click="goToRoom">
    <img :src="props.room.imageBase64 ?? defaultImg" alt="" />
    <div class="room-name">
      <p>{{ props.room.name }}</p>
    </div>
  </div>
</template>

<style scoped>
.room-card {
  margin: 5px;
  width: 100px;
  cursor: pointer;
  gap: 2px;
}
.room-card:hover {
  scale: 1.05;
}
.room-card > img {
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  object-position: center;
  border: 1px solid var(--deep-blue);
}
.room-name {
  width: 100%;
  border-radius: 5px;
}
.room-name p {
  background: var(--light-blue);
  width: 100%;
  border: 1px solid var(--deep-blue);
  text-align: center;
  border-radius: 3px;
  color: var(--deep-blue);
  font-weight: bold;
  font-family: var(--montserrat);
  font-size: 0.85em;
  margin: 0;
}
</style>
