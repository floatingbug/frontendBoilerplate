import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

export default [
  {
    path: "/login",
    name: "auth.login",
    component: SignInView,
  },
  {
    path: "/register",
    name: "auth.register",
    component: SignUpView,
  },
];
