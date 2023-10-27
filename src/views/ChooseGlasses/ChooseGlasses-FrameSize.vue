<template>
  <div class="card-frameSize">
    <div class="card-frameSize">
      <div class="card-frameSize-img">
        <img
          src="/images/homeAnna/Carousel.jpg"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="card-frameSize-text">
        <div class="card-body">
          <div class="card-icon">
            <font-awesome-icon
              :icon="['fas', 'glasses']"
              class="card-icon-glass"
            />
          </div>
          <h5 class="card-title" style="color: #81c8c2">Kích thước khung</h5>
          <p class="card-text">
            Lựa chọn Kích thước khung phù hợp nhất để giúp dễ dàng vừa vặn,thoải
            mái và tiện lợi cho bạn.
          </p>
          <p class="card-text">
            <router-link :to="{ name: 'gongkinh' }"
              ><div class="card-text-router">
                <p>Cách đo kích thước khung hình của bạn</p>
                <font-awesome-icon
                  :icon="['fas', 'arrow-right']"
                  class="card-text-router-icon"
                /></div
            ></router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: " ChooseGlasses-FrameSize",
  data() {
    return {};
  },
};
</script>

<style scoped>
.card-frameSize {
  display: flex;
  max-height: 500px;
}
.card-frameSize-img {
  width: 50%;
}
.card-frameSize-img img {
  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.card-frameSize-text {
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
.card-text-router p {
  text-decoration: none;
}
.card-text-router-icon {
  padding-left: 20px;
  font-size: 20px;
}
</style>
