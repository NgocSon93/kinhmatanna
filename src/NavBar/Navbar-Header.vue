<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/logo-anna.png" />
    </div>
    <div class="header-nav">
      <router-link :to="{ name: 'home' }">TRANG CHỦ</router-link>
      <router-link :to="{ name: 'hanhtrinhtute' }"
        >HÀNH TRÌNH TỬ TẾ</router-link
      >
      <router-link :to="{ name: 'sanpham' }">SẢN PHẨM</router-link>
      <router-link :to="{ name: 'veanna' }">VỀ ANNA</router-link>
      <router-link :to="{ name: 'blog' }">BLOG</router-link>
      <router-link :to="{ name: 'oderchecking' }">ODER CHECKING</router-link>
      <router-link :to="{ name: 'store' }">STORE</router-link>
    </div>
    <div class="header-icon">
      <button type="button" class="btn position-relative">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <button type="button" class="btn position-relative">
        <font-awesome-icon :icon="['far', 'circle-user']" />
      </button>
      <button type="button" class="btn position-relative">
        <router-link
          class="nav-link"
          :class="$route.name == 'Cart' ? 'active' : ''"
          aria-current="page"
          :to="{ name: 'Cart' }"
        >
          <font-awesome-icon :icon="['fas', 'cart-shopping']" />
          <span
            v-if="$store.state.cart.length >= 0"
            class="align-items-center justify-content-center translate-middle badge rounded-pill bg-secondary"
          >
            {{ $store.state.cart.length }}
          </span>
        </router-link>
      </button>
    </div>
  </header>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header {
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header-logo img {
  height: 60px;
}
.header-nav a {
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.4em;
  color: #414141;
  text-decoration: none;
  margin-left: 35px;
  transition: 0.3s;
}
.header-nav a:hover {
  color: #81c8c2;
}
.header a.router-link-exact-active {
  color: #81c8c2;
}
.header-icon button {
  font-size: 25px;
  margin: 0 10px;
}
.header-icon button span {
  font-size: 15px;
  padding: 3px;
  color: #ffffff;
}
</style>
