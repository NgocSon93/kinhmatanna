<template>
  <button
    type="button"
    @click="($event) => addOrRemove()"
    class="cart-btn btn btn-sm btn-outline-secondary me-2"
  >
    <font-awesome-icon :icon="['fas', 'cart-shopping']" />
  </button>
  <CartAddRemove v-if="!toAdd" :product="item"></CartAddRemove>
</template>

<script>
import CartAddRemove from "./CartAddRemove.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  props: ["product"],
  components: { CartAddRemove },
  data() {
    return {
      toAdd: true,
      item: [],
    };
  },
  methods: {
    async addOrRemove() {
      this.item.qty = 1;
      this.$store.commit("addRemoveCart", {
        product: this.item,
        toAdd: this.toAdd,
      });
      let toastMSG;
      this.toAdd
        ? (toastMSG = "Added to cart")
        : (toastMSG = "Remove from cart");
      toast(toastMSG, {
        autoClose: 1000,
      });
      this.toAdd = !this.toAdd;
    },
  },
  mounted() {
    let cart = this.$store.state.cart;
    let obj = cart.find((o) => o.id === this.product.id);
    if (obj) {
      this.toAdd = false;
      this.item = obj;
    } else {
      this.item = this.product;
      this.toAdd = true;
    }
  },
};
</script>

<style></style>
