<template>
  <div class="Glasses">
    <div class="products-Search">
      <input
        type="number"
        placeholder="Search by number..."
        v-model="searchProductsPrice"
      />
      <input
        type="text"
        placeholder="Search by name..."
        v-model="searchProductsName"
      />
    </div>
    <div class="Glass-item">
      <div
        class="list-Glass"
        v-for="product in filterProductsComputed"
        :key="product.id"
      >
        <div class="card">
          <div class="image-Glass">
            <img
              :src="product.image"
              class="bd-placeholder-img card-img-top"
              width="100%"
              :alt="product.type"
            />
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <div class="card-price">
              <p class="card-price-sales">{{ product.pricedefaul }}</p>
              <p class="card-price-defaul">
                {{ product.price }}
              </p>
            </div>
            <div class="d-flex justify-content-center align-items-center m-2">
              <div class="btn-group">
                <CartBTN :product="product"></CartBTN>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartBTN from "./CartBtn.vue";
export default {
  components: { CartBTN },
  data() {
    return {
      searchProductsPrice: "",
      searchProductsName: "",
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
    };
  },
  computed: {
    filterProductsComputed() {
      return this.listOfProducts.filter((productlist) => {
        return (
          productlist.name.match(this.searchProductsName) &&
          productlist.price >= this.searchProductsPrice
        );
      });
    },
  },
};
</script>

<style scoped>
.Glasses {
  position: relative;
}
.products-Search input {
  width: 40%;
  height: 40px;
  border-radius: 5px;
  margin: 20px;
}
.products-Search,
.Glass-item {
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
}
.list-Glass {
  margin: 20px 10px;
}
.card {
  width: 230px;
  border-radius: 10px;
}
.card-body {
  text-align: center;
  padding: 0;
}
.card-img-top {
  height: 250px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}
.card-title {
  margin-top: 10px;
}
.card-price {
  display: flex;
  justify-content: center;
  height: 30px;
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
