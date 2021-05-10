let _size = 3; // 二维棋盘大小
let size = _size * _size;   // 一维棋盘大小
let GAOL = '1,2,3,4,5,6,7,8,0'; // 目标状态
var cells = document.getElementsByName("cell"); // 网格对象
var board = []; // 棋盘
var board2 = [[], [], []];//二维棋盘
var isAI = false;//电脑操作时，不显示获胜窗口
for (var i = 0; i < _size; i++) {// 棋盘初始化
    for (var j = 0; j < _size; j++) {
        board[i * _size + j] = i * _size + j;
        board2[i][j] = i * _size + j;
    }
}
var counter_p = document.getElementById("countNum");// 显示数字的对象<p>
var counter = 0;    // 移动计数器
initCells();

// 计数器加一
function counterAdd() {
    counter += 1;
    counter_p.innerHTML = counter;

}
// 计数器清零
function counterClear() {
    counter = 0;
    counter_p.innerHTML = counter;
}
function initCells() {
    //初始化
    for (var i = 0; i < size; i++) {
        // console.log(cells[i].innerHTML);

        // let ii = i + 1;
        // board[i] = ii;
        // if (ii < size)
        cells[i].innerHTML = (i + 1) % 9;
        board[i] = (i + 1) % 9;
    }
    counterClear();
    setBoard();



}
// 按照一维数组board修改棋盘
function setBoard() {
    // console.log(array.length);
    // 按照棋盘一维数组重新对<div>元素写入数字
    for (var i = 0; i < size; i++) {
        // console.log(cells[i].innerHTML);
        // if (array[i] != 0)
        cells[i].innerHTML = board[i];
    }

    // 将0隐藏
    for (i in cells) {
        if (cells[i].innerHTML == 0) {
            cells[i].style = "color:blanchedalmond";
        } else {
            cells[i].style = "color:teal;"
        }
    }


}
// 根据下标获取棋盘内容
function getCell(index) {
    if (index >= 0 && index < size)
        var out = board[index];
    return out;
}
// 获取二维棋盘
function getBoard2() {

    for (var i = 0; i < _size; i++) {
        for (var j = 0; j < _size; j++) {
            board2[i][j] = board[i * _size + j];
        }
    }
    return board2;
}

// 获取0周围的合法下标
// 只有0周围的数字才能移动，知道0周围有哪些数字后，检查鼠标点击的数字是否在这些数字之中即可判断是否能移动；
function getMoves() {
    b = getBoard2();
    // console.log('b: ' + b);
    for (var i = 0; i < _size; i++) {
        for (var j = 0; j < _size; j++) {
            //console.log(b[i][j]);
            if (b[i][j] == 0) {
                let fourDirection = [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]];// 左右下上
                moves = [];  // 可移动网格的一维下标
                var k = 0;
                for (k in fourDirection) {
                    if ((fourDirection[k][0] >= 0 && fourDirection[k][0] < _size) && (fourDirection[k][1] >= 0 && fourDirection[k][1] < _size)) {
                        moves.push(fourDirection[k][0] * _size + fourDirection[k][1]);
                    }
                }
                return moves;
            }
        }
    }
    return null;
}
// 测试
function test() {
    moveNTimes(100);    // 随机移动100次
}

// 若点击的方块在0周围，则与0交换位置，否则不变
function move(n) {

    // 零无法移动
    if (board[n] == 0) {
        return;
    }

    let index = n;
    // 获取当前可移动位置，判断index是否是这些位置之一
    let moveDirection = getMoves();
    for (k in moveDirection) {

        if (moveDirection[k] == index) {
            // console.log(moveDirection[k]);
            // 内容交换
            board[getZeroIndex()] = board[index];
            board[index] = 0;
            counterAdd();
            setBoard();    // 刷新棋盘
            // 是否复原
            if (checkWin()) {
                if (!isAI) {
                    waitNAndWin(500);
                    // alert("You Win!");
                }
            }
        }
    }

    // console.log("index:" + index);
    // 左右下上
    // let fourDrection = [index + 1, index - 1, index + 3, index - 3];
    // // console.log("fourDrection:" + fourDrection);
    // for (var i = 0; i < size; i++) {

    //     if (checkIndex(fourDrection[i])) {  // 范围合法
    //         if (board[fourDrection[i]] == 0) {
    //             // 在0周围，交换位置
    //             let temp = board[index];
    //             board[index] = board[fourDrection[i]];
    //             board[fourDrection[i]] = temp;
    //             counterAdd();
    //         }
    //     }
    // }
    // setBoard();    // 刷新棋盘

}
// function sleep(time) {
//     var startTime = new Date().getTime() + parseInt(time, 10);
//     while (new Date().getTime() < startTime) { return; }
// }
// 睡眠
function sleep(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time);
    })
}

// 打乱棋盘-移动n次
async function moveNTimes(n) {
    // 计数器清零
    counterClear();

    var i = 0;
    // 电脑操控，不显示获胜弹窗
    isAI = true;
    // 随机移动n次
    for (; i < n; i++) {
        randomMove();
        await sleep(100);/*async await实际上是generator和promise的语法糖，在提供同步编程方式实现异步调用的基础上，同时满足对sleep函数语义化的支持，也是常用的sleep的实现方式。 */
    }
    isAI = false;
}
// 停留n毫秒后,显示获胜弹窗
async function waitNAndWin(n) {
    x = parseInt(n);
    await sleep(x);
    alert("You Win!");
}
// 随机移动
// 随机点击0周围的数字
function randomMove() {
    let index = getZeroIndex();
    let fourDirection = [index + 1, index - 1, index + 3, index - 3];   // 四个方向
    var dir = getMoves();   // 可移动方向
    let dirNum = dir.length;    // 可移动方向数目
    let r = Math.random();
    // console.log(dir);
    // console.log("random number: " + r);
    // console.log("length dir: " + dirNum);
    // console.log("parseInt r: " + parseInt(r * dirNum))
    // console.log("random dir: " + dir[parseInt(r * dirNum)])


    move(dir[parseInt(r * dirNum)]);


}

// 获取0的下标
function getZeroIndex() {
    for (var i = 0; i < size; i++) {
        if (board[i] == 0) {
            return i;
        }
    }
}
// 验证下标是否合法
function checkIndex(n) {
    if (n >= 0 && n < size) {
        return true;
    }
    else { return false; }
}
// 检查是否获胜
function checkWin() {
    if (board.toString() == GAOL) {
        return true;
    }
    else { return false; }
}
// 在控制台打印棋盘
function printBoard() {
    var i = 0;
    strOut = '\n'
    for (; i < size; i++) {
        strOut = strOut + board[i] + ' ';
        if ((i + 1) % 3 == 0) strOut += '\n';   // 换行
    }
    console.log(strOut);
    console.log(getBoard2());
    console.log("moves: " + getMoves());
}