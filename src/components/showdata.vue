<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
         <li class="nav-item">
    <router-link to="/user"><button type="button" class="btn btn-success">Add New Task</button></router-link><br><br></li>
      </ul>
    </nav>
    
   <h1 class="display-4">To Do List</h1>
    <table border="1px" align="center" class="table">
      <tr>
        <td>Task Name</td>
        <td>Priority</td>
        <td>Status</td>
        <td>Delete</td>
        <td>Edit</td>
        <td>Check</td>
      </tr>

      <tr v-for="item in list" :key="item.id">
        <td>
           <span :class="{'true' :  item.status==true}">
                {{ item.name }}
            </span>
          </td>
        <td>{{ item.priority }}</td>
        <td>{{ item.status }}</td>
        <td><button type="submit" class="btn btn-danger" v-on:click="deletetask(item.id)">Delete</button></td>
      <td><button  type="submit" class="btn btn-primary" @click="$router.push({name: 'Update', params: {id :item.id }})">update</button></td>
        <td >
        <input type="checkbox" v-bind:value="item.status" v-model="item.status" v-bind:checked="false" v-on:change ="changetask(item.id,item.status)"/>
       </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios"; // import axios for get and delete data 
export default {
  data() {
    return {
      list: [],
      status:'false'
    };
  },

  mounted() {
    this.getData() // calling getdata method
    this.changetask() // calling changetask method 
  },
  methods: {
    //delete data from database 
    deletetask(id) {
      axios.delete(" http://localhost:3000/posts/" + id).then(() => {
        this.list;
      });
      this.getData()
    },
    getData(){
      //show data in showdata page get data from database 
        console.log("in get data")
        axios.get("http://localhost:3000/posts").then((resp) => {
      this.list = resp.data;
      console.log(resp.data);
         });
    },
    changetask(uid,ustatus){
      //checked unchecked in checkbox 
      if(ustatus==true){
      ustatus="done"
      }
      if(ustatus==false){
        ustatus="undone"
      }
    }
  }
}
</script>
<style scoped>
.true
{
  text-decoration: line-through;
}
</style>