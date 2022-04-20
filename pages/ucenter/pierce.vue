<template>
  <div class="container">
    <!-- 导航菜单 -->
    <ucenterNav />
    <!-- 内网穿透内容开始 -->
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
            <span slot="title">我的隧道</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">购买隧道</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">聚合隧道</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">自主域名</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-setting"></i>
            <span slot="title">流量记录</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" v-if="currentIndex == '1'">
        <div class="tableStyle">
          <el-alert
            title="温馨提示,隧道的在线,离线状态可能更新不即使呦，可以刷新试试。"
            type="success"
          ></el-alert>
          <el-table :data="userTunnel" style="width: 100%">
            <el-table-column prop="name" label="名称" width="180">
            </el-table-column>
            <el-table-column label="隧道标识" width="300">
              <template slot-scope="scope">
                <div>
                  <span v-show="hasContains(scope.row.id)">{{
                    scope.row.clientKey
                  }}</span>
                  <span v-show="!hasContains(scope.row.id)">{{
                    scope.row.clientKey | filterUnshow
                  }}</span>
                </div>
                <div>
                  <el-button
                    v-show="!hasContains(scope.row.id)"
                    size="mini"
                    type="warning"
                    @click="handleShowBtn(scope.row.id)"
                    >显示</el-button
                  >
                  <el-button
                    v-show="hasContains(scope.row.id)"
                    size="mini"
                    type="warning"
                    @click="handleUnShowBtn(scope.row.clientKey, scope.row.id)"
                    >隐藏</el-button
                  >
                  <el-button
                    size="mini"
                    type="primary"
                    @click="handleChange(scope.row)"
                    >更换</el-button
                  >
                  <el-button
                    size="mini"
                    type="success"
                    @click="handleFuzhi(scope.row.clientKey)"
                    >复制</el-button
                  >
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="lan" label="代理信息"> </el-table-column>
            <el-table-column prop="inetPort" label="公网端口">
            </el-table-column>
            <el-table-column label="状态">
              <template slot-scope="scope">
                <el-tag v-show="scope.row.status == 1" type="success"
                  >在线</el-tag
                >
                <el-tag v-show="scope.row.status == 0" type="info">离线</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <div>
                  <el-button
                    type="success"
                    size="mini"
                    @click="handleSettingBtn(scope.row)"
                    >配置</el-button
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
          <div class="pageStyle">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="5"
              :total="total"
              @current-change="handlePageChange"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :span="20" v-if="currentIndex == '2'">
        <el-alert
          title="警告:禁止提供非法/违规/敏感信息或进行非法用途,一经发现立即封停账号,相关证据提交公安机关!禁止免流,翻墙,论坛等应用!"
          type="error"
        >
        </el-alert>
        <el-alert
          title="温馨提示,购买后,在我的隧道 -> 配置 有更多选项可以自定义"
          type="success"
        >
        </el-alert>
        <el-alert title="一个注册用户可免费拥有1条的隧道" type="warning">
        </el-alert>
        <el-form ref="tunnelInfoForm" :model="tunnelInfo" label-width="80px">
          <el-form-item label="隧道名称">
            <el-input v-model="tunnelInfo.name"></el-input>
          </el-form-item>
          <el-form-item label="隧道标识">
            <span
              >有服务端创建，用户可以在配置中再次随机生成，切勿讲标识透漏给其他用户.</span
            >
          </el-form-item>
          <el-form-item label="隧道端口">
            <span>有服务端创建，返回给客户端，用户可以查看，不可以修改.</span>
          </el-form-item>
          <el-form-item label="代理信息">
            <el-input
              placeholder="代理的格式   IP:PORT,如果您在本地运行则直接填写127.0.0.1,如果您运行在docker中，您需要填写docker的ip地址。"
              v-model="tunnelInfo.lan"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="createTunnel">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="20" v-if="currentIndex == '5'">
        <div class="tableStyle">
          <el-alert
            title="温馨提示,隧道的在线,离线状态可能更新不即使呦，可以刷新试试。"
            type="success"
          ></el-alert>
          <el-table :data="metricsList" style="width: 100%">
            <el-table-column prop="port" label="公网端口" width="180">
            </el-table-column>
            <el-table-column label="流出流量" width="280">
              <template slot-scope="scope">
                {{ scope.row.readBytes | formatMetrics }}
              </template>
            </el-table-column>
            <el-table-column label="流入流量" width="280">
              <template slot-scope="scope">
                {{ scope.row.wroteBytes | formatMetrics }}
              </template>
            </el-table-column>
            <el-table-column prop="channels" label="当前连接数量">
            </el-table-column>
          </el-table>
          <div class="pageStyle">
            <el-pagination
              background
              layout="prev, pager, next"
              :page-size="5"
              :total="totalMetrics"
              @current-change="handlePageChangeMetrics"
            >
            </el-pagination>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-drawer
      size="50%"
      title="内网穿透配置"
      :visible.sync="drawerFlag"
      direction="rtl"
    >
      <el-form
        ref="tunnelInfoForm"
        :model="currentClientInfo"
        label-width="80px"
      >
        <el-form-item label="隧道名称">
          <el-input v-model="currentClientInfo.name"></el-input>
        </el-form-item>
        <el-form-item label="隧道标识">
          <div>
            <span v-show="hasContains(currentClientInfo.id)">{{
              currentClientInfo.clientKey
            }}</span>
            <span v-show="!hasContains(currentClientInfo.id)">
              {{ currentClientInfo.clientKey | filterUnshow }}
            </span>
            <el-button
              size="mini"
              type="success"
              @click="handleFuzhi(currentClientInfo.clientKey)"
              >复制</el-button
            >
            <el-button
              v-show="!hasContains(currentClientInfo.id)"
              size="mini"
              type="warning"
              @click="handleShowBtn(currentClientInfo.id)"
              >显示</el-button
            >
            <el-button
              v-show="hasContains(currentClientInfo.id)"
              size="mini"
              type="warning"
              @click="
                handleUnShowBtn(
                  currentClientInfo.clientKey,
                  currentClientInfo.id
                )
              "
              >隐藏</el-button
            >
          </div>
        </el-form-item>
        <el-form-item label="代理信息">
          <el-input
            placeholder="代理的格式   IP:PORT,如果您在本地运行则直接填写127.0.0.1,如果您运行在docker中，您需要填写docker的ip地址。"
            v-model="currentClientInfo.lan"
          ></el-input>
        </el-form-item>
        <el-form-item label="公网端口">
          <span>{{ currentClientInfo.inetPort }}</span>
        </el-form-item>
        <el-form-item label="创建时间">
          <span>{{ currentClientInfo.gmtCreate | formatDate }}</span>
        </el-form-item>
        <el-form-item label="更新时间">
          <span>{{ currentClientInfo.gmtModified | formatDate }}</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateClient">更新</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>
<script>
import pierceApi from "@/api/pierce";
export default {
  layout: "default",
  data() {
    return {
      userTunnel: [],
      total: 0,
      totalMetrics: 0,
      tunnelInfo: {},
      page: 1,
      size: 5,
      pageMetrics: 1,
      sizeMetrice: 5,
      indexList: [],
      flagShow: false,
      currentIndex: "1",
      currentUnshowClient: "",
      metricsList: [],
      drawerFlag: false,
      currentClientInfo: {},
    };
  },
  filters: {
    /**
     * 隐藏当前clientKey
     */
    filterUnshow(value) {
      if (value != undefined) {
        let tmp = value.replace(/[0-9]/gi, "*");
        return tmp;
      }
    },
    formatMetrics(bytes) {
      if (bytes === 0) return "0 B";
      var k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));

      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    formatDate(date) {
      if (date != undefined) {
        var Dates = new Date(date);
        var Y = Dates.getFullYear();
        var M = Dates.getMonth() + 1;
        var D = Dates.getDate();
        var times = Y + (M < 10 ? "-0" : "-") + M + (D < 10 ? "-0" : "-") + D;

        return times;
      }
    },
  },
  mounted() {
    this.getUserChannel();
  },
  methods: {
    /**
     * 更新配置
     */
    async updateClient() {
      const res = await pierceApi.updateClient(this.currentClientInfo);
      this.drawerFlag = false;
      this.getUserChannel();
    },
    /**
     * 更新配置
     */
    handleSettingBtn(currentInfo) {
      let tmp = JSON.stringify(currentInfo);
      this.currentClientInfo = JSON.parse(tmp);
      this.drawerFlag = true;
    },
    /**
     * 获取流量记录
     */
    async getUserMetrics() {
      const res = await pierceApi.getUserMetrics(
        this.pageMetrics,
        this.sizeMetrice
      );
      this.metricsList = res.data.data.list;
      this.totalMetrics = res.data.data.total;
    },
    /**
     * 用户改变clientKey的按钮
     */
    async handleChange(client) {
      const res = await pierceApi.changeClientKey(client);
      this.getUserChannel();
    },
    /**
     * 判读当前的隐藏列表是否包含目标索引，如果不不含返回true包含返回false
     */
    hasContains(id) {
      let i = this.indexList.indexOf(id);
      if (i == -1) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 显示当前clientKey的处理，从隐藏列表之中删除
     */
    handleShowBtn(index) {
      let i = this.indexList.indexOf(index);
      if (i != -1) {
        this.indexList.splice(i, 1);
      }
    },
    /**
     * 隐藏当前key的按钮，添加到隐藏的列表
     */
    handleUnShowBtn(clientKey, index) {
      this.indexList.push(index);
    },
    handleSelect(index) {
      this.currentIndex = index;
      switch (index) {
        case "2":
          // this.hasPort();
          break;
        case "1":
          this.getUserChannel();
          break;
        case "5":
          this.getUserMetrics();
          break;
      }
    },
    /**
     * 获取当前全部的用户隧道
     */
    async getUserChannel() {
      const res = await pierceApi.getUserChannel(this.page, this.size);
      this.userTunnel = res.data.data.list;
      this.total = res.data.data.total;

      // 求出当前列表
      this.indexList = this.userTunnel.map((item) => item.id);
    },
    /**
     * 创建用户隧道
     */
    async createTunnel() {
      const res = await pierceApi.createTunnel(this.tunnelInfo);
      this.$message(res.data.message);
      this.currentIndex = "1";
    },
    /**
     * 处理当前页面的变化
     */
    handlePageChange(e) {
      this.page = e;
      this.getUserChannel();
    },
    /**
     * 流量记录页面变换
     */
    handlePageChangeMetrics(e) {
      this.pageMetrics = e;
      this.getUserMetrics();
    },
    /**
     * 复制按钮
     */
    handleFuzhi(text) {
      let inputElement = document.createElement("input");
      inputElement.value = text;
      document.body.appendChild(inputElement);
      inputElement.select();
      let flag = document.execCommand("Copy");
      if (flag) {
        this.$message("复制成功");
      } else {
        this.$message("复制失败");
      }
      inputElement.remove();
    },
  },
};
</script>
<style scoped>
.tableStyle {
  min-height: 700px;
  max-height: 700px;
}
.pageStyle {
  text-align: center;
}
</style>