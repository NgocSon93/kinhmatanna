<template>
  <div class="main-activitives">
    <div class="main-activitives-header">
      <div class="main-activitives-header-text">
        <h2>CÁC HOẠT ĐỘNG CHÍNH</h2>
        <p>"Hành trình tử tế" được khởi hành bằng 3 hoạt động chính</p>
      </div>
      <div class="main-activitives-header-button">
        <button type="button" class="btn btn-outline-light">
          Cộng đồng tử tế
          <font-awesome-icon :icon="['fas', 'chevron-right']" class="icon" />
        </button>
      </div>
    </div>
    <div class="main-activitives-line"></div>
    <div class="main-activitives-body">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Đôi Mắt Mặt Trời</h5>
          <p class="card-text">
            Tài trợ các ca mổ mắt dị tât bẩm sinh cho các em nhỏ có hoàn cảnh
            khó khăn
          </p>
        </div>
        <img
          src="/images/hanhtrinhtute/hoatdonghttt.png"
          class="card-img-bottom"
          alt="..."
        />
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Túi Tử Tế</h5>
          <p class="card-text">
            Anna sẽ in 500,000 chiếc túi tử tế nhằm lan tỏa câu chuyện tìm người
            thân thất lạc, cùng hi vọng phép màu xảy ra
          </p>
        </div>
        <img
          src="/images/hanhtrinhtute/hoatdonghttt1.png"
          class="card-img-bottom"
          alt="..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main-activitives {
  max-width: 80%;
  margin: 0 auto;
  border-radius: 20px;
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\hanhtrinhtute\bannerhoatdong.png)
    no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 800px;
  position: relative;
  margin-top: 100px;
}
.main-activitives-header {
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0 5%;
}
.main-activitives-header-text {
  opacity: 1;
  animation: loading 2s;
}
.main-activitives-header-text h2 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1.3em;
  letter-spacing: -2.8px;
}
.main-activitives-header-text p {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.3em;
  letter-spacing: -1px;
}
.btn {
  border-radius: 30px;
  width: 250px;
  height: 50px;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.48px;
}
.icon {
  margin: 0 0 0 20px;
}
.main-activitives-line {
  width: 90%;
  border-top: 1px solid #fff;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 2%;
}
.main-activitives-body {
  display: flex;
  justify-content: space-between;
  padding: 5%;
}
.card {
  width: 48%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body {
  padding: 5% 7%;
}
.card-body:hover {
  color: #81c8c2;
}
.card-body h5 {
  height: 80%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #000000;
}
.card-title {
  font-family: "Montserrat", Sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3em;
  letter-spacing: -1.6px;
}

.card-text {
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4em;
  letter-spacing: -0.6px;
  margin-top: 20px;
}
img {
  width: 90%;
  padding: 10% 2%;
  flex: 1;
}
@keyframes loading {
  from {
    opacity: 0;
    height: 50px;
  }
  to {
    opacity: 1;
    height: 100px;
  }
}
</style>
