<template>
  <div id="TextReverse">
    <div>
      <!-- {{ msg }} -->
      <h2>输入一段文字</h2>
      <el-input v-model="msg"></el-input>
      <br />
      <el-button @click="reverse">反转</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "TextReverse",
  data() {
    return {
      msg: "input here",
    };
  },
  methods: {
    reverse: function () {
      this.msg = this.msg.split("").reverse().join("");
    },
  },
};
</script>
<style scoped>
</style>