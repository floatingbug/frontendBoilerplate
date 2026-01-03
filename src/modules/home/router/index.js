import HomeView from "../views/HomeView.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";


export default [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeView,
      },
    ],
  },
];
