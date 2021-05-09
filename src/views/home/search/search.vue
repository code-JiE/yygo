<template>
  <div class="search">
    <div>
      <el-input
        placeholder="请输入需要搜索的内容"
        v-model="input"
        clearable
        class="input"
      >
      </el-input>
      <el-button type="danger" icon="el-icon-search" circle 
      @click="search_btn"></el-button>
    </div>
      <goods-listy
        :goodsData="dataList"
      ></goods-listy>
  </div>
</template>

<script>
import {search} from 'network/getHome.js'
import goodsListy from 'views/home/GoodsListy.vue'
export default {
  data() {
    return {
      input: "",
      dataList:[]
    };
  },
    methods:{
        search_btn(){
            console.log(this.input)
            
        search(this.input).then(data=>{
           this.dataList=data.data
           console.log(this.dataList);
        })
        },
        load(){
          console.log('触底')
          
        }
    }
    ,components:{
      goodsListy
    }
};
</script>

<style scoped>
.search {
}
.input {
  width: 200px;
  padding-right: 10px;
}
</style>