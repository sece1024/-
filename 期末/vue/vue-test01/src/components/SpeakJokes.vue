<template>
  <div id="SpeakJokes">
    <h1>
      <el-button class="txtBtn" @click="get">{{ msg }}</el-button>
    </h1>
    <!-- 回到顶部 -->
    <el-backtop target=".txtBtn">UP</el-backtop>
    <!-- <el-button class="get" @click="get">get请求</el-button>
    <el-button class="post">post请求</el-button> -->
    <el-card class="box-card">
      <el-button
        @click="clearjokes"
        style="float: right; padding: 3px"
        type="text"
        >清空</el-button
      >
      <div v-for="item in jokes" :key="item" class="text item">
        {{ item }}
        <el-divider class="divider"></el-divider>
      </div>
    </el-card>
  </div>
</template>

<!-- <script src="https://unpkg.com/axios/dist/axios.min.js"></script>-->
<script>
// var jokeTest = ["hello"];
export default {
  name: "SpeakJokes",
  data() {
    return {
      msg: "说笑话",
      jokes: [],
    };
  },
  methods: {
    get: function () {
      // _this.$axios.get("https://autumnfish.cn/api/joke/list?num=6").then(
      //   function (response) {
      //     console.log(response);
      //     console.log("==========");
      //     console.log(response.data.jokes);
      //     // _this.temp = response.data.jokes[0];
      //     // for(var i=0;i<temp.length;i++){

      //     // }
      //     // this.jokes = temp;

      //     this.temp = response.data.jokes;
      //   },
      //   function (err) {
      //     console.log(err);
      //   }
      // );

      this.$axios
        .get("https://autumnfish.cn/api/joke/list?num=6")
        .then((response) => {
          var that = this; //将指向vue对象的this赋值给外部方法定义的属性，然后在内部方法中使用该属性
          // 否则this指向的内容会变，无法修改this.jokes的内容

          that.jokes = response.data.jokes;
          // console.log("jokes", this.jokes);
        })
        .catch((error) => {
          console.log(error);
          alert("网络错误，不能访问");
        });

      // console.log("jokes: ", this.jokes);
    },
    clearjokes: function () {
      this.jokes = [];
    },
  },
};
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  /* width: 480px; */
  width: auto;
}

.divider {
  position: relative;
}
</style>