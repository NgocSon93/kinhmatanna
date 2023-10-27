<template>
  <div class="loyal-customer">
    <div class="loyal-customer-title">
      <h3>TÌNH THƯƠNG MẾN THƯƠNG</h3>
      <h1>KHÁCH HÀNG THÂN THIẾT</h1>
    </div>
    <LoyalCustomerSlide></LoyalCustomerSlide>
  </div>
</template>

<script>
import LoyalCustomerSlide from "./LoyalCustomer-Slide.vue";
export default {
  name: "Loyal-Customer",
  components: { LoyalCustomerSlide },
};
</script>

<style scoped>
.loyal-customer {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 10%;
}
.loyal-customer-title {
  text-align: start;
  padding: 20px 30px;
}
.loyal-customer-title h1 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4em;
}
.loyal-customer-title h3 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
</style>
