<template>
  <div class="detail" v-if="listOfProducts">
    <div class="detail_product">
      <div class="detail_product-image">
        <img src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg" alt="">
      </div>
      <div class="detail_product-body" >
        <h2 class="detail_product-name">{{ listOfProducts.name }}</h2>
        <h4 class="detail_product-price">price: {{ listOfProducts.price }}</h4>
        <h4 class="detail_product-creatAt">{{
              new Date(listOfProducts.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })
            }}</h4>
        <h4 class="detail_product-type">type: {{ listOfProducts.type }}</h4>
        <p class="detail_product-description">{{ listOfProducts.description }}</p>
        <p class="detail_product-description">{{ listOfProducts.description }}</p>
        <p class="detail_product-description">{{ listOfProducts.description }}</p>
        <p class="detail_product-description">{{ listOfProducts.description }}</p>
      </div>
    </div>
    <div class="detail_card">
      <div class="detail_card-category">
        <h2 class="detail_card-category-header">category</h2>
        <ul class="detail_card-category-list">
          <li class="detail_card-category-items">
            <a href="">PHP</a>
          </li>
          <li class="detail_card-category-items">
            <a href="">JavaScript</a>
          </li>
          <li class="detail_card-category-items">
            <a href="">Ruby</a>
          </li>
          <li class="detail_card-category-items">
            <a href="">Vuejs</a>
          </li>
        </ul>
      </div>
      <div class="detail_card-course">
        <div class="card-course border-success mb-3 px-2">
          <div class="card-body text-success">
            <h5 class="card-title">Course 1</h5>
          <p>{{ listOfProducts.description }}</p>
          <p>{{ listOfProducts.description }}</p>
          </div>
        </div>
        <div class="card-course border-success mb-3 px-2">
          <div class="card-body text-success">
            <h5 class="card-title">Course 2</h5>
          <p>{{ listOfProducts.description }}</p>
          <p>{{ listOfProducts.description }}</p>
          </div>
        </div>
        <div class="card-course border-success mb-3 px-2">
          <div class="card-body text-success">
            <h5 class="card-title">Course 3</h5>
          <p>{{ listOfProducts.description }}</p>
          <p>{{ listOfProducts.description }}</p>
          </div>
        </div>
        <div class="card-course border-success mb-3 px-2">
          <div class="card-body text-success">
            <h5 class="card-title">Course 4</h5>
            <p>{{ listOfProducts.description }}</p>
            <p>{{ listOfProducts.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="detail_feature">
      <div class="card_feature card text-bg-primary mb-3">
        <div class="card-header">Feature 1</div>
        <div class="card-body">
          <h5 class="card-title">Primary card title</h5>
        <p>{{ listOfProducts.description }}</p>
        <p>{{ listOfProducts.description }}</p>
        </div>
      </div>
      <div class="card_feature card text-bg-secondary mb-3">
        <div class="card-header">Feature 2</div>
        <div class="card-body">
          <h5 class="card-title">Secondary card title</h5>
        <p>{{ listOfProducts.description }}</p>
        <p>{{ listOfProducts.description }}</p>
        </div>
      </div>
      <div class="card_feature card text-bg-success mb-3 mx-2">
        <div class="card-header">Feature 3</div>
        <div class="card-body">
          <h5 class="card-title">Course 1</h5>
        <p>{{ listOfProducts.description }}</p>
        <p>{{ listOfProducts.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import axios from 'axios'
import { useRoute } from 'vue-router'
export default {
setup() {
  const route = useRoute()
  const productId = route.params.id;
  const listOfProducts = ref();
     async function dataProduct() {
      try {
        const response = await axios.get(
          `https://63fc1d1e677c415873061a18.mockapi.io/tasks/${productId}`
        );
        listOfProducts.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };
    dataProduct();
    return {
      productId,
      listOfProducts,
    }
}
}
</script>

<style scoped lang="scss">
.detail {
  width: 80%;
  margin: auto;
}
.detail_product{
  display: flex;
  margin: 2rem 0;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;

  & .detail_product-name,
  .detail_product-price {
    font-weight: bold;
  }
}
.detail_product-image{
  width: 40%;
  margin: 0 20px 0 0;

  & img {
    width: 100%;
  }
}
.detail_product-body{
  width: 60%;
}
.detail_card {
  display: flex;
  justify-content: space-between;
}
.detail_card-category {
  width: 20%;
}
.detail_card-course {
  width: 80%;
  flex-wrap: wrap;
  display: flex;
}
.card-course {
  width: 25%;
}
.card_feature {
  flex-basis: 30%;
}
.detail_feature {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
}
.card-header {
  font-size: 1.2rem;
  font-weight: bold;
}
@import "./detailProduct.scss";
</style>