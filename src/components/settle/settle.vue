<template>
  <div class="settle">
    <div class="main">
      <div class="from_main">
        <el-steps :active="active" finish-status="success" class="">
          <el-step title="订单详情"></el-step>
          <el-step title="步骤 2"></el-step>
          <el-step title="步骤 3"></el-step>
        </el-steps>
        <!-- <ul v-for="item in dataList" :key="item.index">
                <li>{{item.title}}
                   <ul>
                        <li v-for="ic in item.lists" :key="ic.index">
                            {{ic}}
                        </li>
                   </ul>
                </li>
            </ul> -->
        <div class="message">
          <transition name="el-fade-in">
            <div v-show="active == 0">
              <goods-message></goods-message>
            </div>
          </transition>
          <transition name="el-fade-in">
            <from v-show="active == 1" ref="target1"></from>
          </transition>
          <transition name="el-fade-in">
            <div v-show="active == 2">
              <div  class="zhifu" >
                <el-tag type="danger">不合作商</el-tag>
                <br />
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2371267314,3435275550&fm=26&gp=0.jpg"
                  alt=""
                />
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2380158689,1392955929&fm=26&gp=0.jpg"
                  alt=""
                />
                <img
                  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2991466813,1734422295&fm=26&gp=0.jpg"
                  alt=""
                />
                <img
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3149568072,1360679388&fm=26&gp=0.jpg"
                  alt=""
                />
              </div>
              <div class="zhifu2">
    <el-tag type="success">免费购物<span class="el-icon-check"></span></el-tag>
                <br />
                <span class="el-icon-bottom"></span>
              </div>
            </div>
          </transition>
        </div>
        <div class="next">
          <el-button style="margin-top: 12px" @click="next" type="success">{{
            nexttitle
          }}</el-button>

          <el-button @click="show" type="warning">取消</el-button>
        </div>
        {{ this.getAdd }}
      </div>
    </div>
  </div>
</template>

<script>
// import { getList } from "network/getAdd.js";
import from from "./component/from.vue";
import GoodsMessage from "./component/goodsMessage.vue";
import { addOrder} from "network/getOrder.js";
export default {
  name: "settle",
  components: { from, GoodsMessage },
  data() {
    return {
      active: 0,
      dataList: [],
      dialogVisible: false,
      nexttitle: "下一步",
    };
  },
  created() {
    // console.log(1);
    // this.dataList = getList();
  },
  methods: {
    next() {
      if (this.active++ > 2) {
          let form=this.$refs.target1._data.form
          let data=this.$store.state.goodsModel
         let user= this.$store.state.user
         let data_id='';
         if(data.id){
            data_id=data.id
         }else{
             data_id=data.g_id
         }
          addOrder(user,data_id,form.add,form.name,form.phone).then(data=>{
              this.show()
              this.open1()
              console.log(data);
          })
   
        
      }
      if (this.active == 2) {
        this.nexttitle = "确认支付";
      } else {
        this.nexttitle = "下一步";
       
      }
    },
    show() {
      // this.dialogVisible = true
      this.$store.commit("chang", this.$store.state.OrderMessage);
    },
      open1() {
        this.$notify({
          title: '成功',
          message: '恭喜你买到了新的宝贝!',
          type: 'success'
        });
      },
  },
  computed: {},
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

.main {
  width: 900px;
  height: 500px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  border-radius: 2%;
  position: relative;
}
.settle {
  display: flex;
  justify-content: center;
  align-items: center;
}
.from_main {
  margin: 30px;
}
.message {
  margin-top: 20px;
}
.next {
  position: absolute;
  bottom: 10px;
}
.zhifu .zhufu2{
  display: flex;
  /* justify-content:flex-start; */
}
.zhifu > img {
  width: 100px;
}
.zhifu2 > img {
  width: 100px;
}
.zhufu2{
flex-direction: row;
}
.el-icon-bottom{
    font-size: 100px;
    color: rgb(224, 91, 91);
}
</style>