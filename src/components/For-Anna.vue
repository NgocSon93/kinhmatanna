<template>
  <div class="for-anna">
    <div class="for-anna-cover">
      <h1>LỜI CẢM ƠN</h1>
    </div>
    <div class="for-anna-body">
      <div class="for-anna-body-thank">
        <div class="for-anna-body-thank-image">
          <div class="image1">
            <img src="/images/forAnna/Rectangle-619.jpg" alt="" />
          </div>
          <div class="image2">
            <img src="/images/forAnna/Rectangle-620.jpg" alt="" />
          </div>
        </div>
        <div class="for-anna-body-thank-text">
          <h2>CẢM ƠN VÌ BẠN ĐÃ LỰA CHỌN</h2>
          <h2>CHÚNG TÔI</h2>
        </div>
      </div>
      <div class="for-anna-shopsystem">
        <div class="for-anna-shopsystem-text">
          <h2>HỆ THỐNG CỬA HÀNG KÍNH MẮT</h2>
        </div>
        <div class="for-anna-shopsystem-image">
          <img src="/images/forAnna/Rectangle-618.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
  <Themedia></Themedia>
</template>

<script>
import Themedia from "../views/TheMedia/Themedia-Anna.vue";
export default {
  name: "for-anna",
  components: { Themedia },
};
</script>

<style>
.for-anna-cover {
  width: 100%;
  min-height: 520px;
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\forAnna\Rectangle-146.jpg)
    no-repeat;
  background-size: cover;
  position: relative;
}
.for-anna-cover h1 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.5em;
  position: absolute;
  bottom: 20%;
  left: 12%;
}
.for-anna-body {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  position: relative;
}
.for-anna-body-thank {
  display: flex;
}
.for-anna-body-thank-image {
  display: flex;
  position: relative;
  width: 50%;
}
.image1 img,
.image2 img {
  width: 17vw;
  height: 30vw;
  margin: 15px;
  background-position: center center;
  background-size: cover;
}
.image2 img {
  position: relative;
  top: 20%;
}
.for-anna-shopsystem-text h2,
.for-anna-body-thank-text h2 {
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.4em;
  color: #414141;
  position: relative;
  top: 25%;
}

.for-anna-shopsystem {
  margin-top: 200px;
  display: flex;
  position: relative;
}
.for-anna-shopsystem-text,
.for-anna-shopsystem-image {
  width: 50%;
}
.for-anna-shopsystem-image img {
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
}
</style>
