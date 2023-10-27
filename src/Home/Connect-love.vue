<template>
  <div class="connect-love">
    <div class="connect-love-image">
      <div class="connect-love-contact">
        <div class="connect-love-contact-header">
          <h2>Kết nối yêu thương</h2>
          <div class="connect-love-contact-text">
            <div class="connect-love-context-text-contact">
              <font-awesome-icon class="icon" :icon="['fas', 'phone']" />
              <h4>Liên hệ:</h4>
              <p>0888.071.297</p>
            </div>
            <div class="connect-love-context-text-email">
              <font-awesome-icon class="icon" :icon="['fas', 'envelope']" />
              <h4>Email:</h4>
              <p>Kinhmatanna@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="connect-love-address">
        <div class="connect-love-address-icon">
          <font-awesome-icon class="icon-address" :icon="['fab', 'facebook']" />
          <font-awesome-icon class="icon-address" :icon="['fab', 'twitter']" />
          <font-awesome-icon class="icon-address" :icon="['fab', 'tiktok']" />
          <font-awesome-icon
            class="icon-address"
            :icon="['fab', 'instagram']"
          />
        </div>
        <div class="connect-love-address-text">
          <div class="connect-icon d-flex align-items-center pb-2">
            <font-awesome-icon class="icon" :icon="['fas', 'location-dot']" />
            <h4>Địa điểm :</h4>
          </div>
          <p>
            Dự kiến 30.000+ học sinh bản CAO và XA khó khăn trong hơn 60 xã
            thuộc 7 huyện khó nhất của tỉnh Điện Biên: Huyện Mường Nhé, huyện
            Nậm Pồ, huyện Điện Biên Đông và Mường Chà, Tủa Chùa , Mường Ảng,
            TP.Điện Biên Phủ, Huyện Điện Biên.
          </p>
          <p>– Tỉnh Cao Bằng : Huyện Bảo Lâm</p>
          <p>– Tỉnh Gia Lai</p>
          <p>– Tỉnh Đắk Lắk ....</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.connect-love {
  background-image: url(D:\FileLamBaiTap\kinhmatnana\public\images\hanhtrinhtute\coverhttt1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.connect-love-image {
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  padding: 5% 0 0 0;
  height: 600px;
}
.connect-love-contact,
.connect-love-address {
  width: 50%;
}
.connect-love-contact {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.connect-love-contact-header h2 {
  color: #81c8c2;
  font-family: "Montserrat", Sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.3em;
  margin-bottom: 5%;
}
.connect-love-context-text-contact,
.connect-love-context-text-email {
  display: flex;
  align-items: center;
  margin: 2% 0;
}
.connect-love-address-text {
  width: 70%;
}
.connect-love-address-text p {
  margin: 2% 0;
}
p {
  margin: 0;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
}
h4 {
  padding: 0 10px;
  margin: 0;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.5em;
}
.icon {
  color: #81c8c2;
  font-size: 25px;
}
.connect-love-address-icon {
  margin-bottom: 3%;
}
.icon-address {
  font-size: 40px;
  color: #000;
  padding: 20px;
}
.connect-love-address-icon .icon-address:hover {
  color: #81c8c2;
}
</style>
