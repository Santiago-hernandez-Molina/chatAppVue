import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw, Router } from "vue-router";
import { validateLogin } from "@/router/middlewares/authMiddleware";
import LandingView from "@/views/LandingView.vue";
import LoginComponent from "@/components/login/LoginComponent.vue";
import RoomShow from "@/views/room/RoomShow.vue";
import RoomIndex from "@/views/room/RoomIndex.vue";
import RegisterIndex from "@/views/auth/RegisterIndex.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: LandingView, name: "Index" },
  { path: "/login", component: LoginComponent, name: "Login" },
  { path: "/rooms/:id", component: RoomShow, name: "RoomShow", props: true },
  { path: "/rooms", component: RoomIndex, name: "RoomIndex" },
  { path: "/register", component: RegisterIndex, name: "Register"}
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(validateLogin);

export default router;
