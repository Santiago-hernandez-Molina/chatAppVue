<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import { type Ref, ref } from "vue";
import * as feather from "feather-icons";
import { register, validateCode } from "@/helpers/services/user";
import { AxiosResponse } from "axios";
import type {
  ActivationCode,
  RegisterRequest,
} from "@/models/registerRequest.model";
import { useRouter } from "vue-router";

const err: Ref<string | null> = ref(null);
const arrow: string = feather.icons["arrow-left"].toSvg({
  height: "0.95em",
  width: "0.95em",
});
const inputCode: Ref<boolean> = ref(false);
const codeSended: Ref<boolean> = ref(false);

const activationCode: Ref<ActivationCode> = ref({
  email: "",
  code: null,
});
const registerForm: Ref<RegisterRequest> = ref({
  email: "",
  username: "",
  password: "",
});

const handlerRegister = () => {
  register(registerForm.value)
    .then((res: AxiosResponse) => {
      if (res.status == 201) {
        inputCode.value = true;
      }
    })
    .catch(() => {
      err.value = "Error while register try again";
    });
};

const router = useRouter();
const activateAccount = () => {
  activationCode.value.email = registerForm.value.email;
  validateCode(activationCode.value)
    .then((res: AxiosResponse) => {
      if (res.status == 200) {
        router.push("/login");
        return;
      }
    })
    .catch(() => {
      err.value = "Error while register try again";
    });
};
</script>

<template>
  <AuthLayout :error="err" title="Register">
    <form v-if="!inputCode" @submit.prevent="handlerRegister">
      <label for="email">Email</label>
      <input v-model="registerForm.email" type="text" id="email" name="email" />
      <label for="username">Username</label>
      <input
        v-model="registerForm.username"
        type="text"
        id="username"
        name="username"
      />
      <label for="password">Password</label>
      <input
        v-model="registerForm.password"
        type="password"
        id="password"
        name="password"
      />
      <label for="password">Repeat Password</label>
      <input
        v-model="registerForm.password"
        type="password"
        id="password"
        name="password"
      />
      <button type="submit" class="btn-app">Confirm</button>
      <button
        class="btn-app btn-code"
        @click="
          () => {
            codeSended = true;
            inputCode = true;
          }
        "
      >
        I have a code
      </button>
    </form>

    <form v-else @submit.prevent="activateAccount">
      <label v-if="codeSended" for="email">Email</label>
      <input
        v-if="codeSended"
        v-model="registerForm.email"
        type="text"
        id="email"
        name="email"
      />
      <label for="code">Input the code sended to your email</label>
      <input
        v-bind:formnovalidate="false"
        v-model="activationCode.code"
        type="number"
        id="code"
        name="code"
      />

      <button type="submit" class="btn-app">Confirm</button>
      <button
        class="btn-app btn-code"
        @click="
          () => {
            codeSended = false;
            inputCode = false;
          }
        "
      >
        Back to register
      </button>
    </form>

    <RouterLink to="/" class="btn-red">
      <span v-html="arrow"></span>Back to Menu
    </RouterLink>
  </AuthLayout>
</template>

<style lang="css" scoped>
form {
  display: grid;
  font-family: var(--pt-sans);
  font-size: 1em;
  color: var(--deep-blue);
  padding: 15px;
  gap: 5px;
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
.btn-code {
  background: var(--deep-red);
  color: var(--white);
}
.btn-code:hover {
  background: var(--light-red);
}
@media (max-width: 800px) {
}
</style>
