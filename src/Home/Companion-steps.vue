<template>
  <div class="companion-steps">
    <div class="companion-steps-header">
      <h2>Những Bước Chân Đồng Hành</h2>
    </div>
    <div class="companion-steps-card">
      <div class="card">
        <img
          src="/images/hanhtrinhtute/companion.png"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h4 class="card-title">Tun Phạm</h4>
          <h5 class="card-title">
            Nhà sáng tạo nội dung / Diễn giả / Người truyền cảm hứng
          </h5>
          <p class="card-text">
            Tun Phạm tên thật Phạm Đức Huy (26 tuổi) hiện được biết tới là một
            trong những nhà
          </p>
          <p v-show="isExpanded">
            sáng tạo nội dung có sức ảnh hưởng rất lớn với giới trẻ sở hữu hơn 6
            triệu lượt theo dõi trên các nền tảng MXH, và qua series podcast
            “Đắp chăn nằm nghe Tun kể” Tun Phạm hiện đang trở thành một diễn
            giả, người truyền cảm hứng được giới trẻ yêu thích.
          </p>
          <p class="btn" @click="toggleText" v-show="!isExpanded">Show More</p>
          <p class="btn" @click="toggleText" v-show="isExpanded">Show Less</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>

<style scoped>
.companion-steps {
  max-width: 80%;
  margin: 0 auto;
  width: 100%;
  position: relative;
  margin-top: 100px;
}
.companion-steps-header h2 {
  color: #81c8c2;
  font-family: "Montserrat", Sans-serif;
  font-size: 56px;
  font-weight: 700;
  text-transform: capitalize;
  line-height: 1.3em;
  letter-spacing: -2.8px;
}
.companion-steps-card {
  width: 350px;
}
.card {
  border: none;
}
.card-body {
  flex-shrink: 0;
}
.card-body h4 {
  color: #67b4b4;
  text-align: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.9px;
}
.card-text {
  margin: 0;
}
.btn {
  font-weight: 500;
}
</style>
