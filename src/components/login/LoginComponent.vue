<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import { RouterLink, useRouter } from "vue-router";
import * as feather from "feather-icons";
import { login as loginService } from "@/helpers/services/user";
import { type Ref, inject, ref } from "vue";
import { type User } from "@/models/user.model";
import { type Auth } from "@/models/auth.model";

const arrow: string = feather.icons["arrow-left"].toSvg({
  height: "0.95em",
  width: "0.95em",
});

const err: Ref<string | null> = ref(null);
const router = useRouter();

const loginForm = ref({
  email: "",
  password: "",
});

const { login }: Auth = inject("auth");

const handleSubmit = () => {
  loginService(loginForm.value).then((data: User | null) => {
    if (data) {
      login(data);
      router.push("/rooms");
    } else {
      err.value = "Error while log-in try again";
    }
  });
};
</script>

<template>
  <AuthLayout :error="err" title="Login">
    <form @submit.prevent="handleSubmit">
      <label for="email">Email</label>
      <input v-model="loginForm.email" type="text" id="email" name="email" />
      <label for="password">Password</label>
      <input
        v-model="loginForm.password"
        type="password"
        id="password"
        name="password"
      />
      <button type="submit" class="btn-app">Confirm</button>
    </form>

    <RouterLink to="/" class="btn-red"
      ><span v-html="arrow"></span>Back to Menu</RouterLink
    >
  </AuthLayout>
</template>

<style scoped>
form {
  display: grid;
  font-family: var(--pt-sans);
  font-size: 1em;
  color: var(--deep-blue);
  padding: 15px;
  gap: 10px;
}
input {
  padding: 5px;
  border: 1px solid var(--deep-blue);
  border-radius: 5px;
  background: var(--light-blue);
  color: var(--deep-blue);
}
.btn-app {
  margin-top: 20px;
  background: var(--deep-blue);
  border: none;
  padding: 8px;
  color: var(--white);
  cursor: pointer;
}
.btn-app:hover {
  background: #2b2d53;
}
.btn-red {
  padding: 15px;
  font-size: 0.95em;
  font-family: var(--montserrat);
  color: var(--deep-red);
  text-decoration: none;
}
.red:hover {
  color: var(--light-red);
}
@media (max-width: 800px) {
}
</style>
