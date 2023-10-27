<template>
  <div class="choose-glasses">
    <div class="choose-glasses-title">
      <h3>CHỌN KÍNH ONLINE</h3>
      <h1>TÌM KÍNH PHÙ HỢP</h1>
    </div>
    <ChooseGlassesFrameSize></ChooseGlassesFrameSize>
    <ChooseGlassesLens></ChooseGlassesLens>
  </div>
</template>

<script>
import ChooseGlassesFrameSize from "./ChooseGlasses-FrameSize.vue";
import ChooseGlassesLens from "./ChooseGlasses-lens.vue";
export default {
  name: "ChooseGlasses",
  components: {
    ChooseGlassesFrameSize,
    ChooseGlassesLens,
  },
};
</script>

<style scoped>
.choose-glasses {
  max-width: 80%;
  margin: 0 auto;
}
.choose-glasses-title {
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\homeAnna\Vector.png)
    no-repeat;
  background-size: 30%;
  text-align: start;
  padding: 20px 30px;
}
.choose-glasses-title h1 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.4em;
}
.choose-glasses-title h3 {
  color: #000;
  font-family: "Montserrat", Sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
}
</style>
