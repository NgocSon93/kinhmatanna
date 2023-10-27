<template>
  <div class="editproducts">
    <div class="popup-edit" @click="onCloseModal">
      <form class="row g-3" @click.stop>
        <div class="col-md-6">
          <label class="form-label">New Name</label>
          <input type="text" class="form-control" v-model="editProduct.name" />
        </div>
        <div class="col-md-6">
          <label class="form-label">New Price</label>
          <input
            type="number"
            class="form-control"
            v-model="editProduct.price"
          />
        </div>
        <div class="col-12">
          <label class="form-label">New Type</label>
          <input
            type="text"
            class="form-control"
            placeholder="Write Type"
            v-model="editProduct.type"
          />
        </div>
        <div class="col-12">
          <label class="form-label">New Description</label>
          <input
            type="text"
            class="form-control"
            placeholder="Write Description"
            v-model="editProduct.description"
          />
        </div>
        <div class="col-12">
          <router-link :to="{ name: 'blog' }">
            <button type="button" class="btn btn-primary m-2">Close</button>
          </router-link>

          <button type="button" class="btn btn-primary m-2" @click="updatePost">
            Update
          </button>
        </div>
        <div class="col-12">
          <router-link :to="{ name: 'blog' }">
            <button type="button" class="btn btn-secondary m-2">
              Back Blog
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router"; // Import useRoute and useRouter

export default {
  name: "Edit-Blog",
  setup() {
    const editProduct = ref({
      name: "",
      price: null,
      type: "",
      description: "",
    });

    const route = useRoute(); // Use useRoute to access route information

    const updatePost = async () => {
      const result = await axios.put(
        "https://63fc1d1e677c415873061a18.mockapi.io/tasks/" + route.params.id, // Use route.params to access params
        {
          name: editProduct.value.name,
          price: editProduct.value.price,
          type: editProduct.value.type,
          description: editProduct.value.description,
        }
      );
      console.log(result);
      if (result.status === 200) {
        router.push({ name: "blog" });
      }
    };

    const fetchData = async () => {
      const result = await axios.get(
        "https://63fc1d1e677c415873061a18.mockapi.io/tasks/" + route.params.id
        // Use route.params to access params
      );
      editProduct.value = result.data;
      console.log(route.params.id);
    };
    const router = useRouter();
    const onCloseModal = () => {
      router.push({ name: "blog" });
    };
    onMounted(() => {
      fetchData();
    });

    return {
      editProduct,
      updatePost,
      fetchData,
      onCloseModal,
    };
  },
};
</script>

<style scoped>
.editproducts {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-edit {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(134, 137, 145, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.form-label {
  color: #fff;
}
</style>
