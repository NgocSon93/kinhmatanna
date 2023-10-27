<template>
  <div class="Storeaddress">
    <div class="Storeaddress-title">
      <div class="Storeaddress-title-name">
        <h3>ĐỊA ĐIỂM</h3>
        <h1>HỆ THỐNG CỬA HÀNG</h1>
      </div>
      <div class="Storeaddress-title-icon">
        <button type="button" class="btn btn-dark">
          <router-link :to="{ name: 'store' }"
            ><font-awesome-icon :icon="['fas', 'location-dot']" class="icon" />
            <p>Tìm kiếm cơ sở</p></router-link
          >
        </button>
      </div>
    </div>
    <div class="Storeaddress-image">
      <div class="Storeaddress-image-left">
        <img
          src="/images/homeAnna/address1.png"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="Storeaddress-image-right">
        <img
          src="/images/homeAnna/address2.jpg"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreAdress",
  data() {
    return {};
  },
};
</script>

<style scoped>
.Storeaddress {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 100px;
}
.Storeaddress-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-dark a {
  display: flex;
  justify-content: center;
  text-decoration: none;
  align-items: center;
  color: #fff;
}
.btn-dark p {
  margin: 0;
  padding: 5px;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
}
.icon {
  font-size: 20px;
}
.Storeaddress-title-name {
  text-align: start;
  padding: 20px 30px;
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\Vector.png)
    no-repeat;
  background-size: 100%;
}
.Storeaddress-title-name h1 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4em;
}
.Storeaddress-title-name h3 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
.Storeaddress-image {
  display: flex;
  height: 500px;
}
.Storeaddress-image-left {
  width: 60%;
  margin-right: 15px;
}
.Storeaddress-image-right {
  width: 40%;
}
.Storeaddress-image-left img,
.Storeaddress-image-right img {
  height: 100%;
  width: 100%;
  border-radius: 7px;
}
</style>
