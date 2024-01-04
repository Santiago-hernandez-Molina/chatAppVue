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
import { errorHandler } from "./helpers/error_handler/main";

const app = createApp(App);
app.provide("auth", { user, authenticated, login, logout });
app.config.errorHandler = errorHandler
app.use(router);
app.mount("#app");
