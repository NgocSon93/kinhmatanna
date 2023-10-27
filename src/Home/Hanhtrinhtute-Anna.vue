<template>
  <div class="kind-journey">
    <div class="kind-journey-cover">
      <div class="kind-journey-cover-text">
        <img src="/images/hanhtrinhtute/bannerhttt.png" alt="" />
        <p>
          Hành Trình Tử Tế là một dự án
          <strong>thiện nguyện vì cộng đồng</strong>, được phát triển bởi Kính
          mắt Anna – Thương hiệu Kính mắt của Sự Tử Tế.
        </p>
        <p>
          Với thông điệp: <strong>Tử tế từ những điều nhỏ nhất</strong>, mỗi đơn
          hàng của các bạn tại Kính mắt Anna, đồng nghĩa với việc các bạn đang
          cùng chúng mình bước đi trên <strong>Hành Trình Tử Tế</strong>, mang
          những đôi mắt sáng đến mọi miền đất nước và lan toả những giá trị tốt
          đẹp đến cộng đồng.
        </p>
      </div>
    </div>
    <div class="kind-journey-video">
      <video loop muted controls width="100%" height="100%">
        <source
          src="/images/hanhtrinhtute/videohanhtrinhtute.mp4"
          type="video/webm"
        />
        <source
          src="/images/hanhtrinhtute/videohanhtrinhtute.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <main-activitives></main-activitives>
    <mutuality></mutuality>
    <companion />
    <thank-for-walking />
    <kind-stories />
    <connect-love />
  </div>
</template>

<script>
import MainActivitives from "./Main-activitives.vue";
import Mutuality from "./Mutuality-Anna.vue";
import ThankForWalking from "./Thank-For-Walking.vue";
import ConnectLove from "./Connect-love.vue";
import Companion from "./Companion-steps.vue";
import KindStories from "./Kind-stories.vue";
export default {
  name: "Kind-journey",
  components: {
    MainActivitives,
    Mutuality,
    ThankForWalking,
    ConnectLove,
    Companion,
    KindStories,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.kind-journey-cover {
  width: 100%;
  min-height: 800px;
  background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0.1)),
    url(D:\FileLamBaiTap\kinhmatnana\public\images\hanhtrinhtute\coverhttt.png)
      no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
}
.kind-journey-cover-text img {
  width: 55%;
  margin-bottom: 15px;
}
.kind-journey-cover-text {
  width: 55%;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.65em;
  position: relative;
  left: 10%;
  opacity: 1;
  animation: loading 3s;
}
strong {
  color: #81c8c2;
  font-weight: 500;
}
@keyframes loading {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
