<script setup lang="ts">
import RoomLayout from "@/layouts/RoomLayout.vue";
import RoomCardComponentVue from "@/components/room_card/RoomCardComponent.vue";
import type RoomModel from "@/@types/room.model";
import { inject, ref, type Ref } from "vue";
import { getRooms } from "@/helpers/services/room_services";

const rooms: Ref<RoomModel[]> = ref([]);
const { user } = inject("auth");

getRooms().then((data) => {
  rooms.value = data;
});
</script>

<template lang="html">
  <RoomLayout>
    <main class="user-container">
      <div class="user-info">
        <img
          class="user-image"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
        <div class="user-username">
          <p>{{ user.username }}</p>
        </div>
      </div>
      <div class="rooms-container">
        <div class="rooms">
          <RoomCardComponentVue
            v-for="(room, index) in rooms"
            :key="index"
            :room="room"
          />
        </div>
      </div>
    </main>
  </RoomLayout>
</template>

<style scoped>
.user-container {
  font-family: var(--montserrat);
  display: grid;
  place-content: center;
  grid-template-columns: 0.5fr 1.5fr;
}
@media (max-width: 800px) {
  .user-container {
    grid-template-columns: 1fr;
  }
}

.user-info {
  margin-top: 5px;
  background: var(--light-red);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid var(--deep-blue);
  padding: 10px;
}
@media (max-width: 800px) {
  .user-info {
    margin-bottom: 20px;
  }
}
.user-info > img {
  width: 120px;
  border: 2px solid var(--deep-blue);
  box-shadow: none;
  border-radius: 5px;
  object-fit: cover;
  margin-bottom: 10px;
}

.user-username {
  width: 100%;
  text-align: center;
}
.user-username > p {
  color: var(--white);
  font-family: var(--pt-sans);
  font-weight: bold;
  font-size: 1.2em;
}
.rooms-container {
  width: auto;
  height: 70vh;
  border-radius: 5px;
  overflow: scroll;
}
.rooms {
  display: flex;
  gap: 2%;
  flex-wrap: wrap;
  justify-content: start;
  padding-left: 5%;
  padding-right: 5%;
}
@media (max-width: 800px) {
  .rooms {
    height: auto;
  }
}
</style>
