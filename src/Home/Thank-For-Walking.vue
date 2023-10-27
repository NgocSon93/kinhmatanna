<template>
  <div class="image-header">
    <img src="/images/hanhtrinhtute/hanhtrinhtute10.jpg" alt="" />
    <div class="image-header-text">
      <p>Cảm ơn các bạn đã bước cùng chúng mình trên</p>
      <p><strong>Hành trình tử tế</strong></p>
    </div>
  </div>
  <div class="image-container">
    <div
      class="image-part"
      v-for="(imagePath, index) in imagePaths"
      :key="index"
    >
      <img :src="imagePath" alt="Hình ảnh" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    imagePaths() {
      // Lấy đường dẫn cơ sở đến thư mục public
      const baseUrl = process.env.BASE_URL;

      // Đường dẫn tương đối của tệp ảnh trong thư mục public
      const relativePaths = [
        "images/hanhtrinhtute/hanhtrinhtute5.jpg",
        "images/hanhtrinhtute/hanhtrinhtute5.jpg",
        "images/hanhtrinhtute/hanhtrinhtute4.jpg",
        "images/hanhtrinhtute/hanhtrinhtute4.jpg",
        "images/hanhtrinhtute/hanhtrinhtute3.jpg",
        "images/hanhtrinhtute/hanhtrinhtute3.jpg",
        "images/hanhtrinhtute/hanhtrinhtute2.jpg",
        "images/hanhtrinhtute/hanhtrinhtute2.jpg",
        "images/hanhtrinhtute/hanhtrinhtute1.jpg",
        "images/hanhtrinhtute/hanhtrinhtute1.jpg",
        "images/hanhtrinhtute/hanhtrinhtute8.jpg",
        "images/hanhtrinhtute/hanhtrinhtute8.jpg",
        "images/hanhtrinhtute/hanhtrinhtute0.jpg",
        "images/hanhtrinhtute/hanhtrinhtute0.jpg",
        "images/hanhtrinhtute/hanhtrinhtute7.jpg",
        "images/hanhtrinhtute/hanhtrinhtute7.jpg",
        "images/hanhtrinhtute/hanhtrinhtute6.jpg",
        "images/hanhtrinhtute/hanhtrinhtute6.jpg",
      ];

      // Lặp qua từng đường dẫn tương đối và kết hợp với đường dẫn cơ sở
      const fullPaths = relativePaths.map(
        (relativePath) => baseUrl + relativePath
      );

      return fullPaths;
    },
  },
};
</script>
<style scoped>
.image-header {
  position: relative;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5% 0 0 0;
}
.image-header img {
  height: 300px;
  width: 100%;
  object-fit: cover;
  opacity: 0.05;
  position: absolute;
}
.image-header-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 5% 0;
}
p,
strong {
  font-family: "Montserrat", Sans-serif;
  font-size: 46px;
  font-weight: 600;
  line-height: 1.35em;
  letter-spacing: -2px;
}
strong {
  color: #81c8c2;
}
.image-container {
  position: relative;
  background-image: url(D:\FileLamBaiTap\kinhmatnana\public\images\hanhtrinhtute\hanhtrinhtute10.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 16vw);
}
.image-container div {
  position: relative;
  width: 100%;
  border: 2px solid #fff;
}
.image-part img {
  width: 100%; /* Kích thước của phần ảnh */
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s, opacity 0.5s;
  transform-style: preserve-3d;
  opacity: 0;
  transform: rotateY(0deg);
}
.image-part img:hover {
  transform: rotateY(180deg);
  opacity: 1;
  transition: all 0.5s, opacity 0.5s;
}
</style>
