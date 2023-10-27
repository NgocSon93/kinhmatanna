<template>
  <footer class="footer">
    <div class="footer-logo">
      <img src="../assets/logo-anna.png" />
    </div>
    <div class="footer-nav">
      <router-link :to="{ name: '' }"
        ><font-awesome-icon
          :icon="['fas', 'shield-heart']"
          class="footer-nav-icon"
        />
        Chích sách bảo hành</router-link
      >
      <router-link :to="{ name: '' }"
        ><font-awesome-icon
          :icon="['far', 'eye']"
          class="footer-nav-icon"
        />Khám mắt miễn phí</router-link
      >
      <router-link :to="{ name: '' }"
        ><font-awesome-icon
          :icon="['fas', 'arrows-rotate']"
          class="footer-nav-icon"
        />Thu cũ đổi mới</router-link
      >
      <router-link :to="{ name: '' }"
        ><font-awesome-icon
          :icon="['fas', 'brush']"
          class="footer-nav-icon"
        />Vệ sinh & bảo quản kính mắt</router-link
      >
    </div>
  </footer>
  <div class="footer-nav-table">
    <table class="table table-borderless">
      <tbody>
        <tr>
          <th scope="row">Tất cả sản phẩm</th>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Gọng kính</router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Tròng kính</router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Kính râm</router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Phụ kiện</router-link>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">Chính sách mua hàng</th>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Hình thức thanh toán</router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Chính sách giao hàng</router-link>
          </td>
        </tr>
        <tr>
          <td scope="row">
            <router-link :to="{ name: '' }">Chính sách bảo hành</router-link>
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">Thông tin liên hệ</th>
        </tr>
        <tr>
          <td scope="row">Điện thoại: 1900 0359</td>
        </tr>
        <tr>
          <td scope="row">Email: marketing@kinhmatanna.com</td>
        </tr>
        <tr>
          <td scope="row">Website: kinhmatanna.com</td>
        </tr>
        <tr class="footer-nav-table-icon">
          <td scope="row">
            <font-awesome-icon :icon="['fab', 'square-facebook']" />
          </td>
          <td scope="row">
            <font-awesome-icon :icon="['fab', 'square-instagram']" />
          </td>
          <td scope="row">
            <font-awesome-icon :icon="['fab', 'shopify']" />
          </td>
          <td scope="row">
            <font-awesome-icon :icon="['fab', 'tiktok']" />
          </td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th scope="row">Về Anna</th>
        </tr>
        <tr>
          <td scope="row">Mã số thuế: 0108195925</td>
        </tr>
        <tr>
          <th scope="row"><img src="" alt="" /></th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.footer {
  margin-top: 5%;
  padding: 20px 100px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.footer-logo img {
  height: 60px;
}
.footer-nav a {
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4em;
  color: #414141;
  text-decoration: none;
  margin-left: 35px;
  transition: 0.3s;
}
.footer-nav-icon {
  font-size: 25px;
  padding: 0px 10px;
}
.footer-nav-table {
  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 5%;
}
table {
  display: flex;
  justify-content: space-around;
}
td a {
  text-decoration: none;
  color: #414141;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4em;
}
tbody {
  color: #414141;
  font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4em;
}
.footer-nav-table-icon {
  font-size: 30px;
  display: flex;
}
</style>
