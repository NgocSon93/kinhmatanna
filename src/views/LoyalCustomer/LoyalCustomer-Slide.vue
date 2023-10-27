<template>
  <div class="Storeaddress-image">
    <div class="Storeaddress-image-left">
      <img
        src="https://loremflickr.com/643/480/fashion"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="Storeaddress-image-right">
      <img
        src="https://loremflickr.com/643/480/fashion"
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Storeaddress-image {
  display: flex;
  height: 500px;
}
.Storeaddress-image-left {
  width: 60%;
  margin-right: 15px;
}
.Storeaddress-image-right {
  width: 40%;
}
.Storeaddress-image-left img,
.Storeaddress-image-right img {
  height: 100%;
  width: 100%;
  border-radius: 7px;
}
</style>
