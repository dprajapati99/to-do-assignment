<template>
  <router-link to="/showdata">showdata</router-link><br><br>
  <!-- <router-link to="/update">update</router-link> -->
  <!-- <td><button @click="$router.push({name: 'Edit', params: {id: 5} })">Update</button></td> -->

  
  
      
  <p class="h2">Add Task</p>
    <form method="post">
      <div class="form-group">
      <lable class="form-check-label" for="task name">task name:</lable>
      <input  placeholder="Enter task name" type="text" name="name" v-model="name"  /><br /><br />
      </div>
      <div class="form-group">
      <lable for="priority">priority:</lable>
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
      </div>
      <!-- <button v-on:click ="addTask()">post</button> -->
      <router-link :to="{ name: 'showdata' }">
        <button type="submit" class="btn btn-primary" v-on:click="addTask()">Add Task</button>
      </router-link>
    </form>
 
</template>
<script>
import axios from "axios"; // import axios for post data 
export default {
  data() {
    return {
      name: "",
      priority: null,
  
    };
  },
  methods: {
    //add task 
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