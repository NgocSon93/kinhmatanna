<template>
  <div class="carousels-indicators">
    <button
      class="carousels-indicators-item"
      :class="{ active: currentIndex === index }"
      v-for="(item, index) in total"
      :key="index"
      @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  emits: ["switch"],
  props: ["total", "currentIndex"],
};
</script>

<style scoped>
.carousels-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 0.2em;
  z-index: 2;
}
.carousels-indicators-item {
  width: 12px;
  height: 12px;
  border: none;
  background: #fff;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
}
.active {
  opacity: 1;
}
</style>
