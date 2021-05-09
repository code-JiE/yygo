<template>
  <div>
    <!-- <el-table
      :data="tableData"
      style="width: 100%"
      stripe="true"
    >
      <el-table-column prop="c_id" label="订单编号" width="180"> </el-table-column>
      <el-table-column prop="g_title" label="商品标题" width="180">
          <img :src="table" alt="">
           </el-table-column>
      <el-table-column prop="g_price" label="商品单价" width="180"> </el-table-column>
      <el-table-column prop="g_count" label="商品数量" width="180"> </el-table-column>
      <el-table-column prop="" label="商品总价">{{g_count}}</el-table-column>
    </el-table>
    <button @click="getdata"></button> -->
    <el-row :span="24" class="table_main">
      
  <el-col :span="24" > <table>
      <tr class="table_title">
        <th width="400">商品</th>
        <th width="200">单价</th>
        <th width="100">数量</th>
        <th width="130">总金额</th>
         <th width="130">收货人</th>
        <th width="130">联系电话</th>
        <th width="130">收货地址</th>
        <th width="105">购买时间</th>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index" v-show="!isShow">

        <td class="goods_main"  >
          <img :src="item.image" alt="" class="g_image" />
          <div><span class="goods_title">{{ item.title }}</span></div>
        </td>
        <td class="g_price">￥{{ item.price }}</td>
        <td class="g_count">
            {{item.count}}
        </td>
             <td class="count_price">￥{{item.price * item.count}}</td>
        <td class="name">{{item.name}}</td>
        <td class="phone">{{item.phone}}</td>
        <td class="add">{{item.add}}</td>
   
        <td class="date">
          {{item.date}}
        </td>
      </tr>
    </table></el-col>

    </el-row>

  </div>
</template>

<script>
import { getOrder } from "network/getOrder";

export default {
  name: "u_order",
  component: {},
  created() {
    getOrder(this.$store.state.user).then((data) => {
      console.log(data);
      this.tableData = data.data;
    });
  },
  methods: {
    getdata() {},
  },
  data() {
    return {
      tableData: [],
    };
  },
};
</script>

<style scoped>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.table_title {
  background-color: rgba(146, 146, 146, 0.267);
}
.cart_table {
  margin-top: 20px;
}
* {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
}
th {
  color: #888;
}
tr {
  border-bottom: 1px rgba(136, 136, 136, 0.342) solid;
  height: 50px;
  text-align: center;
}
table {
  border-collapse: collapse;
}
td {
  height: 100px;
}
.g_image {
  width: 80px;
  border: #888 solid 1px;
  margin-right: 5px;
}
.goods_main {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #888;
  overflow:hidden;
}
.btnClick {
  position: relative;
}
.btnClick > div {
}
.g_price {
  text-align: center;
  color: rgb(95, 91, 91);
  font-size: 13px;
}
.g_count {
  color: rgb(221, 65, 65);
  text-align: center;
}
.count_price {
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  color: #333;
}
.date {
  text-align: center;
  color: #888;
  font-size: 13px;
}
.name{
    color: #40a0ffd2;
}
.phone{
    color: #87898b;
}
.add{
  color:#606266;
  font-size: 13px;
}
.goods_title{
    text-overflow: ellipsis;


white-space:nowrap;
}
</style>