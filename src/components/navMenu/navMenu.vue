<template>
  <div class="navMenu">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item index="1" @click="go_home">首页</el-menu-item>

      <el-menu-item index="2" @click="go_buy">购物车</el-menu-item>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4" @click="go_login" v-show="!this.$store.state.isLogin"
        >登录/注册</el-menu-item
      >
      <el-menu-item index="5" @click="go_order">我的订单</el-menu-item>
    </el-menu>
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      backgroundColor: "#222",
      isLogin: !this.$store.state.isLogin,
    };
  },
  methods: {
    go_buy() {
      this.$router.push("/cart");
    },
    go_home() {
      this.$router.push("/home");
    },
    go_login() {
      this.$router.push("/login");
    },
    go_order(){
      this.$router.push("/orders")
    }
  },
};
</script>