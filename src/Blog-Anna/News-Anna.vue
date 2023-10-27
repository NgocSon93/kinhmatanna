<template>
  <div class="blog">
    <div class="blog-cover">
      <h1>BLOG</h1>
    </div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-md-3" v-for="user in users" :key="user.id">
        <div class="card">
          <img
            src="https://loremflickr.com/640/480/fashion"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Name: {{ user.name }}</h5>
            <div class="card-prototype d-flex justify-content-around">
              <h5 class="card-title">Price: {{ user.price }}</h5>
              <h5 class="card-title">Type: {{ user.type }}</h5>
            </div>
            <h5 class="card-title created">createdAt: {{ user.createdAt }}</h5>
            <p class="card-text">
              {{ user.description }}
            </p>
          </div>
          <div class="caed-button m-2">
            <router-link :to="'/updateproduct/' + user.id"
              ><button type="button" class="btn btn-outline-primary m-2">
                Edit
              </button></router-link
            >
            <button
              type="button"
              class="btn btn-outline-secondary m-2"
              @click="deleteproduct(user.id)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="addproducts">
    <button type="submit" class="btn btn-primary" @click="showPopup">
      Thêm sản phẩm
    </button>
    <div class="popup" v-if="isPopupVisible" @click="closePopup">
      <form class="row g-3" @click.stop>
        <div class="col-md-6">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" v-model="postproducts.name" />
        </div>
        <div class="col-md-6">
          <label class="form-label">Price</label>
          <input
            type="number"
            class="form-control"
            v-model="postproducts.price"
          />
        </div>
        <div class="col-12">
          <label class="form-label">Type</label>
          <input
            type="text"
            class="form-control"
            placeholder="Write type"
            v-model="postproducts.type"
          />
        </div>
        <div class="col-12">
          <label class="form-label">Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Write description"
            v-model="postproducts.description"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary m-2" @click="closePopup">
            Close
          </button>
          <button type="submit" class="btn btn-primary m-2" @click="submitPost">
            Post
          </button>
        </div>
      </form>
    </div>
  </div>
  <edit-blog-vue
    v-if="isPopupEdit"
    @CloseModal="closePopupEdit"
  ></edit-blog-vue>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import EditBlogVue from "./Edit-Blog.vue";
export default {
  name: "News-Anna",
  components: { EditBlogVue },
  setup() {
    const users = ref([]);
    const postproducts = ref({
      name: "",
      price: "",
      type: "",
      description: "", // Thêm trường địa chỉ
    });
    const submitPost = async () => {
      try {
        const response = await axios.post(
          "https://63fc1d1e677c415873061a18.mockapi.io/tasks",
          postproducts.value
        );
        users.value.push(response.data);
      } catch (error) {
        console.error("Lỗi trong quá trình gửi dữ liệu:", error);
      }
    };
    const isPopupVisible = ref(false);
    const showPopup = () => {
      isPopupVisible.value = true;
    };
    const closePopup = () => {
      isPopupVisible.value = false;
    };
    async function getUser() {
      try {
        const response = await axios.get(
          "https://63fc1d1e677c415873061a18.mockapi.io/tasks"
        );
        users.value = response.data;
      } catch (error) {
        console.error(error);
      }
    }
    async function deleteproduct(id) {
      let x = window.confirm("You want to delete the user?");
      if (x) {
        try {
          const response = await axios.delete(
            `https://63fc1d1e677c415873061a18.mockapi.io/tasks/${id}`
          );
          console.log(response);
          getUser();
        } catch (error) {
          console.error(error);
        }
      }
    }
    getUser();
    return {
      users,
      isPopupVisible,
      showPopup,
      postproducts,
      submitPost,
      closePopup,
      deleteproduct,
    };
  },
};
</script>
<style scoped>
.blog-cover {
  width: 100%;
  min-height: 520px;
  background: url(D:\FileLamBaiTap\kinhmatnana\public\images\forAnna\Rectangle-146.jpg)
    no-repeat;
  background-size: cover;
  position: relative;
}
.blog-cover h1 {
  color: #fff;
  font-family: "Montserrat", Sans-serif;
  font-size: 50px;
  font-weight: 600;
  line-height: 1.5em;
  position: absolute;
  bottom: 20%;
  left: 12%;
}
.blog {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 23, 78, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.addproducts {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3vh;
}
.form-label {
  color: #fff;
}
.row {
  margin: 0;
}
.created {
  background-color: #81c8c2;
  height: 6vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
