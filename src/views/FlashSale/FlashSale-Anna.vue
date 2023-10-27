<template>
  <div class="products">
    <div class="products-title">
      <h1>SĂN FLASH SALE</h1>
      <p>Hàng trăm sản phẩm bắt trend mới nhất</p>
    </div>
    <FlashSaleItem :listOfProducts="listOfProducts"></FlashSaleItem>
  </div>
</template>

<script>
import FlashSaleItem from "./FlashSale-item.vue";
export default {
  name: "Flash-sale",
  components: { FlashSaleItem },
  data: () => ({
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
  }),
};
</script>

<style scoped>
.products {
  background-color: #81c8c2;
  max-width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 100px;
  position: relative;
}
.products-title {
  text-align: start;
  padding: 20px 30px;
}
.products-title h1 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4em;
}
.products-title p {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
</style>
