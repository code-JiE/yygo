<template>
  <div class="GoodList">
       <el-backtop></el-backtop>
        <goods-item  v-for="item in goodsData" :key="item.index"
        :itemData='item'></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem.vue'
export default {
    data(){
      return{

       }
  },
  props:{
      goodsData:{
        type:Array,
        default:function(){
          return []
        }
      }
  },
  components: { GoodsItem },

}
</script>

<style>
  .GoodList{
    display: flex;
    flex-wrap: wrap;
  }
</style>