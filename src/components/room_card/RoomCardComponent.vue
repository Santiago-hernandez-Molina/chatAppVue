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
  height: 120px;
  width: 100px;
  cursor: pointer;
  overflow: hidden;
  display: grid;
  grid-template-rows: 1.6fr 0.4fr;
  gap: 2px;
}
.room-card:hover {
  scale: 1.07;
}
.room-card > img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
  background: var(--white);
  object-fit: cover;
  object-position: center;
}
.room-name {
  border-radius: 3px;
  background: var(--white);
  display: grid;
  place-content: center;
  overflow: hidden;
}
.room-name p {
  border-radius: 3px;
  color: var(--deep-blue);
  font-weight: bold;
  font-family: var(--montserrat);
  font-size: 1em;
  margin: 0;
  padding: 0;
}
</style>
