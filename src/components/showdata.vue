<template>
  <div>
    <h1>To Do List</h1>
    <!-- <div v-for="" class="single-blog"></div> -->
    <table border="1px" align="center">
      <tr>
        <td>name</td>
        <td>priority</td>
        <td>status</td>
        <td>Delete</td>
        <td>Edit</td>
        <td>check</td>
      </tr>

      <tr v-for="item in list" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.priority }}</td>
        <td>{{ item.status }}</td>
        <td><button v-on:click="deletetask(item.id)">Delete</button></td>
        <td><button @click="$router.push({name: 'update', params: { id: item.id }})">Update</button></td>
        <td>
          <input type="checkbox" id="checkbox" v-model="checked" />{{ checked }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
    };
  },

  mounted() {
    this.getData()
  },
  methods: {
    deletetask(id) {
      axios.delete(" http://localhost:3000/posts/" + id).then(() => {
        this.list;
      });
      this.getData()
    },
    getData(){
        console.log("in get data")
        axios.get("http://localhost:3000/posts").then((resp) => {
      this.list = resp.data;
      console.log(resp.data);
         });
    }
  }
}
</script>