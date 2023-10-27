<template>
  <div class="banner">
    <div class="image-gim">
      <img src="/images/homeAnna/Carousel3.jpg" />
    </div>
    <div class="image">
      <img src="/images/homeAnna/Carousel5.jpg" />
    </div>
    <div class="carousels">
      <div class="carousels-inner">
        <CarouselsIndicator
          :total="slides.length"
          :currentIndex="currentSlide"
          @switch="switchSlide($event)"
        ></CarouselsIndicator>
        <CarouselsItem
          v-for="(slide, index) in slides"
          :slide="slide"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index"
          :direction="direction"
          @mouseenter="stopSlideTimer"
          @mouseout="startSlideTimer"
        ></CarouselsItem>
        <CarouselsControl @prev="prev" @next="next"></CarouselsControl>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselsItem from "./CarouselItem-Anna.vue";
import CarouselsControl from "./CarouselControls.vue";
import CarouselsIndicator from "./CarouselIndicators.vue";
export default {
  name: "CarouselAnna",
  components: {
    CarouselsItem,
    CarouselsControl,
    CarouselsIndicator,
  },
  data: () => ({
    // slides: [
    //   "/img/Carousel1.9ecda97d.jpg",
    //   "/img/Carousel2.a59bc77f.jpg",
    //   "/img/Carousel6.2c3979c9.jpg",
    //   "/img/Carousel7.7ba9b128.jpg",
    //   "/img/Carousel10.60f8ad59.jpg",
    //   "/img/Carousel11.dd3dd162.jpg",
    //   "/img/Carousel12.6d41470b.jpg",
    // ],
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
  }),
  computed: {
    slides() {
      // Lấy đường dẫn cơ sở đến thư mục public
      const baseUrl = process.env.BASE_URL;

      // Đường dẫn tương đối của tệp ảnh trong thư mục public
      const relativePaths = [
        "images/homeAnna/Carousel1.jpg",
        "images/homeAnna/Carousel2.jpg",
        "images/homeAnna/Carousel6.jpg",
        "images/homeAnna/Carousel7.jpg",
        "images/homeAnna/Carousel10.jpg",
        "images/homeAnna/Carousel11.jpg",
        "images/homeAnna/Carousel12.jpg",
      ];

      // Lặp qua từng đường dẫn tương đối và kết hợp với đường dẫn cơ sở
      const fullPaths = relativePaths.map(
        (relativePath) => baseUrl + relativePath
      );

      return fullPaths;
    },
  },
  methods: {
    setCurrentSlide(index) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, 3000);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    },
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeMount() {
    this.stopSlideTimer();
  },
};
</script>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  /* max-width: 80%; */
  margin: 0 auto;
  margin-top: 10px;
}
.carousels {
  display: flex;
  justify-content: center;
}
.carousels-inner {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 30px;
}
.image-gim {
  width: 50%;
  margin: 1vw;
  border-radius: 30px;
  height: 60vh;
}
.image,
.carousels {
  width: 25%;
  margin: 1vw;
  border-radius: 30px;
  height: 60vh;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  margin: 0 10px;
  object-fit: cover;
}
</style>
