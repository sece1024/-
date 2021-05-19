<template>
  <div id="EightDigital">
    <!-- <div id="vuetest">{{ msg }}</div> -->
    <!-- <test prop="p"></test> -->
    <!-- {{msg}} -->
    <!--计数器-->
    <div class="counter">
      当前移动次数:
      <p id="countNum" style="display: inline">0</p>
    </div>
    <div id="container">
      <!--九宫格-->
      <div id="board">
        <div id="cell1" name="cell" @click="move(0)">{{ board[0] }}</div>
        <div id="cell2" name="cell" @click="move(1)">{{ board[1] }}</div>
        <div id="cell3" name="cell" @click="move(2)">{{ board[2] }}</div>
        <div id="cell4" name="cell" @click="move(3)">{{ board[3] }}</div>
        <div id="cell5" name="cell" @click="move(4)">{{ board[4] }}</div>
        <div id="cell6" name="cell" @click="move(5)">{{ board[5] }}</div>
        <div id="cell7" name="cell" @click="move(6)">{{ board[6] }}</div>
        <div id="cell8" name="cell" @click="move(7)">{{ board[7] }}</div>
        <div id="cell9" name="cell" @click="move(8)">{{ board[8] }}</div>
      </div>
      <!--按钮-->
      <!-- <div class="div-btn">
        <button class="btn">初始化</button>
        <br />
        <button class="btn">乱序</button>
        <br />
        <button class="btn" @click="test()">测试</button>
        
      </div> -->
    </div>
  </div>
</template>

<!--// <script src="../js/MovePuzzle.js"></script>-->
<script>
// // 棋盘大小
// let _size = 3;
// // 0的下标
// var zeroIndex = 0;

// var board2 = [[], [], []]; //二维棋盘

// // 传入一维数组棋盘和被点击的坐标
// // 返回新的棋盘
// function newBoard(oldBoard, index) {
//   var _board = oldBoard;
//   for (var i = 0; i < _size; i++) {
//     for (var j = 0; j < _size; j++) {
//       if (oldBoard[i * _size + j] == 0) {
//         this.zeroIndex = i * _size + j;
//       }
//       board2[i][j] = oldBoard[i * _size + j];
//     }
//   }
//   // 获取所有可移动方格
//   moves = this.getMoves();
//   // 如果index可移动
//   moves.forEach((i) => {
//     if (index == i) {
//       let temp = _board[index];
//       _board[index] = _board[i];
//       _board[i] = temp;
//     }
//   });
//   return _board;
// }

// // 获取0周围的合法下标
// // 只有0周围的数字才能移动，知道0周围有哪些数字后，检查鼠标点击的数字是否在这些数字之中即可判断是否能移动；
// function getMoves() {
//   b = this.board.getBoard();
//   moves = []; // 可移动网格的一维下标

//   if (b[this.zeroIndex] == 0) {
//     let fourDirection = [
//       [i, j - 1],
//       [i, j + 1],
//       [i - 1, j],
//       [i + 1, j],
//     ]; // 左右下上

//     var k = 0;
//     for (k in fourDirection) {
//       if (
//         fourDirection[k][0] >= 0 &&
//         fourDirection[k][0] < _size &&
//         fourDirection[k][1] >= 0 &&
//         fourDirection[k][1] < _size
//       ) {
//         moves.push(fourDirection[k][0] * _size + fourDirection[k][1]);
//       }
//     }
//   }
//   return moves;
// }
// let GAOL = "1, 2, 3, 4, 5, 6, 7, 8, 0";
// var BOARD = [1, 2, 3, 4, 5, 6, 7, 8, 0];
// var cells = document.getElementsByName("cell"); // 网格对象
// function boardManager() {
//   var size = 9;
//   var _board = new Object();
//   _board.board = [1, 2, 3, 4, 5, 6, 7, 8, 0];
//   _board.zeroIndex = function () {
//     var i = 0;
//     for (; i < _board.length; i++) {
//       if (_board.board[i] == 0) {
//         return i;
//       }
//     }
//   };
//   _board.getBoard1 = function () {
//     var i = 0;
//     var b = [];
//     for (; i < size; i++) {
//       b.push(_board.board[i]);
//     }
//     return b;
//   };
//   _board.getBoard2 = function () {
//     var i = 0;
//     var b2 = [[], [], []];
//     for (; i < size; i++) {
//       b2[parseInt(i / 3)][parseInt(i % 3)] = _board.board[i];
//     }
//     return b2;
//   };
//   _board.getMoves = function () {
//     console.log("call getMoves()");
//     let b2 = this.getBoard2();
//     console.log("b2 = " + b2);
//     // 获取0周围的合法下标
//     // 只有0周围的数字才能移动，知道0周围有哪些数字后，检查鼠标点击的数字是否在这些数字之中即可判断是否能移动；
//     let b = _board.getBoard1();
//     var moves = []; // 可移动网格的一维下标
//     let zeroIndex = this.getZeroIndex();
//     if (b[zeroIndex] == 0) {
//       let i = parseInt(zeroIndex / 3);
//       let j = parseInt(zeroIndex % 3);
//       let fourDirection = [
//         [i, j - 1],
//         [i, j + 1],
//         [i - 1, j],
//         [i + 1, j],
//       ]; // 左右下上

//       var k = 0;
//       for (k in fourDirection) {
//         if (
//           fourDirection[k][0] >= 0 &&
//           fourDirection[k][0] < 3 &&
//           fourDirection[k][1] >= 0 &&
//           fourDirection[k][1] < 3
//         ) {
//           // 二维坐标转一维下标
//           moves.push(fourDirection[k][0] * 3 + fourDirection[k][1]);
//         }
//       }
//     }
//     return moves;
//   };
//   _board.move = function (index) {
//     // 获取所有可移动方格
//     let moves = _board.getMoves();
//     console.log("moves = " + moves);
//     console.log("Before move.");
//     console.log(this.array1);

//     for (var i = 0; i < moves.length; i++) {
//       if (index == i) {
//         let temp = _board.board[index];
//         // 将index方格设置为0
//         _board.board[index] = 0;
//         console.log(temp + " 被替换为了 0");
//         // 原先是0的方格
//         _board.board[i] = temp;

//         break;
//       }
//     }
//     // this.cells = this.array1;
//     console.log("After move.");
//     console.log(this.array1);
//   };
// }
// var myBoard = boardManager();

// function moveCell(index) {
//   if (myBoard.board[index] != 0) {
//     myBoard.move(index);
//     for (var i = 0; i < 9; i++) {
//       cells[i].innerHTML = myBoard.board[i];
//     }
//   }
// }

// 棋盘状态
// var _board = {
//   array1: BOARD,
//   //   cells: BOARD,
//   getBoard: function () {
//     return this.array1;
//   },
//   getBoard2: function () {
//     b2 = [[], [], []];
//     this.array1.forEach((item) => {
//       b2[item / 3][item % 3] = this.array1[item];
//     });
//     return b2;
//   },
//   setByIndex: function (index, target) {
//     if (index >= 0 && index < this.array1.length) {
//       this.array1[index] = target;
//     }
//   },
//   setByArray: function (newArray) {
//     if (newArray.length == 9) {
//       this.array1 = newArray;
//     }
//   },
//   getByIndex: function (index) {
//     return this.array1[index];
//   },
//   getZeroIndex: function () {
//     this.array1.forEach((index) => {
//       if (this.array1[index] == 0) {
//         return index;
//       }
//     });
//   },
//   getMoves: function () {
//     console.log("call getMoves()");
//     let b2 = this.getBoard2();
//     console.log("b2 = " + b2);
//     // 获取0周围的合法下标
//     // 只有0周围的数字才能移动，知道0周围有哪些数字后，检查鼠标点击的数字是否在这些数字之中即可判断是否能移动；
//     let b = this.array1;
//     var moves = []; // 可移动网格的一维下标
//     let zeroIndex = this.getZeroIndex();
//     if (b[zeroIndex] == 0) {
//       let i = parseInt(zeroIndex % 3);
//       let j = parseInt(zeroIndex / 3);
//       let fourDirection = [
//         [i, j - 1],
//         [i, j + 1],
//         [i - 1, j],
//         [i + 1, j],
//       ]; // 左右下上

//       var k = 0;
//       for (k in fourDirection) {
//         if (
//           fourDirection[k][0] >= 0 &&
//           fourDirection[k][0] < _size &&
//           fourDirection[k][1] >= 0 &&
//           fourDirection[k][1] < _size
//         ) {
//           // 二维坐标转一维下标
//           moves.push(fourDirection[k][0] * _size + fourDirection[k][1]);
//         }
//       }
//     }
//     return moves;
//   },
//   // 移动
//   move: function (index) {
//     // 获取所有可移动方格
//     let moves = this.getMoves();
//     console.log("moves = " + moves);
//     console.log("Before move.");
//     console.log(this.array1);
//     // 如果下标为index的方格可移动
//     // moves.forEach((i) => {
//     //   if (index == i) {
//     //     let temp = this.getByIndex(i);
//     //     // 将index方格设置为0
//     //     this.setByIndex(index, 0);
//     //     console.log(this.getByIndex(index) + " 被替换为了 0");
//     //     // 原先是0的方格
//     //     this.setByIndex(i, temp);

//     //     return;
//     //   }
//     // });
//     for (var i = 0; i < moves.length; i++) {
//       if (index == i) {
//         let temp = this.getByIndex(i);
//         // 将index方格设置为0
//         this.setByIndex(index, 0);
//         console.log(this.getByIndex(index) + " 被替换为了 0");
//         // 原先是0的方格
//         this.setByIndex(i, temp);

//         break;
//       }
//     }
//     // this.cells = this.array1;
//     console.log("After move.");
//     console.log(this.array1);
//   },
//   reset: function () {
//     if (index >= 0 && index < this.array1.length)
//       this.array1 = [1, 2, 3, 4, 5, 6, 7, 8, 0];
//   },
// };
// cell1.innerHTML = "*";
export default {
  name: "EightDigital",
  data() {
    return {
      moveCount: 0,
      board: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      //   {
      //     array1: [1, 2, 3, 4, 5, 6, 7, 8, 0],
      //     getBoard: function () {
      //       return this.array1;
      //     },
      //     setByIndex: function (index, target) {
      //       if (index >= 0 && index < this.array1.length) {
      //         this.array1[index] = target;
      //       }
      //     },
      //     setByArray: function (newArray) {
      //       if (newArray.length == 9) {
      //         this.array1 = newArray;
      //       }
      //     },
      //     getByIndex: function (index) {
      //       return this.array1[index];
      //     },
      //     reset: function () {
      //       if (index >= 0 && index < this.array1.length)
      //         this.array1 = [1, 2, 3, 4, 5, 6, 7, 8, 0];
      //     },
      //},
      // cells: BOARD,
    };
  },
  created() {
    // 随机移动并刷新棋盘
    this.initRandom(50);
    this.flushBoard();
  },
  methods: {
    flushBoard: function () {
      // var i = 0;
      // for (; i < 9; i++) {
      //   `cell${i}`.innerHTML = this.board[i];
      // }
      cell1.innerHTML = this.board[0];
      cell2.innerHTML = this.board[1];
      cell3.innerHTML = this.board[2];
      cell4.innerHTML = this.board[3];
      cell5.innerHTML = this.board[4];
      cell6.innerHTML = this.board[5];
      cell7.innerHTML = this.board[6];
      cell8.innerHTML = this.board[7];
      cell9.innerHTML = this.board[8];
    },
    move: function (i) {
      console.log("you click ", i);
      // cell1.innerHTML = "*";
      if (this.board[i] != 0) {
        this.moveCount++;
        countNum.innerHTML = this.moveCount;
        this.doMove(i);
        this.flushBoard();
        if (this.board == [1, 2, 3, 4, 5, 6, 7, 8, 0]) {
          alert("You Win!");
        }
      }

      // console.log(this.board);
    },
    init: function () {
      cell1.innerHTML = 1;
      cell2.innerHTML = 2;
      cell3.innerHTML = 3;
      cell4.innerHTML = 4;
      cell5.innerHTML = 5;
      cell6.innerHTML = 6;
      cell7.innerHTML = 7;
      cell8.innerHTML = 8;
      cell9.innerHTML = 9;
    },
    initRandom: function (n) {
      // 随机移动n次
      var i = 0;
      for (; i < n; i++) {
        let moves = this.getMoves();
        // 几个可移动方向
        let len = moves.length;
        // 0~1的随机数
        let r = Math.random();
        this.doMove(moves[parseInt(r * len)]);
      }
    },
    getZero: function () {
      for (var i = 0; i < 9; i++) {
        if (this.board[i] == 0) {
          return Math.round(i);
        }
      }
      alert("出错了！");
    },
    getMoves: function () {
      // 获取所有可移动方向
      var moves = [];
      let zeroIndex = this.getZero();
      // console.log("zero at " + zeroIndex);
      // 二维坐标
      let i = parseInt(zeroIndex / 3.0);

      let j = parseInt(zeroIndex % 3.0);
      // console.log("i = " + i);
      // console.log("j = " + j);
      let fourDirection = [
        [i, j - 1],
        [i, j + 1],
        [i - 1, j],
        [i + 1, j],
      ]; // 左右下上
      // console.log(fourDirection);

      var k = 0;
      for (k in fourDirection) {
        if (
          fourDirection[k][0] >= 0 &&
          fourDirection[k][0] < 3 &&
          fourDirection[k][1] >= 0 &&
          fourDirection[k][1] < 3
        ) {
          // 二维坐标转一维下标
          moves.push(Math.round(fourDirection[k][0] * 3 + fourDirection[k][1]));
        }
      }
      return moves;
    },
    doMove: function (n) {
      let moves = this.getMoves();
      let zeroIndex = this.getZero();
      let index = n;
      // console.log("moves: ", moves);
      var ii = 0;
      for (; ii < moves.length; ii++) {
        // console.log(moves[ii], " == ", index, moves[ii] == index);
        if (moves[ii] == index) {
          // console.log("可移动");
          this.board[zeroIndex] = this.board[index];
          this.board[index] = 0;
        }
      }
    },
    test: function () {
      // alert();
    },
  },
};

// let _size = 3; // 二维棋盘宽度=高度
// let size = _size * _size;   // 一维棋盘大小
// let GAOL = '1,2,3,4,5,6,7,8,0'; // 目标状态
// var cells = document.getElementsByName("cell"); // 网格对象
// var board = []; // 棋盘
// var board2 = [[], [], []];//二维棋盘
// var isAI = false;//电脑操作时，不显示获胜窗口
// for (var i = 0; i < _size; i++) {// 棋盘初始化
//     for (var j = 0; j < _size; j++) {
//         board[i * _size + j] = i * _size + j;
//         board2[i][j] = i * _size + j;
//     }
// }
// var counter_p = document.getElementById("countNum");// 显示数字的对象<p>
// var counter = 0;    // 移动计数器
// initCells();
</script>
<style scoped>
body {
  background: grey;
  color: white;
  font: Helveticaelvel, Arial, sans-serif;
}
header {
  background: rgb(149, 151, 114);
  padding: 10px;
}
footer {
  position: relative;
  text-align: center;
  /* margin-bottom: 100%; */
  bottom: 0;
}
h1 {
  color: rgb(100, 200, 100);
}
a {
  text-decoration: none; /* 删除链接下划线 */
}
nav {
  overflow: hidden;
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  overflow: hidden;
  display: inline-block;
  margin: 0;
  padding: 0;
}
li {
  float: left;
}
li a {
  display: inline-block;
  text-align: center;
  padding: 10px 15px;
  font-size: 120%;
  text-decoration: none;
}
.active {
  background: red;
}
li:hover {
  background-color: #ddd;
  color: black;
  text-decoration: underline;
}
button:hover {
  background-color: aquamarine;
}

/*  */
/* 设置外围容器属性*/
#container {
  padding: 0;
  position: relative;
  width: 640px;
  height: 500px;
  margin: 0 auto;
  margin-top: 0;
  margin-left: 0;
  /* 距离顶部长度 */
  border-radius: 10px;
}

/*装九宫格的棋盘*/
#board {
  position: absolute;
  margin-top: 40px;
  /* 绝对位置 */
  width: 450px;
  height: 450px;
  border-radius: 5px;
  display: inline-block;
  background-color: antiquewhite;
  box-shadow: 0 0 10px black;
}

/*小方格*/
#board div {
  position: absolute;
  width: 149px;
  height: 149px;
  box-shadow: 1px 1px 2px aquamarine;
  background-color: blanchedalmond;
  color: teal;
  text-align: center;
  /*文字居中*/
  font-size: 60px;
  line-height: 150px;
  cursor: pointer;
  transition: 0.3s;
}

#board div:hover {
  color: rgb(206, 45, 45);
  font-size: 140px;
  /* <!--字体放大效果--> */
}

/*小格子*/
#cell1 {
  display: inline;
  left: 0px;
}

#cell2 {
  display: inline;
  left: 150px;
}

#cell3 {
  display: inline;
  left: 300px;
}

#cell4 {
  display: inline;
  top: 150px;
  left: 0px;
}

#cell5 {
  display: inline;
  top: 150px;
  left: 150px;
}

#cell6 {
  display: inline;
  top: 150px;
  left: 300px;
}

#cell7 {
  display: inline;
  top: 300px;
  left: 0px;
}

#cell8 {
  display: inline;
  top: 300px;
  left: 150px;
}
#cell9 {
  display: inline;
  top: 300px;
  left: 300px;
}

.div-btn {
  display: block;
  position: relative;
  top: 0;
  left: 100%;
}

.btn {
  background-color: green;
  width: 80px;
  height: 35px;
  border-radius: 4px;
  margin-bottom: 3px;
}

div.counter {
  display: inline;
  position: relative;
  left: -50px;
}
</style>