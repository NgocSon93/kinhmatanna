<template>
  <div class="blog">
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
            <h5 class="card-title">Price: {{ user.price }}</h5>
            <h5 class="card-title">Type: {{ user.type }}</h5>
            <h5 class="card-title">createdAt: {{ user.createdAt }}</h5>
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

            <button type="button" class="btn btn-outline-secondary m-2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <test-edit-blog-vue
    v-if="PopupEdit"
    @CloseModal="closePopupEdit"
  ></test-edit-blog-vue>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import TestEditBlogVue from "../Blog-Anna/Test-Edit.vue";
export default {
  name: "News-Anna",
  components: { TestEditBlogVue },
  setup() {
    const users = ref([]);
    const postproducts = ref({
      name: "",
      price: "",
      type: "",
      description: "", // Thêm trường địa chỉ
    });
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
    const PopupEdit = ref(false);
    const showPopupEdit = (user) => {
      PopupEdit.value = true;
      user.name = postproducts.value.name;
      user.price = postproducts.value.price;
      user.type = postproducts.value.type;
      user.description = postproducts.value.description;
    };
    const closePopupEdit = () => {
      PopupEdit.value = false;
    };
    getUser();
    return {
      users,
      postproducts,
      PopupEdit,
      showPopupEdit,
      closePopupEdit,
    };
  },
};
</script>
<style scoped>
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
}
.form-label {
  color: #fff;
}
</style>
