<template>
  <div class="cart_table">
    <table>
      <tr class="table_title">
        <th width="550">商品</th>
        <th width="200">单价</th>
        <th width="100">数量</th>
        <th width="130">总金额</th>
        <th width="105">操作</th>
      </tr>
      <tr v-for="(item, index) in cartList" :key="index" v-show="!isShow">
        <td class="goods_main">
          <img :src="item.image" alt="" class="g_image" />
          <div>{{ item.title }}</div>
        </td>
        <td class="g_price">￥{{ item.price }}</td>
        <td class="g_count">
          <el-input-number
            v-model="item.count"
            @change="handleChange"
            :min="1"
            :max="10"
            label="描述文字"
          ></el-input-number>
        </td>
        <td class="count_price">￥{{item.price * item.count}}</td>
        <td class="delete">
            <el-button type="success" icon="el-icon-shopping-bag-1" circle  @click="addOrder(item)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="delete1(index,item.g_id)"></el-button>
        </td>
      </tr>
    </table>
    <span @click="allCountPrice"></span>
  </div>
</template>

<script>
import {deleteCart} from 'network/getCart.js'
export default {
  data() {
    return {
        allChecked:false,
        goodsList:this.cartList,
        isShow:false
    };
  },created(){
      
  },
  props: {
    cartList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
    show(){
     console.log(this.cartList[0])
     this.allChecked=!this.allChecked
    //  this.goodsList=this.cartList
     console.log(this.goodsList)
     
    },
    check(){
        
    },
        allCountPrice(){
            let count=0;
        this.cartList.forEach(element => {
          count+=  element.g_count*element.g_price
            
        });
        console.log(count)
        
    },
    delete1(index,item){
        console.log(index)
        
      this.cartList.splice(index,1)
      
      this.open1()
      deleteCart(this.$store.state.user,item).then(data=>{
          console.log(data)
      })

    },
     open1() {
        this.$message({
          message:"删除成功",
          type: 'warning'
        });
      },
      //购买
        addOrder(item) {
        this.$store.commit('chang',this.$store.state.OrderMessage)
        this.$store.commit('addGoodsModel',item)
    },
  },

  computed: {

  },
};
</script>
<style scoped>
.table_title{
    background-color: rgba(146, 146, 146, 0.267);
}
.cart_table {
  margin-top: 20px;
  position: relative;
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
.delete {
  text-align: center;
}
</style>