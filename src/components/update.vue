<template>
  <!-- <router-link to="/user">user</router-link> -->
  <div>
    <h1>ToDo List</h1>
    <form>
      task name:<input type="text" name="name" v-model="task.name" /><br /><br />
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
        <button v-on:click="updateData()">UPDATEPOST</button>
      </router-link>
     
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      task:{
      name: '',
      priority: '',
      },
    };
  },


  methods: {
     async updateData()
     {
       console.warn(this.task)
       
        let result = await axios.put('http://localhost:3000/posts/' + this.$route.params.id,{
                  name:this.task.name,
                  priority:this.task.priority,
                  status:this.status
                 
              })
               
              alert(result)
     }
  },
  async  mounted() {
  
   const result = await axios.get('http://localhost:3000/posts/' + this.$route.params.id)
   console.warn(result.data)
   this.task=result.data
   //this.updateData()
},
};
</script>