<template>
 <el-tabs type="border-card">
  <el-tab-pane label="智能手机">
      <div>
          <slot name="slot1"></slot>
      </div>

  </el-tab-pane>
  <el-tab-pane label="电脑办公">
       <div>
          <slot name="slot2"></slot>
      </div>
  </el-tab-pane>
  <el-tab-pane label="美妆馆">
  <div>
          <slot name="slot3"></slot>
      </div>
  </el-tab-pane>
  <el-tab-pane label="家用家电">
      <div>
          <slot name="slot4"></slot>
      </div>
  </el-tab-pane>
   <el-tab-pane label="搜索">
      <div>
          <slot name="slot5"></slot>
      </div>
  </el-tab-pane>
</el-tabs>
</template>
<script>
   export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>