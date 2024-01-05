import { type Ref } from "vue";
import { type User } from "./user.model.ts";

export type Auth = {
  authenticated: boolean;
  user: Ref<User | null>;
  logout: () => void;
  login: (userResponse: User) => void;
};
