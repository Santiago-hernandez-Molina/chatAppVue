import { ref } from "vue";

let isAuth: string | null = localStorage.getItem("auth");
let userString: string | null = localStorage.getItem("user");
let user: User | null = null;

if (userString != null) {
  user = JSON.parse(userString);
}

if (isAuth === null) {
  isAuth = "false";
}

const authenticated = ref(isAuth === "true");

const login = (userResponse: User) => {
  user = userResponse;
  authenticated.value = true;
  localStorage.setItem("auth", authenticated.value ? "true" : "false");
  localStorage.setItem("user", JSON.stringify(user))
};

const logout = () => {
  authenticated.value = false;
  localStorage.removeItem("auth");
  localStorage.removeItem("user")
};

export { user, authenticated, login, logout };
