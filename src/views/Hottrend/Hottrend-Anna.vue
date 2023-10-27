<template>
  <header class="hot-trend">
    <div class="hot-trend-navbar">
      <div class="hot-trend-title">
        <h3>HOT TREND</h3>
      </div>
      <div class="hot-trend-nav">
        <div class="hot-trend-nav-title">
          <h1>HÀNG MỚI LÊN KỆ</h1>
        </div>
        <div class="hot-trend-nav-link">
          <router-link :to="{ name: 'gongkinh' }">Gọng kính</router-link>
          <router-link :to="{ name: 'matkinh' }">Kính râm</router-link>
          <router-link :to="{ name: 'matkinh' }">Mắt kính</router-link>
        </div>
      </div>
    </div>
  </header>
  <router-view></router-view>
  <div class="button">
    <button type="button" class="btn btn-dark">
      <router-link :to="{ name: 'sanpham' }">Xem tất cả</router-link>
    </button>
  </div>
</template>
<script>
export default {
  name: "Hottrend-Anna",
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.hot-trend {
  background-image: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\bg.jpg);
  height: 450px;
  background-size: cover;
  position: relative;
  top: 200px;
}
.hot-trend-navbar {
  position: relative;
  top: 20%;
}
.hot-trend-title h3 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  line-height: 1.4em;
  text-align: start;
  margin-left: 15%;
}
.hot-trend-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.hot-trend-nav-title {
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\Vector.png)
    no-repeat;
  background-size: 90%;
}
.hot-trend-nav-title h1 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 38px;
  font-weight: 600;
  line-height: 1.4em;
  padding: 10px;
}
.hot-trend-nav-link a {
  text-decoration: none;
  transition: 0.3s;
  color: #fff;
  padding: 8px 16px 8px 16px;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4em;
}
.btn-dark a {
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 0;
}
.btn-dark a:hover {
  color: #000;
}
.btn-dark:hover {
  background-color: #fff;
}
.button {
  text-align: center;
}
</style>
