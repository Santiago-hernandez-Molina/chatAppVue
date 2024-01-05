<script setup lang="ts">
import { RouterLink } from "vue-router";
import * as feather from "feather-icons";
import { inject } from "vue";
import { type Auth } from "@/@types/auth.model" 

const logInIcon = feather.icons["log-in"].toSvg({});
const logOutIcon = feather.icons["log-out"].toSvg({});
const homeIcon = feather.icons["home"].toSvg({});

const { authenticated, logout }: Auth = inject("auth");
</script>

<template lang="html">
  <div class="navbar">
    <ul class="nav">
      <li class="navItem">
        <router-link to="/" class="title-lg">CHAT APP</router-link>
      </li>
      <li class="navItem">
        <router-link v-if="!authenticated" to="/login" class="login-text">
          Login <span v-html="logInIcon"></span>
        </router-link>
        <div class="log-in" v-else>
          <router-link to="/rooms" class="login-text">
            Chats <span v-html="homeIcon"></span>
          </router-link>
          <router-link @click="logout" to="/" class="login-text">
            Log out <span v-html="logOutIcon"></span>
          </router-link>
        </div>
      </li>
    </ul>
    <div class="line"></div>
  </div>
</template>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  align-items: end;
  padding-left: 5%;
  padding-right: 5%;
  height: 10vh;
  margin: 0;
  padding-top: 2vh;
  padding-bottom: 2vh;
}
.login-text {
  font-family: var(--montserrat);
  font-size: 1.5em;
  text-align: center;
  display: grid;
  gap: 5px;
  grid-template-columns: auto auto;
  place-content: center;
  color: var(--light-red);
  border: none;
}
.login-text > span {
  display: grid;
  place-content: center;
}
.login-text:hover {
  color: var(--deep-red);
}
a {
  text-decoration: none;
}
.line {
  height: 1px;
  margin-right: 5%;
  margin-left: 5%;
  background: var(--light-blue);
}
.log-in {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
@media (max-width: 800px) {
  .login-text {
    font-size: 1.1em;
  }
  .title-lg {
    font-size: 1.3em;
  }
  .nav {
    height: 6vh;
  }
}
</style>
