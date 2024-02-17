<template>
  <div class="gong-kinh-cover">
    <div class="gong-kinh-banner">
      <h1>SẢN PHẨM</h1>
    </div>
  </div>
  <div class="cart-home">
    <CartHome />
  </div>
  <div class="gongkinh">
    <div class="feature-products">
      <div class="featured-products-title">
        <h1>SẢN PHẨM NỔI BẬT</h1>
      </div>
      <FeaturedProducts :listOfProducts="listOfProducts"></FeaturedProducts>
    </div>
    <div class="new-products">
      <div class="new-products-title">
        <h1>SẢN PHẨM MỚI NHẤT</h1>
      </div>
      <div class="new-products-body">
        <div class="new-products-image">
          <img src="https://loremflickr.com/642/480/fashion" alt="" />
        </div>
        <Carousel
          :autoplay="3000"
          :wrap-around="true"
          v-bind="settings"
          :breakpoints="breakpoints"
        >
          <Slide v-for="listProducts in listOfProducts" :key="listProducts.id">
            <div class="carousel__item">
              <div class="card">
                <router-link :to="`/detailproduct/${listProducts.id}`">
                <div class="image-products">
                  <div class="card-sale" v-if="listProducts.price > 300">
                    <p>SALE</p>
                  </div>
                  <img
                    src="https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045-2.jpg"
                    class="card-img-top"
                    :alt="listProducts.type"
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{{ listProducts.name }}</h5>
                  <div class="card-price">
                    <p class="card-price-defaul">
                      {{ listProducts.price }}
                    </p>
                  </div>
                </div>
                </router-link>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
  <themedia-anna />
</template>

<script>
import { defineComponent, ref } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import FeaturedProducts from "../../views/FlashSale/FlashSale-item.vue";
import CartHome from "../CartShopping/CartHome.vue";
import axios from "axios";
import "vue3-carousel/dist/carousel.css";
import ThemediaAnna from "@/views/TheMedia/Themedia-Anna.vue";

export default defineComponent({
  name: "Breakpoints-Anna",
  components: {
    Carousel,
    Slide,
    Navigation,
    FeaturedProducts,
    CartHome,
    ThemediaAnna,
  },
  data: () => ({
    active: true,
    settings: {
      itemsToShow: 3,
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
        itemsToShow: 3,
        snapAlign: "center",
      },
      1900: {
        itemsToShow: 5,
        snapAlign: "center",
      },
    },
  }),
  setup() {
    const listOfProducts = ref();
     async function dataProduct() {
      try {
        const response = await axios.get(
          "https://63fc1d1e677c415873061a18.mockapi.io/tasks"
        );
        listOfProducts.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    dataProduct();
    return {
  dataProduct,
  listOfProducts,
}
  }
});
</script>

<style scoped>
.gong-kinh-banner {
  width: 100%;
  min-height: 520px;
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\forAnna\Rectangle-146.jpg)
    no-repeat;
  background-size: cover;
  position: relative;
}
.gong-kinh-banner h1 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.5em;
  position: absolute;
  bottom: 20%;
  left: 12%;
}
.gongkinh {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
}
.carousel {
  background-color: #fff;
}
.new-products-title h1,
.featured-products-title {
  text-align: start;
  padding: 10px 30px;
}
.new-products-title h1,
.featured-products-title h1 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.4em;
}
.new-products-body {
  display: flex;
  margin: 0 auto;
}
.new-products-image {
  min-width: 540px;
  height: 330px;
  object-fit: cover;
  margin-right: 25px;
}
.new-products-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  overflow: hidden;
}

.new-products-body section {
  overflow: hidden;
}
/* style card */
.card {
  width: 230px;
  height: 330px;
  border-radius: 10px;
}
.card-body {
  text-align: center;
  color: #000;
}
a {
  text-decoration: none;
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
