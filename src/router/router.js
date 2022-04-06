// import { createWebHistory, createRouter } from "vue-router";
// //import FentiPage from "@/FentiPage.vue";
// import App from "@/App.vue";

// const FentiPage = import("@/FentiPage.vue");

// // const routes = [
// //   {
// //     path: "/",
// //     name: "Home",
// //     component: App,
// //   },
// //   {
// //     path: "/fenti",
// //     name: "Fenti",
// //     component: FentiPage,
// //   },
// // ];

// // const router = createRouter({
// //   history: createWebHistory(),
// //   routes,
// // });

// // export default router;
// // //https://learnvue.co/2020/04/a-first-look-at-vue-router-in-vue3/#conclusion

// const history = createWebHistory();
// const router = createRouter({
//   history: history,
//   routes: [
//     {
//       path: "/",
//       name: "Home",
//       component: App,
//     },
//     {
//       path: "/fenti",
//       name: "FentiPage",
//       component: FentiPage,
//     },
//   ],
// });

// export default router;
import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/HomeComp.vue";
import About from "@/views/AboutComp.vue";
import Fenti from "@/views/FentiPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/fenti",
    name: "Fenti",
    component: Fenti,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
