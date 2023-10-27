import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home-Anna.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/",
        name: "gongkinh",
        component: () => import("../views/Hottrend/Hottrend-Gongkinh.vue"),
      },
      {
        path: "/mat kinh",
        name: "matkinh",
        component: () => import("../views/Hottrend/Hottrend-Matkinh.vue"),
      },
    ],
  },
  {
    path: "/hanh-trinh-tu-te",
    name: "hanhtrinhtute",
    component: () => import("../Home/Hanhtrinhtute-Anna.vue"),
  },
  {
    path: "/san-pham",
    name: "sanpham",
    component: () => import("../products-Anna/Glasses/Glasses-Anna.vue"),
  },
  {
    path: "/ve-anna",
    name: "veanna",
    component: () => import("../components/For-Anna.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../Blog-Anna/News-Anna.vue"),
  },
  {
    path: "/oder-checking",
    name: "oderchecking",
    component: () => import("../components/OrderChecking-Anna.vue"),
  },
  {
    path: "/store",
    name: "store",
    component: () => import("../components/Store-Anna.vue"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../products-Anna/CartShopping/CartShopping.vue"),
  },
  {
    path: "/updateproduct/:id",
    name: "updateproduct",
    component: () => import("../Blog-Anna/Edit-Blog.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
