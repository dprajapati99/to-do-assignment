<template>
  <!-- <router-link to="/user">user</router-link> -->
  
  <p class="h2">Update Task</p>
    <form>
      <div class="form-group">
      task name:<input
        type="text"
        name="name"
        v-model="task.name"
      /><br /><br />
      priority:
      <label for="high">high</label>
      <input
        type="radio"
        value="high"
        id="high"
        v-model="task.priority"
        name="priority"
      />
      <label for="medium">medium</label>
      <input
        type="radio"
        value="medium"
        id="medium"
        v-model="task.priority"
        name="priority"
      />
      <label for="low">low</label>
      <input
        type="radio"
        value="low"
        id="low"
        v-model="task.priority"
        name="priority"
      /><br /><br />
      <router-link :to="{ name: 'showdata' }">
        <button class="btn btn-primary" v-on:click="updateData()">Update Task</button>
      </router-link>
      </div>
    </form>
 
</template>
<script>
import axios from "axios"; //import axios for update data in database
export default {
  data() {
    return {
      task: {
        name: "",
        priority: "",
        status:""
      },
    };
  },

  methods: {
    async updateData() { // update data in database
      console.warn(this.task);//check if data is update or not

      let result = await axios.put(
        "http://localhost:3000/posts/" + this.$route.params.id,
        {
          name: this.task.name,
          priority: this.task.priority,
          status: this.status,
        }
      );

      alert(result);
    },
  },
  async mounted() { //get prefilled data in form
        const result = await axios.get("http://localhost:3000/posts/" + this.$route.params.id   );
        console.warn(result.data);
        this.task = result.data;
        //this.updateData()
  },
};
</script>