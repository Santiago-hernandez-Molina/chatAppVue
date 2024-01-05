import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import {
  user,
  authenticated,
  login,
  logout,
} from "@/helpers/authentication/AuthHelper";

const app = createApp(App);
app.provide("auth", { user, authenticated, login, logout });
app.use(router);
app.mount("#app");
