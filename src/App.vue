<template> 
  <div class="">
    <!-- hiển thị danh sách users -->
    <List/>
  </div>
</template>

<script>
import List from './components/ListUser.vue'
export default {
  name: 'App',
  components: {
    List
  },
  data() {
    return {
    }
  }
  
}
</script>

<style>
#app {
  
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>
