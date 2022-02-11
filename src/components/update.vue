<template>
  <!-- <router-link to="/user">user</router-link> -->
  <div id="app">
    <h1>ToDo List</h1>
    <form method="post">
      task name:<input type="text" name="name" v-model="name" /><br /><br />
      priority:
      <label for="high">high</label>
      <input
        type="radio"
        value="high"
        id="high"
        v-model="priority"
        name="priority"
      />
      <label for="medium">medium</label>
      <input
        type="radio"
        value="medium"
        id="medium"
        v-model="priority"
        name="priority"
      />
      <label for="low">low</label>
      <input
        type="radio"
        value="low"
        id="low"
        v-model="priority"
        name="priority"
      /><br /><br />
      <button v-on:click="updateData()">update post</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      task:{
      name: "",
      priority: "",
      }
    };
  },

  mounted() {
    
    this.updateData();
  },
  method: {
    updateData() {
      axios.get(' http://localhost:3000/posts/6').then((resp) => {
        this.task = resp.data;
        console.log(resp.data);
      });
      console.warn(this.$route.params.id)
      this.$router.push("/user");
    },
  },
};
</script>