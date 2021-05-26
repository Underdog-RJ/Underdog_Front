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
                <span v-if="email !== ''">
                  <i class="el-icon-check"></i>
                </span>
                <span v-else>
                  <i class="el-icon-close"></i>
                </span>
              </li>
              <li class="item_c">绑定邮箱</li>
              <li class="item_c">{{userInfo.mail}}</li>
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
                <span v-if="password !== ''">
                  <i class="el-icon-check"></i>
                </span>
                <span v-else>
                  <i class="el-icon-close"></i>
                </span>
              </li>
              <li class="item_c">登录密码</li>
              <li class="item_c" type="password" >1213123</li>
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
                <el-form-item style="text-align:center">
                  <el-button type="warning" @click="save"
                    >保存</el-button
                  >
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
        <div v-if="flagdialog === '3'">
          <div class="item">
             <tinymce :height="300" v-model="ucenterMemberZhuye.content"/>
             <el-button size="small" type="primary" @click="handleSubmitZhuye">提交</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-dialog :visible.sync="EmaildialogVisible" width="30%">
      <el-input v-model="email" placeholder="请您输入邮箱"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="EmaildialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="setMail"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-dialog :visible.sync="PassworddialogVisible" width="30%">
      <el-input v-model="password" placeholder="请您输入密码"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="PassworddialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="PassworddialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import ucenter from "@/api/ucenter";
import Tinymce from '@/components/Tinymce/index'
export default {
  watch:{
    flagdialog:function(newVal){
      if(newVal=='2'){
        this.getUserInfo()
      }
    }
  },
  components:{ Tinymce},  
  layout: "ucenterLayout",
  name: "",
  data() {
    return {
      flagdialog: "1",
      EmaildialogVisible: false,
      email: "",
      PassworddialogVisible: false,
      password: "",
      userInfo: {
        
      },
      ucenterMemberZhuye:{},
      userSex:[
          {
              value:1,
              label:'男'
      },
       {
              value:2,
              label:'女'
      }],
      BASE_API:'http://localhost:8222' // 接口API地址
    };
  },
  methods: {
     async getOwnPage(){
        const res= await ucenter.getOwnPage()
       this.ucenterMemberZhuye=res.data.data.ucenterMemberZhuye;
      },
    async setMail(){
        console.log(this.email)
        const res= await ucenter.setMail(this.email)
        this.EmaildialogVisible=false
    },
    async handleSubmitZhuye(){
      const res=await ucenter.addOwnPage(this.ucenterMemberZhuye);
      if(res.data.code===20000){
        this.$router.push('/ucenter/index_ucenter')
        this.ucenterMemberZhuye.content=""
      }
    },
    getUserInfo(){
      this.userInfo=this.$store.state.userInfo
      console.log(this.userInfo)
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
  
    async save(){
        const res=await ucenter.updateUserInfo(this.userInfo);
        
        if(res.data.code===20000){
            console.log(this.userInfo)
            this.$store.commit('initUserInfo', this.userInfo)
            this.flagdialog='1'
            this.userInfo={}

        }
    }
  },
  created() {
    this.userInfo = this.$store.state.userInfo;
    this.getOwnPage()

  }
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
