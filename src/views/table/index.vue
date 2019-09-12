<template>
  <div class="table-container">
    <el-table :data="tableData" border stripe style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "tableIndex",
  data() {
    return {
      tableData: [
        {
          date: "2019-09-02",
          name: "王小虎",
          address: "深圳市南山区深南大道 8008 号"
        },
        {
          date: "2019-09-04",
          name: "王小虎",
          address: "深圳市南山区深南大道 8007 号"
        },
        {
          date: "2019-09-01",
          name: "王小虎",
          address: "深圳市南山区深南大道 8009 号"
        },
        {
          date: "2019-09-03",
          name: "王小虎",
          address: "深圳市南山区深南大道 8006 号"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.table-container {
  margin: 20px;
}
</style>
