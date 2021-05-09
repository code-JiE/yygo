<template>
  <!-- <el-tab-pane label="登录" class="is_left">
     <div id="all">
        <div class="left">
        </div>
        <div class="right" v-show="isLogin">
            <fieldset style="width: 500px; height: 300px;">
                <legend>用户登录</legend>
                <p><input type="text" v-model="login_user" placeholder="账号" /></p>
                <p><input type="password" v-model="login_pwd" placeholder="密码"  /></p>
                <button class="btn" @click="login_btn">登录</button><a href="#">忘记密码？</a>
                <button class=" res">没有账号注册一个</button>
            </fieldset>
        </div>
    </div>
    </el-tab-pane>
    <el-tab-pane label="注册" name="second" tab-position='right'>

    </el-tab-pane>

  </el-tabs> -->
  <el-row :gutter="20" class="cart">
    <el-col :span="16" :offset="4">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-user"></i>登录</span>
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="formLabelAlign"
          >
            <el-form-item label="账号">
              <el-input v-model="login_user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="login_pwd" type="password"></el-input>
            </el-form-item>
          </el-form>
          <el-row :gutter="20">
            <el-col :span="3" :offset="10">
              <el-button type="success" @click="login_btn"
                >登录</el-button
              ></el-col
            >
          </el-row>
        </el-tab-pane>
        <el-tab-pane
          ><span slot="label">
            <i class="el-icon-edit"></i>
            注册
          </span>
          <el-form
            :label-position="labelPosition"
            label-width="80px"
            :model="ruleFrom"
            :rules="rules"
            ref="register"
          >
            <el-form-item label="账号" prop="register_user">
              <el-input v-model="ruleFrom.register_user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input
                v-model="ruleFrom.register_pwd"
                type="password"
                prop="register_pwd"
              ></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input
                v-model="ruleFrom.register_Cpwd"
                type="password"
                 prop="register_Cpwd"
              ></el-input>
            </el-form-item>
            <el-form-item> </el-form-item>
          </el-form>
          <el-row :gutter="20">
            <el-col :span="3" :offset="10">
              <el-button type="success" @click="check"
                >注册</el-button
              ></el-col
            >
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
import { login, register, checkExist } from "@/network/login";
export default {
  data() {
    var validate_rgt_user = (rule, value, callback) => {
      checkExist(value).then((rs) => {
        console.log(rs);
        if (value == "") {
          this.RegisterSubmit = false;
          callback(new Error("账号不能为空"));
        } else if (rs.data == "err") {
          //存在
          this.RegisterSubmit = false;
          callback(new Error("亲,账号已经存在!"));
        } else if (rs.data == "success") {
          this.RegisterSubmit = true;
          //可用
          callback();
        } else {
          //服务器发送错误
          callback(new Error("服务器发生错误工程师正在路上"));
          this.RegisterSubmit = false;
        }
      });
    };

    return {
      login_user: "",
      login_pwd: "",
      login_Cpwd: "",
      RegisterSubmit: false,
      ruleFrom: {
        register_user: "",
        register_pwd: "",
        register_Cpwd: "",
      },
      rules: {
        register_user: [
          { required: true, validator: validate_rgt_user, trigger: "blur" },
        ],
      },
      isLogin: true,
      activeName: "first",
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: "",
      },
    };
  },
  methods: {
    login_btn() {
      console.log(1);
      login(this.login_user, this.login_pwd).then((data) => {
        if (data.data == "success") {
          this.open2();
          this.$store.state.user = this.login_user;
          this.$store.state.isLogin = true;
          this.isLogin = false;
          this.$router.push("/home");
        } else {
          this.$message.error("登录失败 账号或者密码不正确");
        }
      });
    },
    open2() {
      this.$message({
        message: "欢迎光临" + this.login_user,
        type: "success",
      });
    },
    check() {
      let that = this.ruleFrom;
      if (this.RegisterSubmit) {
        //账号重复验证通过
        if (
          that.register_user !== null &&
          that.register_user !== "" &&
          that.register_pwd !== "" &&
          that.register_Cpwd !== ""
        ) {
          if (that.register_pwd != that.register_Cpwd) {
            this.$alert("两次输入密码不一致", "验证失败");
          } else {
            register(that.register_user, that.register_pwd).then((data) => {
              if (data.data == "success") {
                this.$message({
                  type: "success",
                  message: "注册成功",
                });
                this.RegisterSubmit = false;
              }
            });
          }
        } else {
          this.$alert("账号密码不能为空", "验证失败");
        }
      } else {
        this.$alert("重复注册", "警告", {
          confirmButtonText: "确定",
        });
        this.$refs.register.resetFields()
      }
    },
  },
};
</script>

   <style scoped>
.is_left {
  margin: 20px;
}
.cart {
  margin-top: 50px;
}
</style>