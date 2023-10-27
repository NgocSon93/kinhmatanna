<template>
  <div class="mutuality">
    <div class="mutuality-header">
      <h4><font-awesome-icon :icon="['fab', 'centos']" /> TƯƠNG THÂN</h4>
      <h3>
        Hy vọng rằng với những bước chân nối dài của chúng ta,
        <strong>"Hành Trình Tử Tế by Anna"</strong> sẽ luôn rộng mở soi sáng cho
        các mảnh đòi còn đang chìm trong bóng tối.
      </h3>
    </div>
    <div class="mutuality-body">
      <div class="mutuality-body-child">
        <span class="count">{{ currentCount }}</span>
        <h2>EM NHỎ</h2>
        <p>Được tài trợ chi phí phẫu thuật mắt</p>
      </div>
      <div class="mutuality-body-decentbag">
        <span class="count">{{ currentCount }}</span>
        <h2>TÚI TỬ TẾ</h2>
        <p>Được phát tặng để tìm người thân thất lạc</p>
      </div>
      <div class="mutuality-body-shares">
        <span class="count">{{ currentCount }}</span>
        <h2>LƯỢT CHIA SẺ</h2>
        <p>Các câu chuyện của Hành trình Tử tế</p>
      </div>
      <div class="mutuality-body-province">
        <span class="count">{{ currentCount }}</span>
        <h2>TỈNH THÀNH</h2>
        <p>Hành trình Tử tế có mặt</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: " Mutuality-Anna ",
  data() {
    return {
      currentCount: 0,
      targetCount: 30,
    };
  },
  methods: {
    startCounting() {
      const duration = 1000; // Thời gian (ms) để đếm đến số cuối cùng
      const step = 1; // Bước nhảy

      const timer = setInterval(() => {
        if (this.currentCount < this.targetCount) {
          this.currentCount += step;
        } else {
          clearInterval(timer);
        }
      }, duration / (this.targetCount / step));
    },
  },
  mounted() {
    this.startCounting();
  },
};
</script>

<style scoped>
.mutuality {
  max-width: 80%;
  margin: 0 auto;
  position: relative;
  padding-top: 5%;
}
.mutuality-header {
  width: 50%;
}
.mutuality-header h4 {
  font-family: "Montserrat", Sans-serif;
  color: #81c8c2;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1em;
}
strong,
.mutuality-header h3 {
  font-family: "Montserrat", Sans-serif;
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -1.4px;
  padding: 2% 0;
}
strong {
  color: #81c8c2;
  font-weight: 600;
}
.mutuality-body {
  display: flex;
  justify-content: space-between;
}
.mutuality-body-child,
.mutuality-body-decentbag,
.mutuality-body-shares,
.mutuality-body-province {
  text-align: center;
}
h2 {
  font-family: "Montserrat", Sans-serif;
  font-size: 27px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: -1.35px;
}
p {
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5em;
  letter-spacing: -0.9px;
}
.count {
  animation: countUp 1s ease-out;
  color: #67b4b4;
  font-family: "Helvetica Neue", Sans-serif;
  font-size: 100px;
  font-weight: 700;
  line-height: 1em;
}

@keyframes countUp {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
}
</style>
