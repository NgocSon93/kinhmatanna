<template>
  <button class="carousels-control left">
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-left']"
      class="icon-control"
      @click="$emit('prev')"
    />
  </button>
  <button class="carousels-control right">
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-right']"
      class="icon-control"
      @click="$emit('next')"
    />
  </button>
</template>

<script>
export default {
  emits: ["prev", "next"],
};
</script>

<style scoped>
.carousels-control {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(50% - 25px);
  cursor: pointer;
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.icon-control {
  font-size: 40px;
  color: #fff;
}
</style>
