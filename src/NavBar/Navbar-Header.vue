<template>
  <header class="header">
    <div class="header-logo">
      <img src="../assets/logo-anna.png" />
    </div>
    <div class="header_nav-pc">
      <router-link class="header_nav-pc--link" :to="{ name: 'home' }">TRANG CHỦ</router-link>
      <router-link class="header_nav-pc--link" :to="{ name: 'hanhtrinhtute' }"
        >HÀNH TRÌNH TỬ TẾ</router-link
      >
      <router-link class="header_nav-pc--link" :to="{ name: 'sanpham' }">SẢN PHẨM</router-link>
      <router-link class="header_nav-pc--link" :to="{ name: 'veanna' }">VỀ ANNA</router-link>
      <router-link class="header_nav-pc--link" :to="{ name: 'blog' }">BLOG</router-link>
      <router-link class="header_nav-pc--link" :to="{ name: 'oderchecking' }">ODER CHECKING</router-link>
      <router-link class="header_nav-pc--link" :to="{ name: 'store' }">STORE</router-link>
    </div>
    <label for="nav-mobile-input" class="header_nav-icon">
      <font-awesome-icon :icon="['fas', 'bars']" />
    </label>
    <input type="checkbox" hidden class="nav_input" id="nav-mobile-input">
    <label for="nav-mobile-input" class="header_nav-overlay"></label>
    <div class="header_nav-mobile">
      <label for="nav-mobile-input" class="header_nav-mobile--close">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </label>
      <router-link class="header_nav-mobile--link" :to="{ name: 'home' }">TRANG CHỦ</router-link>
      <router-link class="header_nav-mobile--link" :to="{ name: 'hanhtrinhtute' }"
        >HÀNH TRÌNH TỬ TẾ</router-link
      >
      <router-link class="header_nav-mobile--link" :to="{ name: 'sanpham' }">SẢN PHẨM</router-link>
      <router-link class="header_nav-mobile--link" :to="{ name: 'veanna' }">VỀ ANNA</router-link>
      <router-link class="header_nav-mobile--link" :to="{ name: 'blog' }">BLOG</router-link>
      <router-link class="header_nav-mobile--link" :to="{ name: 'oderchecking' }">ODER CHECKING</router-link>
      <router-link class="header_nav-mobile--link" :to="{ name: 'store' }">STORE</router-link>
    </div>
    <div class="header-icon">
      <button type="button" class="btn position-relative header-icon-search">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <button type="button" class="btn position-relative header-icon-user">
        <font-awesome-icon :icon="['far', 'circle-user']" />
      </button>
      <button type="button" class="btn position-relative header-icon-cart">
        <router-link class="nav-link"
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

<style scoped lang="scss">
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
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.header-logo img {
  height: 60px;
}
.header_nav-pc--link {
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
.nav_link {
  margin-left: 0 !important;
}
.header_nav-pc--link:hover {
  color: #81c8c2;
}
.header a.router-link-exact-active {
  color: #81c8c2;
}
.header-icon button {
  font-size: 25px;
  margin: 0 10px;
}
.header_nav-icon  {
  font-size: 25px;
  margin: 0 10px;
  display: none;
}
.header_nav-mobile--close {
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
}
.header-icon button span {
  font-size: 15px;
  padding: 3px;
  color: #ffffff;
}
.header_nav-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;
  animation: fadeIn linear 0.2s;
  z-index: 1;
}

.header_nav-mobile {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  max-width: 100%;
  background-color: #fff;
  transform: translateX(-100%);
  opacity: 0;
  transition: transform linear 0.2s,opacity linear 0.2s;
  z-index: 2;
}
.header_nav-mobile--link {
  text-decoration: none;
  color: #333;
  display: block;
  padding: 8px 15px;
  font-size: 1.1rem;
  font-weight: 500;
}

.nav_input:checked ~ .header_nav-overlay {
  display: block;
}

.nav_input:checked ~ .header_nav-mobile {
  transform: translateX(0);
  opacity: 1;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@import "./header.scss"
</style>
