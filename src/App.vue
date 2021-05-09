<template>
  <div id="app">
 
    <nav-menu></nav-menu>
    <keep-alive exclude="cart,u_order">
      <router-view />
    </keep-alive>
    <!-- <transition name="el-fade-in"> -->
      <div v-if="this.$store.state.OrderMessage" class="transition-box">
        <settle class="settle1"></settle>
      </div>
    <!-- </transition> -->
  </div>
</template>
  <script>
import navMenu from "./components/navMenu/navMenu.vue";
import Settle from "components/settle/settle.vue";
export default {
  components: { navMenu, Settle },
  // created(){
  //   console.log(this.$store.state.name1="1");
  //   console.log(this.$store.state.name1)
  // }
};
</script>
<style scoped>
#app{
 
}
* {
  margin: 0;
  padding: 0;
}
.settle1 {
  width: 100%;
  height: 100%;
position: fixed;
top: 0;
z-index: 999;
background-color: rgba(197, 197, 197, 0.267);
}
</style>
