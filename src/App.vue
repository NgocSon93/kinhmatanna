<template>
  <Header />
  <router-view />
  <Footer />
</template>
<script>
/* eslint-disable */
import Header from "./NavBar/Navbar-Header.vue";
import Footer from "./NavBar/Navbar-Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  setup() {},
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
