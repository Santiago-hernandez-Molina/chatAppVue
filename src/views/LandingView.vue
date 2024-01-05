<script setup lang="ts">
import * as feather from "feather-icons";
import DecorationComponent from "@/components/decoration/DecorationComponent.vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import { inject } from "vue";
import { Auth } from "@/models/auth.model";

const userp = feather.icons["user-plus"].toSvg({
  width: "1em",
  height: "1em",
});

const message = feather.icons["message-square"].toSvg({
  width: "1.2em",
  height: "1.2em",
  class: "msg",
  color: "var(--deep-red)"
});

const { authenticated, user }: Auth = inject("auth");
</script>

<template lang="html">
  <NavbarComponent />
  <div class="home">
    <DecorationComponent :rotate="true" />
    <div v-if="authenticated" class="welcome">
      <p>Welcome {{ user.username }}, What's Up</p>
      <div v-html="message"></div>
    </div>
    <div v-else class="welcome">
      <p>Welcome to our App, to beign chatting Sign Up now</p>
      <div v-html="message"></div>
      <button>Sign up <span v-html="userp"></span></button>
    </div>
    <DecorationComponent :rotate="false" />
  </div>
</template>

<style scoped>
.home {
  height: 82vh;
  display: grid;
  grid-template-columns: 0.7fr 1fr 0.7fr;
  place-items: center;
  font-family: var(--pt-sans);
  padding-left: 5%;
  padding-right: 5%;
}
.welcome {
  font-size: 2.3em;
  text-align: center;
  width: 100%;
  overflow: auto;
  color: var(--deep-blue);
}
.welcome > button {
  width: 70%;
  font-size: 0.5em;
  padding: 0.5em;
  border: none;
  border-radius: 0;
  background: var(--light-red);
  color: var(--white);
  cursor: pointer;
}
.welcome > button:hover {
  background: var(--deep-red);
}
@media (max-width: 850px) {
  .home {
    grid-template-columns: 0.2fr 1fr 0.2fr;
  }
}
</style>
