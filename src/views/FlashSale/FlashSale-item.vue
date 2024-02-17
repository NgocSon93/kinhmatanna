<template>
  <Carousel
    :autoplay="3000"
    :wrap-around="true"
    v-bind="settings"
    :breakpoints="breakpoints"
  >
    <Slide v-for="listProducts in listOfProducts" :key="listProducts.id">
      <div class="carousel__item">
        <div class="card">
          <div class="image-products">
            <div class="card-sale" v-if="listProducts.price > 300">
              <p>SALE</p>
            </div>
            <img
              src="https://cdn.vjshop.vn/tin-tuc/5-cach-cai-thien-bo-cuc-anh-phong-canh-thong-qua-phoi-sang-lau/cai-thien-anh-phong-canh-bang-phuong-phap-chup-phoi-sang-lau.jpg"
              class="card-img-top"
              :alt="listProducts.type"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ listProducts.name }}</h5>
            <div class="card-price">
              <p
                class="card-price-sale"
                :class="{ 'card-price-sales': active }"
              >
                {{ listProducts.pricedefaul }}
              </p>
              <p class="card-price-defaul">
                {{ listProducts.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Breakpoints-Anna",
  props: ["listOfProducts"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    active: true,
    // carousel settings
    settings: {
      itemsToShow: 5,
      snapAlign: "start",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      500: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      700: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: "center",
      },
      1900: {
        itemsToShow: 7,
        snapAlign: "center",
      },
    },
  }),
});
</script>
<style scoped>
.carousel {
  background-color: #bfe8e3;
  padding: 3% 0;
  border-radius: 0 0 20px 20px;
}
Carousel {
  background-color: #bfe8e3;
}
.card {
  width: 230px;
  height: 330px;
  border-radius: 10px;
}
.card-body {
  text-align: center;
}
.card-img-top {
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.card-price {
  display: flex;
  justify-content: center;
}
.card-price-sales {
  text-decoration: line-through;
  color: #acb9b8;
}
.card-price-defaul {
  margin: 0 5px;
}
.card-sale {
  border-radius: 5px;
  background-color: rgb(240, 74, 74);
  position: absolute;
  top: 5%;
  left: 2%;
  width: 30%;
  height: 8%;
}
.card-sale p {
  font-family: "Montserrat", Sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
