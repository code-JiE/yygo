<template>
  <div class="GoodsItem">
    <div class="GoodsItemContent">
      <img :src="itemData.image" alt="" />
      <div class="price">
        <em>市场价:</em>
        <span>￥{{ itemData.price }}</span>
      </div>
      <div class="title">
        <span>
          {{ itemData.title }}
        </span>
      </div>
      <div class="shop">
        <span class="title"> 京东链接 </span>
        <a class="el-icon-link" :href="itemData.link" target="_blank"> </a>
      </div>
      <div class="operate">
        <div class="go_buy">
          <el-button
            type="success"
            plain
            size="mini"
            @click="addOrder(itemData)"
            >购买</el-button
          >
        </div>
        <div class="go_cart">
          <el-button
            type="danger"
            plain
            size="mini"
            @click="addCart(itemData.id)"
            >购物车</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addCart } from "network/getCart.js";
// import { addOrder_api} from "network/getOrder.js";
export default {
  data() {
    return {
      user_id: "",
    };
  },
  props: {
    itemData: {
      type: Object,
      defalut: function () {
        return {};
      },
    },
  },
  methods: {
    addCart(id) {
      this.user_id = this.$store.state.user;
      if (this.$store.state.user) {
        console.log(id);

        addCart(this.$store.state.user, id, 1).then((data) => {
          console.log(data);
          this.open2();
        });
      } else {
        this.open3();
      }
    },
    addOrder(item) {
      if (this.$store.state.user) {
        this.$store.commit('chang',this.$store.state.OrderMessage)
        this.$store.commit('addGoodsModel',item)
      } else {
        this.open3();
        
        
      }
    },
    open2() {
      this.$notify({
        title: "通知",
        message: "成功添加至购物车",
        type: "success",
        duration:1000
      });
    },
    open3() {
      this.$message({
        message: "请先登录",
        type: "warning",
        duration: 1000,
      });
    },
  },
};
</script>

<style scoped>
.GoodsItem {
  width: 20%;
  display: flex;
  margin-bottom: 10px;
}
.GoodsItemContent {
  width: 80%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  font-size: 10px;
}
.GoodsItemContent img {
  width: 80%;
  align-self: center;
}
.GoodsItemContent:hover {
  box-shadow: 0px 0px 2px #aaa;
}
.GoodsItemContent .price {
  color: #c0c4cc;
}
.GoodsItemContent .price span {
  margin-left: 5px;
  font-size: 17px;
  color: #e4393c;
}
.GoodsItemContent .title {
  height: 33px;
  overflow: hidden;
}
.GoodsItemContent .title span {
  font-size: 10px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
}
.GoodsItemContent .operate {
  display: flex;
  justify-content: center;
}
.GoodsItemContent .operate > div {
  margin: 5px;
}
el-button {
  width: 100px;
}
.shop > a {
  text-decoration: none;
  color: #409eff;
  font-size: 20px;
}
.shop .title {
  color: #f56c6c;
}
/* .go_cart>button{
      color: #fff;
    background-color: #24639b85;
    border-color: #122b40;
        border-radius: 6px;
        border: 0px;
        padding: 5px;
}
.go_cart>button:hover{
  background-color: #29587e;
}
 .go_cart> button:focus{outline: 0;} */
</style>