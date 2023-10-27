<template>
  <div class="accordion-container">
    <div class="accordion-title">
      <h3><font-awesome-icon :icon="['fas', 'minus']" />HỎI ĐÁP</h3>
      <h1>Q & A CÙNG ANNA</h1>
    </div>
    <div class="accordion-body">
      <div
        class="accordion"
        :class="accordionClasses"
        v-for="(accordion, index) in accordions"
        :key="accordion.id"
      >
        <div class="accordion-item" @click="toggleAccordion(index)">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              :class="{ active: accordion.isOpen }"
              data-bs-toggle="collapse"
              :aria-expanded="accordion.isOpen"
            >
              {{ accordion.title }}
            </button>
          </h2>
          <div
            class="accordion-collapse collapse"
            :class="{ show: accordion.isOpen }"
          >
            <div class="accordion-body">
              {{ accordion.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    accordions: [
      {
        title: "Cận thị có tự giảm không?",
        text: "Đáng tiếc câu trả lời là KHÔNG. Cận thị do 2 nguyên nhân Mắt chiều trước-sau dài hơn bình thường (cận thị do trục) Giác mạc và/hoặc thể thuỷ tinh cong nhiều quá (cận thị do tật khúc xạ) Mắt đã dài thì không thể ngắn lại. Giác mạc/thể thủy tinh quá cong cũng không thể tự nhiên trở lại như cũ.",
        id: "0",
        isOpen: false, // Thêm thuộc tính isOpen cho mỗi accordion và mặc định là false
      },
      {
        title: "Cho em xin chi phí đo mắt bên mình nhé?",
        text: "Hệ thống kính mắt Anna luôn miễn phí kiểm tra mắt nhé các bạn thân yêu ơi",
        id: "1",
        isOpen: false,
      },
      {
        title: "Vừa loạn vừa cận có cát tròng đổi màu được không?",
        text: "Hiện tại hệ thống kính mắt Anna có rất nhiều trong đổi màu cho các bạn vừa cận vừa loạn nhé bạn ơi",
        id: "2",
        isOpen: false,
      },
      {
        title: "Mặt tròn bự đeo kính gì thì đẹp ạ?",
        text: "Với khuôn mặt tròn, hãy lựa chọn các dáng kính là hình vuông hoặc hình chữ nhật. Với kiểu dáng này sẽ giúp cân bằng cấu trúc cho khuôn mặt, giúp mặt trông thon thả, thanh thoát và mềm mại hơn nhé bạn ơi.",
        id: "3",
        isOpen: false,
      },
      {
        title: "Em thấy có quảng cáo thuốc làm giảm độ cận thị mà?",
        text: "Với khuôn mặt tròn, hãy lựa chọn các dáng kính là hình vuông hoặc hình chữ nhật. Với kiểu dáng này sẽ giúp cân bằng cấu trúc cho khuôn mặt, giúp mặt trông thon thả, thanh thoát và mềm mại hơn nhé bạn ơi.",
        id: "4",
        isOpen: false,
      },
      {
        title: "Màu của kính râm có ảnh hưởng tới chống tia cực tím không?",
        text: "Mức độ tối màu của thấu kính không ảnh hưởng đến tác dụng bảo vệ mắt khỏi tia cực tím. Thay vào đó, khả năng này được xác định bằng công nghệ sản xuất thấu kính hoặc loại polyme nhựa của thấu kính nhé bạn ơi",
        id: "5",
        isOpen: false,
      },
    ],
  }),
  methods: {
    toggleAccordion(index) {
      this.accordions.forEach((accordion, i) => {
        if (i === index) {
          // Đóng/mở accordion được nhấp vào, các accordion khác giữ nguyên trạng thái
          accordion.isOpen = !accordion.isOpen;
        }
        // else {
        //   // Đóng tất cả các accordion khác
        //   accordion.isOpen = false;
        // }
      });
    },
  },
};
</script>

<style scoped>
.accordion-container {
  max-width: 80%;
  margin: 0 auto;
}
.accordion-body {
  display: flex;
  flex-wrap: wrap;
}
.accordion-title {
  margin-top: 5%;
  text-align: start;
  padding: 20px 30px;
}
.accordion-title h1 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4em;
}
.accordion-title h3 {
  color: #414141;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  line-height: 1.4em;
}

.accordion {
  min-width: 50%;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
}
.accordion-collapse {
  padding: 0;
  max-height: 10em;
  overflow: hidden;
  transition: 0.3s ease all;
}
</style>
