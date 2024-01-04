import { authenticated } from "@/helpers/authentication/AuthHelper";
import { RouteLocationNormalized } from "vue-router";

const publicPaths = ["Index", "Login"];

export const validateLogin = (to: RouteLocationNormalized) => {
  if (to.name == null || to.name == undefined) {
    return { name: "Index" };
  }
  if (publicPaths.includes(to.name.toString())) {
    return;
  }
  if (!authenticated.value) {
      console.log("hi");
      
    return { name: "Login" };
  }
};
