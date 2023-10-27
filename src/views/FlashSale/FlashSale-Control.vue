<template>
  <button class="flashSale-control left">
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-left']"
      class="icon-control"
      @click="$emit('prevItem')"
    />
  </button>
  <button class="flashSale-control right">
    <font-awesome-icon
      :icon="['fas', 'circle-chevron-right']"
      class="icon-control"
      @click="$emit('nextItem')"
    />
  </button>
</template>
<script>
export default {
  emits: ["prevItem", "nextItem"],
};
</script>

<style scoped>
.flashSale-control {
  background-color: rgba(0, 0, 0, 0);
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 50px;
  top: calc(60% - 0px);
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
