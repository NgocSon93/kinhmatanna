<template>
  <div class="main">
    <div class="sidebar hide-on-tablet hide-on-mobile">
      <h1>SIDEBAR</h1>
    </div>
    <div class="content">
      <h1>9. Music Player</h1>
      <p>content-box (mặc định): Kích thước của phần tử chỉ tính từ nội dung bên trong, không bao gồm padding và border. Đây là cách tính toán kích thước theo kiểu truyền thống.</p>
      <div class="grid">
        <div class="row">
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 1
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 2
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 3
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 4
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 5
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 6
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 7
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 8
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 9
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 10
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 11
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 12
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 13
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 14
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 15
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 16
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 17
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 18
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 19
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 20
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 21
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 22
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 23
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 24
            </div>
          </div>
          <div class="col l-3 m-4 c-12">
            <div class="item">
              Items 25
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "News-Anna",
  setup() {}
};
</script>
<style scoped lang="scss">
.item {
  margin-top: 16px;
  font-size: 40px;
  color: #fff;
  text-align: center;
  min-height: 280px;
  line-height: 280px;
  background-color: orange;
}
.main {
  display: flex;
  padding: 0 32px;

  & .sidebar {
    width: 300px;
    background-color: burlywood;
  }

  & .content {
    flex: 1;
  }
}

@media (min-width: 740px) and (max-width: 1023px) {
  .hide-on-tablet {
    display: none;
  }
}

@media (max-width: 740px) {
  .hide-on-mobile {
    display: none;
  }
}
</style>
