<template>
  <div class="goodsMessage">
    <img :src="$store.state.goodsModel.image" alt="" />
    <div>
      <div>
        <el-link disabled>{{ $store.state.goodsModel.title }}</el-link>
        <!-- <el-link type="primary" disabled>主要链接</el-link>
  <el-link type="success" disabled>成功链接</el-link>
  <el-link type="warning" disabled>警告链接</el-link>
  
  <el-link type="info" disabled>信息链接</el-link> -->
      </div>
      <div>
          <el-link type="danger" disabled>
              {{ $store.state.goodsModel.price}}
          </el-link>
      </div>
    </div>
    <!-- {{$store.state.goodsModel}} -->
  </div>
</template>

<script>
export default {
  name: "goodsMessage",
  data() {
    return {
      goodsModel: this.$store.state.goodsModel,
    };
  },
  created() {
    console.log(this.goodsModel);
  },
};
</script>

<style scoped>
.goodsMessage {
  display: flex;
}
</style>