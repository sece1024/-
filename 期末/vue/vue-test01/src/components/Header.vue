<template>
  <el-row id="VHeader">
    <el-col :span="24">
      <div class="head-wrap">{{msg}}</div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "VHeader",
  data() {
    return {
      msg: "Hello HGX",
    };
  }
};
</script>

<style scoped>
.head-wrap{
    text-align: justify;
    text-align-last: justify;
  /* background-color: #409EFF;
  color: #fff;
  line-height: 60px; */
}
</style>