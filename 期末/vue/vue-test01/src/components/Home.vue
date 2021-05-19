<template>
  <el-container>
    <!-- <div>{{ msg }}</div> -->
    <el-header class="header">
      <vheader />
    </el-header>
    <el-container>
      <el-aside width="200px">
        <navmenu></navmenu>
      </el-aside>
      <el-main>
        <!-- 路由 -->
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import NavMenu from "./NavMenu.vue";
import Header from "./Header.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "This is Home.",
    };
  },
  components: {
    navmenu: NavMenu,
    vheader: Header,
  },
};
</script>

<style scoped>
.header {
  background-color: #409eff;
  color: #fff;
  line-height: 60px;
}
</style>