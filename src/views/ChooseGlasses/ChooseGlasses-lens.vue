<template>
  <div class="card-lens">
    <div class="card-lens">
      <div class="card-lens-text">
        <div class="card-body">
          <div class="card-icon">
            <font-awesome-icon
              :icon="['fas', 'glasses']"
              class="card-icon-glass"
            />
          </div>
          <h5 class="card-title" style="color: #81c8c2">Đo ống kính</h5>
          <p class="card-text">
            Chúng tôi sẽ giới thiệu các loại ống kính tốt nhất dựa trên đơn
            thuốc của bạn. Để đặt mua kính, bạn cũng sẽ cần Khoảng cách đồng tử
            (PD).
          </p>
          <p class="card-text">
            <router-link :to="{ name: 'gongkinh' }"
              ><div class="card-text-router">
                <p>Cách đo kích thước PD của bạn</p>
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="card-text-router-icon"
                /></div
            ></router-link>
          </p>
        </div>
      </div>
      <div class="card-lens-img">
        <img
          src="/images/homeAnna/Rectangle-37.jpg"
          class="img-fluid rounded-start"
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
.card-lens {
  display: flex;
  margin-top: 20px;
}
.rounded-start {
  border-radius: 10px;
}
.card-lens-img {
  width: 50%;
}
.card-lens-img img {
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.card-lens-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 2%;
}
.card-icon {
  background-color: #bfe8e3;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 42%;
  margin-bottom: 30px;
}
.card-icon-glass {
  font-size: 40px;
}
.card-title {
  color: #81c8c2;
  font-family: "Montserrat", Sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.4em;
  text-align: center;
}
.card-text {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
.card-text-router {
  display: flex;
  justify-content: center;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  fill: #000;
  color: #000;
  padding: 0px;
}
.card-text-router-icon {
  padding-left: 20px;
  font-size: 20px;
}
</style>
