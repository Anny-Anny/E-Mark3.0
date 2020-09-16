<template>
  <div>
    <el-tabs v-model="activeName2"  type="card" >
        <el-tab-pane label="标注" name="first"></el-tab-pane>
        <el-tab-pane label="分类" name="second"></el-tab-pane>
        <el-tab-pane label="筛选" name="third"></el-tab-pane>
      </el-tabs>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          activeName2: 'first'
        };
      },

    };
</script>

<style>
  .el-tabs__header{
    width:420px;
  }
</style>
