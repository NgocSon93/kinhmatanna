<template>
  <div class="Glasses-eye">
    <div class="Glass-eye-item">
      <div
        class="list-Glass-eye"
        v-for="listGlassEye in listGlasses"
        :key="listGlassEye.id"
      >
        <div class="card">
          <div class="image-Glass-eye">
            <img
              :src="listGlassEye.image"
              class="card-img-top"
              :alt="listGlassEye.type"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ listGlassEye.name }}</h5>
            <div class="card-price">
              <p class="card-price-sale">{{ listGlassEye.pricedefaul }}</p>
              <p class="card-price-defaul">
                {{ listGlassEye.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hottrend-Matkinh",
  components: {},
  data: () => ({
    listGlasses: [
      {
        name: "Sleek Cotton Shirt",
        price: "643.00",
        pricedefaul: "900.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "1",
      },
      {
        name: "Sleek Metal Car",
        price: "802.00",
        pricedefaul: "999.000",
        type: "male",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 2,
        id: "2",
      },
      {
        name: "Electronic Cotton",
        price: "312.00",
        pricedefaul: "534.000",
        type: "male",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 3,
        id: "3",
      },
      {
        name: "Intelligent Rubber",
        price: "409.00",
        pricedefaul: "967.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 4,
        id: "4",
      },
      {
        name: "Fantastic Steel",
        price: "140.00",
        pricedefaul: "346.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "5",
      },
      {
        name: "Fantic Slice",
        price: "1650.00",
        pricedefaul: "532.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "6",
      },
      {
        name: "Tasel",
        price: "143.00",
        pricedefaul: "740.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "7",
      },
      {
        name: "Merse",
        price: "1880.00",
        pricedefaul: "9400.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "8",
      },
      {
        name: "Final",
        price: "1435.00",
        pricedefaul: "6900.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "9",
      },
      {
        name: "Steel",
        price: "183.00",
        pricedefaul: "940.000",
        type: "female",
        image: "https://loremflickr.com/641/480/fashion",
        reviewStar: 5,
        id: "10",
      },
    ],
  }),
};
</script>

<style scoped>
.Glasses-eye {
  border-radius: 20px;
  position: relative;
  /* top: -150px; */
}
.Glass-eye-item {
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
}
.list-Glass-eye {
  margin: 20px 10px;
}
.card {
  width: 225px;
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
.card-price-sale {
  text-decoration: line-through;
  margin: 5px;
  color: #acb9b8;
}
.card-price-defaul {
  margin: 5px;
}
</style>
