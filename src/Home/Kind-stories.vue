<template>
  <div class="kind-stories">
    <div class="kind-stories-header">
      <h4><font-awesome-icon :icon="['fab', 'centos']" /> TƯƠNG THÂN</h4>
      <h2>Những Câu Chuyện Tử Tế</h2>
    </div>
    <div class="kind-stories-happy-body d-flex">
      <div class="kind-stories-happy">
        <div class="kind-stories-happy-text">
          <h5>Chào tuần mới may mắn</h5>
          <a href="">Xem thêm</a>
        </div>
      </div>
      <div class="kind-stories-happy">
        <div class="kind-stories-happy-text">
          <h5>Chào tuần mới may mắn</h5>
          <a href="">Xem thêm</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.kind-stories {
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  padding-top: 5%;
}
.kind-stories-happy {
  border-radius: 16px;
  width: 335px;
  height: 530px;
  margin: 5% 1%;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 61.25%,
      rgba(103, 180, 180, 0.01) 61.26%,
      rgba(103, 180, 180, 0.9) 100%
    ),
    linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%),
    url(D:\FileLamBaiTap\kinhmatnana\public\images\hanhtrinhtute\KindStories.jpg),
    lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.kind-stories-header h4 {
  font-family: "Montserrat", Sans-serif;
  color: #81c8c2;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1em;
}
.kind-stories-header h2 {
  color: #67b4b4;
  font-family: "Montserrat", Sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1.3em;
  letter-spacing: -2.8px;
}
.kind-stories-happy {
  position: relative;
}
.kind-stories-happy-text {
  position: absolute;
  bottom: 0;
  left: 20px;
  padding: 15px;
}
.kind-stories-happy-text a {
  color: #efe5e5;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.kind-stories-happy-text h5 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 20px;
  font-weight: 700;
}
</style>
