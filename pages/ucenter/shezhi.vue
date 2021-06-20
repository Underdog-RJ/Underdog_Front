<template>
  <div class="container u_blog">
    <el-row>
      <el-col :span="4">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          background-color="#fff"
          text-color="black"
          active-text-color="#00baf2"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">账号安全</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">修改资料</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">编辑主页</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div v-if="flagdialog === '1'">
          <div class="item">
            <ul class="item_zh">
              <li class="item_1">
                <span v-if="userInfo.mail != ''&&userInfo.mail!=null">
                  <i class="el-icon-check"></i>
                </span>
                <span v-else>
                  <i class="el-icon-close"></i>
                </span>
              </li>
              <li class="item_c">绑定邮箱</li>
              <li class="item_c">{{ userInfo.mail }}</li>
              <li class="item_c">
                <el-button
                  @click="EmaildialogVisible = true"
                  type="success"
                  size="mini"
                  round
                  >更换邮箱</el-button
                >
              </li>
            </ul>
            <ul class="item_zh">
              <li class="item_1">
                <span v-if="userInfo.password !== ''&&userInfo.password!=null">
                  <i class="el-icon-check"></i>
                </span>
                <span v-else>
                  <i class="el-icon-close"></i>
                </span>
              </li>
              <li class="item_c">登录密码</li>
              <li class="item_c">
                <input type="password" style="border: 0;outline: none; background-color: rgba(0, 0, 0, 0);" v-model="userInfo.password" disabled>
                </li>
              <li class="item_c">
                <el-button
                  @click="PassworddialogVisible = true"
                  type="success"
                  size="mini"
                  round
                  >修改密码</el-button
                >
              </li>
            </ul>
            <ul class="item_zh">
              <li class="item_1">
                <span v-if="userInfo.mobile !== ''">
                  <i class="el-icon-check"></i>
                </span>
                <span v-else>
                  <i class="el-icon-close"></i>
                </span>
              </li>
              <li class="item_c">绑定手机</li>
              <li class="item_c">{{ userInfo.mobile }}</li>
              <li class="item_c">
                <el-button
                  @click="mobiledialogVisible = true"
                  type="success"
                  size="mini"
                  round
                  >修改电话</el-button
                >
              </li>
            </ul>
          </div>
        </div>
        <div v-if="flagdialog === '2'">
          <div class="item">
            <div class="show_1">
              <label for="">用户等级</label>
              <div>
                <el-progress
                  :text-inside="true"
                  :stroke-width="26"
                  :percentage="50"
                ></el-progress>
              </div>
            </div>
            <div>
              <el-form>
                <el-form-item label="用户头像">
                  <el-upload
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                    :action="BASE_API + '/eduoss/fileoss'"
                    class="avatar-uploader"
                  >
                    <img :src="userInfo.avatar" />
                  </el-upload>
                </el-form-item>
                <el-form-item label="用户昵称">
                  <el-input v-model="userInfo.nickname" />
                </el-form-item>
                <el-form-item label="性别">
                  <el-select v-model="userInfo.sex" placeholder="请选择">
                    <el-option
                      v-for="item in userSex"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="用户地址">
                  <el-input v-model="userInfo.address" /> </el-form-item
                ><el-form-item label="个性签名">
                  <el-input v-model="userInfo.signature" />
                </el-form-item>
                <el-form-item label="年龄">
                  <el-input v-model="userInfo.age" />
                </el-form-item>
                <el-form-item style="text-align: center">
                  <el-button type="warning" @click="save">保存</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '3'">
          <div class="item">
            <tinymce :height="300" v-model="zhuye.content" />
            <el-button size="small" type="primary" @click="handleSubmitZhuye"
              >提交</el-button
            >
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- 邮箱弹框 -->
    <el-dialog
      @close="editDialogClosed"
      :visible.sync="EmaildialogVisible"
      width="30%"
    >
      <el-form
        :model="editForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
      </el-form>

      <div style="display: flex">
        <div style="margin-left: 70px; width: 200px">
          <el-input type="text" placeholder="验证码" v-model="codeMail" />
        </div>
        <div style="margin-left: auto">
          <el-button
            type="primary"
            size="medium"
            :value="codeTest1"
            @click="getCodeFun1()"
            >{{ codeTest1 }}</el-button
          >
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="setMail">立即验证</el-button>
      </span>
    </el-dialog>

    <!-- 电话弹框 -->
    <el-dialog
      @close="editDialogClosed"
      :visible.sync="mobiledialogVisible"
      width="30%"
    >
      <el-form
        :model="mobileForm"
        :rules="editFormRules"
        ref="editFormRef"
        label-width="70px"
      >
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="mobileForm.mobile"></el-input>
        </el-form-item>
      </el-form>

      <div style="display: flex">
        <div style="margin-left: 70px; width: 200px">
          <el-input type="text" placeholder="验证码" v-model="code" />
        </div>
        <div style="margin-left: auto">
          <el-button
            type="primary"
            size="medium"
            :value="codeTest"
            @click="getCodeFun()"
            >{{ codeTest }}</el-button
          >
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="warning" @click="setMobile">立即验证</el-button>
      </span>
    </el-dialog>

    <!-- 密码弹框 -->
    <el-dialog :visible.sync="PassworddialogVisible" 
     @close="PasswordformRefClosed"
    width="30%">
       <el-form
        ref="PasswordformRef"
        :model="passwordForm"
        :rules="passwordFormRules"
        label-width="0px"
       
      >
        <!--密码-->
        <el-form-item prop="password">
          <el-input
            v-model="passwordForm.password"
            prefix-icon="iconfont icon-3702mima"
            type="password"
            placeholder="请输入您的密码"
          ></el-input>
        </el-form-item>
    
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="PassworddialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updatePassword"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ucenter from "@/api/ucenter";
import Tinymce from "@/components/Tinymce/index";
import registerApi from "@/api/register";
export default {
  watch: {
    flagdialog: function (newVal) {
      if (newVal == "2") {
        this.getUserInfo();
      }
    },
  },
  components: { Tinymce },
  layout: "ucenterLayout",
  name: "",
  data() {
    // 验证邮箱的规则
    var checkmgEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regmgEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;

      if (regmgEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }

      cb(new Error("请输入合法的邮箱"));
    };

    // 验证手机号的规则
    var checkmgMobile = (rule, value, cb) => {
      // 验证手机号的正则表达式
      const regmgMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;

      if (regmgMobile.test(value)) {
        return cb();
      }

      cb(new Error("请输入合法的手机号"));
    };
    return {
      flagdialog: "1",
      EmaildialogVisible: false,
      editForm: {
        email: "",
      },
      passwordForm:{
        password:""
      },
      mobiledialogVisible: false,
      PassworddialogVisible: false,
      password: "",
      userInfo: {},
      zhuye: {
        content: "这家伙很懒，什么也没留下",
      },
      tempContent: "这家伙很懒，什么也没留下",
      // 修改表单的验证规则
      editFormRules: {
        //验证的名字需要和表单的名字相同
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: checkmgEmail, trigger: "blur" },
        ],
        mobile: [
          { required: true, message: "请输入你的手机号", trigger: "blur" },
          { validator: checkmgMobile, trigger: "blur" },
        ],
      },
      passwordFormRules:{
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      },
      userSex: [
        {
          value: 1,
          label: "男",
        },
        {
          value: 2,
          label: "女",
        },
      ],
      BASE_API: "http://localhost:8222", // 接口API地址
      mobileForm: {
        mobile: "",
      },
      code: "",
      sending: true, //是否发送验证码
      second: 60, //倒计时间
      codeTest: "获取验证码",
      sending1: true, //是否发送验证码
      second1: 60, //倒计时间
      codeTest1: "获取验证码",
      codeMail:""
    };
  },
  methods: {
    //更改用户密码
    updatePassword(){
          this.$refs.PasswordformRef.validate(async (valid) => {
        if (!valid) return;
        const res=await ucenter.updateUserPassword(this.passwordForm.password)
        if(res.data.code==20000){
          this.userInfo=res.data.data.ucenterMember;
          this.$message.success("更新成功")
          this.PassworddialogVisible=false
        }else{
          this.$message.error("更新失败")
           this.PassworddialogVisible=false
        }
      });
    },
    PasswordformRefClosed(){
      this.$refs.PasswordformRef.resetFields()
    },
    //通过输入手机号发送验证码
    getCodeFun() {
      this.$refs.editFormRef.validate(async (valid) => {
        if (!valid) return;
        if (this.userInfo.mobile == this.mobileForm.mobile) {
          this.$message.error("手机号未修改");
          this.mobiledialogVisible = false;
          return;
        }
        registerApi.sendCode(this.mobileForm.mobile).then((response) => {
          this.sending = false;
          //调用倒计时的方法
          this.timeDown();
        });
      });
    },
    timeDown() {
      let result = setInterval(() => {
        --this.second;
        this.codeTest = this.second;
        if (this.second < 1) {
          clearInterval(result);
          this.sending = true;
          this.second = 60;
          this.codeTest = "获取验证码";
        }
      }, 1000);
    },
      timeDown1() {
      let result = setInterval(() => {
        --this.second1;
        this.codeTest1 = this.second1;
        if (this.second1 < 1) {
          clearInterval(result);
          this.sending1 = true;
          this.second1 = 60;
          this.codeTest1 = "获取验证码";
        }
      }, 1000);
    },
    //设置手机号
    async setMobile() {
      const res = await ucenter.setOwnMobile(this.mobileForm.mobile, this.code);
      if (res.data.code == 20000) {
        this.$message.success(res.data.message);
        this.userInfo.mobile = this.mobileForm.mobile;
        this.code = "";
      } else {
        this.$message.error(res.data.message);
      }
      this.mobiledialogVisible = false;
    },
    // 监听修改用户对话框的关闭事件
    editDialogClosed() {
      console.log(this.$refs.editFormRef);
      this.$refs.editFormRef.resetFields();
    },
    async getOwnPage() {
      const res = await ucenter.getOwnPage();
      if (
        res.data.data.ucenterMemberZhuye != null &&
        res.data.data.ucenterMemberZhuye != ""
      ) {
        this.zhuye = res.data.data.ucenterMemberZhuye;
      }
    },
    async getCodeFun1() {
    
        if(this.userInfo.mail==this.editForm.email){
          this.$message.error("邮箱没有更改")
          this.EmaildialogVisible=false;
          return;
        }
        const res = await ucenter.setMail(this.editForm.email);
        if(res.data.code===20000){
          this.$message.success(res.data.message)
            this.sending1 = false;
          //调用倒计时的方法
          this.timeDown();
        }else{
           this.$message.error(res.data.message)
        }
   
    },
    async setMail(){
      const res=await ucenter.validateMail(this.editForm.email,this.codeMail)
      if(res.data.code==20000){
        this.$message.success(res.data.message)
        this.userInfo.mail=this.editForm.email
        this.codeMail=""
      }else{
        this.$message.error(res.data.message)
      }
      this.EmaildialogVisible=false
    },
    async handleSubmitZhuye() {
      //this.ucenterMemberZhuye.content=this.tempContent
      const res = await ucenter.addOwnPage(this.zhuye);
      if (res.data.code === 20000) {
        this.$router.push("/ucenter/index_ucenter");
        this.zhuye.content = "";
      }
    },
    getUserInfo() {
      this.userInfo = this.$store.state.userInfo;
      console.log(this.userInfo);
    },
    handleSelect(index) {
      this.flagdialog = index;
    },
    // 上传封面成功调用的方法
    handleAvatarSuccess(res, file) {
      this.userInfo.avatar = res.data.url;
    },
    // 上传之前调用的方法
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },

    async save() {
      const res = await ucenter.updateUserInfo(this.userInfo);
      if (res.data.code === 20000) {
        console.log(this.userInfo);
        this.$store.commit("initUserInfo", this.userInfo);
        this.flagdialog = "1";
        this.userInfo = {};
      }
    },
  },
  mounted() {
    this.getOwnPage();
    this.userInfo = this.$store.state.userInfo;
  },
  created() {
    
  },
};
</script>

<style scoped>
.show_1 {
  display: flex;
}
.show_1 label {
  width: 100px;
}
.show_1 div {
  flex: 1;
}
.item_zh {
  display: flex;
  border-bottom: 1px splid #eee;
  margin-bottom: 30px;
  justify-content: space-around;
}

.item_1 {
  width: 100px;
}
.item_c {
  flex: 1;
}
.operation {
  margin-left: auto;
}
.title_bolg {
  font-size: 20px;
  font-weight: bold;
}
.show_left {
  margin: 10px;
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
}
.item_bottom {
  height: 50px;
  display: flex;
  justify-content: start;
}
.item_bottom span {
  /* flex: 1; */
  margin-right: 10px;
}

.item_center {
  flex: 50%;
}
.show {
  display: flex;
}
.show_item {
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}
.active {
  background: greenyellow;
}
.hide {
  display: none;
}
.show {
  display: block;
}
.img-float {
  margin-right: 10px;
  height: 150px;
  width: 250px;
}
.img-float img {
  border-radius: 10px;
  margin: 10px;
  text-align: center;
  width: 100%;
}
.avatar {
  float: left;
  margin-top: 300px !important;
  z-index: 9999;
}
.avatar-uploader img {
  width: 30%;
}
.item {
  margin: 30px;
}
.u_blog {
  margin-bottom: 30px !important;
  min-height: 500px;
  background-color: #fff;
}
</style>
