<template>
  <div class="store-anna">
    <h2>DANH SÁCH ĐẠI LÝ KÍNH MẮT ANNA</h2>
    <div class="card">
      <img src="/images/homeAnna/address1.png" class="card-img" alt="..." />
      <div class="card-address card-img-overlay">
        <div
          class="card-img"
          v-for="listAddress in listAddress"
          :key="listAddress.id"
        >
          <h5 class="card-title">{{ listAddress.name }}</h5>
          <p class="card-text">
            {{ listAddress.address }}
          </p>
          <p class="card-text">
            {{ listAddress.phone }}
          </p>
          <p class="card-text">
            {{ listAddress.opentime }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <themedia-anna-vue />
</template>

<script>
import ThemediaAnnaVue from "@/views/TheMedia/Themedia-Anna.vue";
export default {
  name: "Store-Anna",
  components: { ThemediaAnnaVue },
  data() {
    return {
      listAddress: [
        {
          name: "Kính mắt Anna-2235 Hùng vương",
          address:
            "Số 2235 Đ. Hùng Vương, P. Nông Trang, Tp. Việt Trì. T. Phú Thọ",
          phone: "0849 341 668",
          opentime: "09:00 - 21:00",
          id: "1",
        },
        {
          name: "Kính mắt Anna-189 Hoàng văn thụ",
          address:
            "Số 189 đường Hoàng Văn Thụ phường Ngô Quyền thành phố Bắc Giang",
          phone: "0849 341 668",
          opentime: "09:00 - 21:00",
          id: "2",
        },
        {
          name: "Kính mắt Anna-2260 trần hưng đạo",
          address: "Số 260 Trần Hưng Đạo phường Đại Phúc thành phố Bắc Ninh",
          phone: "0849 341 668",
          opentime: "09:00 - 21:00",
          id: "3",
        },
        {
          name: "Kính mắt Anna-200 trần phú",
          address: "Số 200 đường Trần Phú, P Điện Biên Tp Thanh Hóa",
          phone: "0849 341 668",
          opentime: "09:00 - 21:00",
          id: "4",
        },
      ],
    };
  },
};
</script>

<style scoped>
.store-anna h2 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.4em;
  background-color: #f8f8f8;
  height: 4em;
}
.card img {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.card-title {
  text-transform: uppercase;
  padding: 2% 0;
}
.card-address {
  width: 35%;
  background-color: rgba(255, 255, 255, 0.6);
  padding: 5%;
}
</style>
