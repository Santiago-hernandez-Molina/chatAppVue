import { User } from "@/models/user.model";
import { type Ref, ref } from "vue";

let isAuth: string | null = localStorage.getItem("auth");
let userString: string | null = localStorage.getItem("user");
let user: Ref<User | null> = ref(null);


if (isAuth === null) {
  isAuth = "false";
}
if (userString != null) {
  user.value = JSON.parse(userString);
}

const authenticated = ref(isAuth === "true");

const login = (userResponse: User) => {
  user.value = userResponse;
  localStorage.setItem("user", JSON.stringify(user.value))
  authenticated.value = true;
  localStorage.setItem("auth", authenticated.value ? "true" : "false");
};

const logout = () => {
  authenticated.value = false;
  localStorage.removeItem("auth");
  localStorage.removeItem("user")
};

export { user, authenticated, login, logout };
