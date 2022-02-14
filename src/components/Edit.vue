<template>
    <div>
        hello
    </div>
</template>
<script>
export default {
  data() {
    return {
      task:[]
    };
  },
  mounted() {
   this.updateData();
  },
  method: {
    async updateData() {
      console.log('test', this.$route.params.id)

    }
  },
};
</script>