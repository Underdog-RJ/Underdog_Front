<template>
  <div class="main">
    <div class="title">
      <a href="/login">登录</a>
      <span>·</span>
      <a href="/register">注册</a>
      <span>·</span>
      <a class="active" href="/resetPassword">重置</a>
    </div>
    <div class="sign-up-container">
      <el-form ref="userForm" :model="params">
        <el-form-item
          class="input-prepend restyle no-radius"
          prop="mail"
          :rules="[
            {
              required: true,
              message: '请输入您注册时的邮箱',
              trigger: 'blur'
            },
            { validator: checkMail, trigger: 'blur' }
          ]"
        >
          <div>
            <el-input
              type="text"
              placeholder="请输入您注册时的邮箱"
              v-model="params.mail"
            />
            <i class="iconfont icon-phone" />
          </div>
        </el-form-item>

        <el-form-item
          class="input-prepend restyle no-radius"
          prop="code"
          :rules="[
            { required: true, message: '请输入验证码', trigger: 'blur' }
          ]"
        >
          <div
            style="width: 100%;display: block;float: left;position: relative"
          >
            <el-input type="text" placeholder="验证码" v-model="params.code" />
            <i class="iconfont icon-phone" />
          </div>
          <div
            class="btn"
            style="position:absolute;right: 0;top: 6px;width: 40%;"
          >
            <a
              href="javascript:"
              type="button"
              @click="getCodeFun()"
              :value="codeTest"
              style="border: none;background-color: none"
              >{{ codeTest }}</a
            >
          </div>
        </el-form-item>

        <el-form-item
          class="input-prepend"
          prop="password"
          :rules="[
            { required: true, message: '请重新输入您的密码', trigger: 'blur' }
          ]"
        >
          <div>
            <el-input
              type="password"
              placeholder="请重新输入您的密码"
              v-model="params.password"
            />
            <i class="iconfont icon-password" />
          </div>
        </el-form-item>

        <div class="btn">
          <input
            type="button"
            class="sign-up-button"
            value="重置"
            @click="resetPassword()"
          />
        </div>
      </el-form>
      <!-- 更多注册方式 -->
      <div class="more-sign">
        <h6>社交帐号直接注册</h6>
        <ul>
          <li>
            <a
              id="weixin"
              class="weixin"
              target="_blank"
              href="http://localhost:8150/api/ucenter/wx/login"
              ><i class="iconfont icon-weixin"
            /></a>
          </li>
          <li>
            <a id="qq" class="qq" target="_blank" href="#"
              ><i class="iconfont icon-qq"
            /></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import "~/assets/css/sign.css";
import "~/assets/css/iconfont.css";
import ucenter from "@/api/ucenter";
export default {
  layout: "sign",
  data() {
    return {
      params: {
        mail: "",
        code: "",
        password: ""
      },
      sending: true, //是否发送验证码
      second: 60, //倒计时间
      codeTest: "获取验证码"
    };
  },
  methods: {
    async resetPassword() {
      this.$refs.userForm.validate(async valid => {
        if (!valid) return;
        const res=await ucenter.resetPassword(this.params)
        if(res.data.code===20000){
            this.$message.success(res.data.message)
            this.$router.push('/login')
        }else{
             this.$message.error(res.data.message)
        }
      });
    },
    //通过输入邮箱号发送验证码
    async getCodeFun() {
        
      const res = await ucenter.setMail(this.params.mail);
      if (res.data.code === 20000) {
        this.$message.success(res.data.message);
        this.sending = false;
        //调用倒计时的方法
        this.timeDown();
      } else {
        this.$message.error(res.data.message);
      }
    },
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second;
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          //this.disabled = false;
          this.second = 60;
          this.codeTest = "获取验证码";
        }
      }, 1000);
    },
    checkPhone(rule, value, callback) {
      //debugger
      if (!/^1[34578]\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式不正确"));
      }
      return callback();
    },
    checkMail(rule, value, cb) {
      // 验证邮箱的正则表达式
      const regmgEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regmgEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    }
  }
};
</script>
<style scoped></style>
