<template>
  <!-- 手机号
收货人
商品id
标题
账号
地址
总价格 -->

  <el-form ref="form" :model="form" label-width="80px" :rules="rules">
    <el-form-item label="收货人">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>
    <el-form-item label="地址">
      <el-input v-model="form.add"></el-input>
    </el-form-item>
    <el-form-item label="即时配送">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item>
    <el-form-item>

    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("手机号不能为空"));
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
        if (reg.test(value)) {
          callback();
        } else {
          return callback(new Error("请输入正确的手机号"));
        }
      }
    };
    return {
      form: {
        name: "",
        phone: "",
        add:""
      },
      rules: {
        phone: [
          {
            required: true,
            validator: checkPhone,
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },

  },
};
</script>

<style>
</style>