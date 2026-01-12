import {DashboardView} from "../views";
import {DashboardLayout} from "../../../layouts";

export default [
  {
    path: "/dashboard",
    component: DashboardLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "",
        name: "dashboard",
        component: DashboardView,
      },
    ],
  },
];
