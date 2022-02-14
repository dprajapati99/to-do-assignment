<template>
  <router-link to="/showdata">showdata</router-link><br><br>
  <router-link to="/update">update</router-link>
  <!-- <td><button @click="$router.push({name: 'Edit', params: {id: 5} })">Update</button></td> -->

  <div>
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
      <!-- <button v-on:click ="addTask()">post</button> -->
      <router-link :to="{ name: 'showdata' }">
        <button v-on:click="addTask()">Post</button>
      </router-link>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      priority: null,
      status: "undone",
    };
  },
  methods: {
    async addTask() {
      let result = await axios.post("  http://localhost:3000/posts", {
        name: this.name,
        priority: this.priority,
        status: this.status,
      });
      this.$router.push("/showdata");
      alert(result);
    },
  },
};
</script>