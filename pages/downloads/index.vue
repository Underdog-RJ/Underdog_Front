<template>
  <div id="aBlogsList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container mt20">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="fileName" label="标题" width="250"></el-table-column>
        <el-table-column prop="fileType" label="分类" width="180"></el-table-column>
        <el-table-column label="大小">
          <template slot-scope="scope">{{ scope.row.fileSize | formatMetrics }}</template>
        </el-table-column>
        <el-table-column label="下载">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-delete"
              @click="getDownload(scope.row)"
            >下载</el-button>
          </template>
        </el-table-column>
      </el-table>
    </section>
  </div>
</template>
<script>
import vodApi from "@/api/vod";
export default {
  data() {
    return {
      tableData: [],
      page: 1,
      size: 10
    };
  },
  filters: {
    formatMetrics(bytes) {
      if (bytes === 0) return "0 B";
      var k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));

      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    }
  },
  mounted() {
    this.getAllByPage();
  },
  methods: {
    async getAllByPage() {
      const res = await vodApi.getAllByPage(this.page, this.size);
      if (res.data.code === 20000) {
        this.tableData = res.data.data.list;
      }
    },
    getDownload(row) {
      window.open(row.fileUrl);
    }
  }
};
</script>
<style scoped>
</style>