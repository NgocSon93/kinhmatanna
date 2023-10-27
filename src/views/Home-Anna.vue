<template>
  <div class="homebanner">
    <div class="annaloveyou">
      <h2>SEE BETTER THAN YESTERDAY - ANNA LOVE YOU!</h2>
    </div>
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in slides" :key="slide">
        <div class="carousel__item">
          <img :src="slide" />
        </div>
      </Slide>
    </Carousel>
    <CarouselAnna :slides="slides"></CarouselAnna>
    <FlashSale></FlashSale>
    <Hottrend></Hottrend>
    <ChooseGlasses></ChooseGlasses>
    <StoreAddress></StoreAddress>
    <TheMedia></TheMedia>
    <LoyalCustomer></LoyalCustomer>
    <QAwithAnna></QAwithAnna>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
import CarouselAnna from "./Carousel/Carousel-Anna.vue";
import FlashSale from "./FlashSale/FlashSale-Anna.vue";
import Hottrend from "./Hottrend/Hottrend-Anna.vue";
import ChooseGlasses from "./ChooseGlasses/ChooseGlasses.vue";
import StoreAddress from "./Adress/StoreAdress.vue";
import TheMedia from "./TheMedia/Themedia-Anna.vue";
import QAwithAnna from "./Q&AwithAnna/Q&AwithAnna.vue";
export default {
  name: "Home-Anna",
  components: {
    Carousel,
    Slide,
    CarouselAnna,
    FlashSale,
    Hottrend,
    ChooseGlasses,
    StoreAddress,
    TheMedia,
    QAwithAnna,
  },
  data: () => ({
    // slides: [
    //   "/img/home-cover.a0b5180a.jpg",
    //   "/img/home-cover1.8197c798.png",
    //   "/img/home-cover2.a5cd0815.png",
    // ],
  }),
  computed: {
    slides() {
      // Lấy đường dẫn cơ sở đến thư mục public
      const baseUrl = process.env.BASE_URL;

      // Đường dẫn tương đối của tệp ảnh trong thư mục public
      const relativePaths = [
        "images/homeAnna/home-cover.jpg",
        "images/homeAnna/home-cover1.png",
        "images/homeAnna/home-cover2.png",
      ];

      // Lặp qua từng đường dẫn tương đối và kết hợp với đường dẫn cơ sở
      const fullPaths = relativePaths.map(
        (relativePath) => baseUrl + relativePath
      );

      return fullPaths;
    },
  },
};
</script>

<style scoped>
.annaloveyou {
  background-color: #000;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.annaloveyou h2 {
  color: #fff;
  font-size: 16px;
  line-height: 17px;
}
img {
  width: 100%;
}
</style>
