<template>
  <div class="the-media">
    <div class="the-media-preview">
      <div class="the-media-preview-title"><h1>VŨ TRỤ TRUYỀN THÔNG</h1></div>
      <div class="the-media-preview-text">
        <p>
          Kính mắt Anna chắc không còn quá xa lạ với giới trẻ nữa. Đây là kênh
          thông tin mua sắm và giải trí dành cho giới trẻ, là “món ăn tinh thần”
          hằng ngày không thể thiếu của mỗi người trẻ.
        </p>
        <p>
          Được thành lập từ năm 2015, trải qua hơn 8 năm phát triển kính mắt
          Anna đã, đang và sẽ chiếm vị trí không thể thiếu đối với các bạn trẻ.
          Cập nhật thông tin thời trang nhanh chóng và phù hợp với thị hiếu của
          khán giả thông qua các mạng xã hội như Facebook, Tiktok, Instagram,
          Youtube, kính mắt Anna là lựa chọn hàng đầu cho những ai muốn tận
          hưởng các bài viết, video vừa mang tính giải trí mà vẫn có đầy đủ
          thông tin cần thiết.
        </p>
      </div>
    </div>
    <div class="the-media-link">
      <div class="the-media-link-background"></div>
      <div class="the-media-facebook">
        <div class="the-media-facebook-icon">
          <font-awesome-icon :icon="['fab', 'square-facebook']" />
        </div>
        <div class="the-media-facebook-text">
          <h3>ANNA</h3>
          <p>@kinhmatanna</p>
        </div>
      </div>
      <div class="the-media-instagram">
        <div class="the-media-instagram-icon">
          <font-awesome-icon :icon="['fab', 'square-instagram']" />
        </div>
        <div class="the-media-instagram-text">
          <h3>ANNA</h3>
          <p>@kinhmatanna</p>
        </div>
      </div>
      <div class="the-media-tiktok">
        <div class="the-media-tiktok-icon">
          <font-awesome-icon :icon="['fab', 'tiktok']" />
        </div>
        <div class="the-media-tiktok-text">
          <h3>ANNA</h3>
          <p>@kinhmatanna</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.the-media {
  max-width: 80%;
  margin: 0 auto;
  margin-top: 8%;
  display: flex;
}
.the-media-preview {
  width: 40%;
  margin-right: 5%;
}
.the-media-preview-title {
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\Vector.png)
    no-repeat;
  background-size: 80%;
  padding: 5%;
}
.the-media-preview-text p {
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
.the-media-link {
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.the-media-link-background {
  height: 22vw;
  width: 22vw;
  background: linear-gradient(
    45.58deg,
    #3f5570 1.89%,
    #9faebf 29.93%,
    #373e44 49.79%,
    #d4e0ea 98.68%
  ) !important;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.the-media-facebook {
  background: linear-gradient(
    45.58deg,
    #0f74ed 1.89%,
    #147dfa 29.93%,
    #098df3 49.79%,
    #0e8ef1 98.68%
  ) !important;
  position: absolute;
  left: 12%;
}
.the-media-instagram-icon,
.the-media-tiktok-icon,
.the-media-facebook-icon {
  color: #fff;
  font-size: 40px;
  position: relative;
  left: 10%;
  top: 3%;
}
.the-media-instagram-text h3,
.the-media-tiktok-text h3,
.the-media-facebook-text h3 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5em;
  margin: 0;
}
.the-media-instagram-text p,
.the-media-tiktok-text p,
.the-media-facebook-text p {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 12px;
  line-height: 1.4em;
}
.the-media-instagram-text,
.the-media-tiktok-text,
.the-media-facebook-text {
  position: absolute;
  bottom: 0;
  left: 10%;
}
.the-media-instagram {
  background: linear-gradient(
    45.58deg,
    #ea8b5f 1.89%,
    #da5f5b 21.75%,
    #c4449e 41.02%,
    #a43592 98.68%
  ) !important;
  position: absolute;
  right: 10%;
  top: -10%;
}
.the-media-tiktok {
  background-image: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\imgtiktok.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  bottom: -15%;
  right: 14%;
}
.the-media-facebook,
.the-media-instagram,
.the-media-tiktok {
  width: 15vw;
  height: 12vw;
}
</style>
