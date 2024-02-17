<template>
  <div class="blog">
    <div class="mobile">
      <p>this is mobile test</p>
    </div>
    <div class="tablet">
      <p>this is tablet test</p>
    </div>
    <div class="pc">
      <p>this is pc test</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "News-Anna",
  setup() {}
};
</script>
<style scoped>
.blog{
  width: 100%;
  height: 700px;
  display: flex;
  font-size: 20px;
  color: aliceblue;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  background-color: blanchedalmond;
}
.mobile {
  height: 500px;
  width: 500px;
  background-color: blue;
  display: none;
}
.tablet {
  height: 500px;
  width: 500px;
  background-color: red;
  display: none;
}
.pc {
  height: 500px;
  width: 500px;
  background-color: orange;
  display: none;
}

/* Mobile */
@media only screen and (max-width: 46.1875em) {
  .mobile {
    display: block;
  }
}
/* Tablet */
@media only screen and (min-width: 46.25em) and (max-width: 63.9375em) {
.tablet {
    display: block;
}
}
/* PC */
@media only screen and (min-width: 64em) {
  .pc {
    display: block;
  }
}
</style>
