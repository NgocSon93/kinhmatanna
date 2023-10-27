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
                <div class="image-products">
                  <div class="card-sale" v-if="listProducts.price > 300">
                    <p>SALE</p>
                  </div>
                  <img
                    :src="listProducts.image"
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
      </div>
    </div>
  </div>
  <themedia-anna />
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import FeaturedProducts from "../../views/FlashSale/FlashSale-item.vue";
import CartHome from "../CartShopping/CartHome.vue";

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
    listOfProducts: [
      {
        name: "Sleek Cotton Shirt",
        price: "643.00",
        pricedefaul: "900.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "1",
      },
      {
        name: "Sleek Metal Car",
        price: "802.00",
        pricedefaul: "999.000",
        type: "male",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 2,
        id: "2",
      },
      {
        name: "Electronic Cotton",
        price: "312.00",
        pricedefaul: "534.000",
        type: "male",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 3,
        id: "3",
      },
      {
        name: "Intelligent Rubber",
        price: "409.00",
        pricedefaul: "967.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 4,
        id: "4",
      },
      {
        name: "Fantastic Steel",
        price: "140.00",
        pricedefaul: "346.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "5",
      },
      {
        name: "Fantic Slice",
        price: "1650.00",
        pricedefaul: "532.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "6",
      },
      {
        name: "Tasel",
        price: "143.00",
        pricedefaul: "740.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "7",
      },
      {
        name: "Merse",
        price: "1880.00",
        pricedefaul: "9400.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "8",
      },
      {
        name: "Final",
        price: "1435.00",
        pricedefaul: "6900.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "9",
      },
      {
        name: "Steel",
        price: "183.00",
        pricedefaul: "940.000",
        type: "female",
        image: "https://loremflickr.com/640/480/fashion",
        reviewStar: 5,
        id: "10",
      },
    ],
    // carousel settings
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
