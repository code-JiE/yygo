<template>
  <div >
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <tables :cartList="cartList"> </tables>
      </el-col>
    </el-row>
    <table-item></table-item>
  </div>
</template>

<script>
import tables from "./components/table";
import TableItem from "./components/tableItem.vue";
import { getCart } from "network/getCart.js";
export default {
  name:'cart',
  data() {
    return {
      user: "",
      cartList: [],
    };
  },
  components: {
    TableItem,
    tables,
  },
  mounted() {
    // this.getData()
    // console.log(1);
  },
  methods: {
    getData() {
      getCart(this.user).then((data) => {
        this.cartList = data.data;
      });
    },
  },
  created() {
    this.user = this.$store.state.user;
    this.getData();
  },
  updated(){
    console.log('cart更新')
    
  },
}
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>