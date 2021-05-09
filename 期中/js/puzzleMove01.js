// 方格移动脚本
// time: 2021.4.12
// author: HGX
var array_board = [[1, 2, 3], [4, 5, 6], [7, 8, 0]]; // 棋盘
// goal = array_board.toString();
console.log(typeof (goal) + ":" + getBoard());
// alert("点击方块进行测试");
function clickTest(n) {
    alert(n);
}

// 测试改变棋盘
function testChange() {
    array_board[0][0] = 9;
    alert(getBoard());
}

// 获取当前棋盘(字符串)
function getBoard() {
    return array_board.toString();
}
// 获取当前棋盘，并在每一行元素末尾添加 '\n'
function showBoard() {
    var out = '\n';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (j != 2) { out += array_board[i][j] + ' '; }
            else { out += array_board[i][j] + '\n'; }

        }
    }
    return out;
}
// 获取坐标
function getIndex(n) {
    x = parseInt(n);
    if (x > 0 && x < 9) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (array_board[i][j] == x) {
                    return [i, j]
                }
            }
        }
    }

}

// 若点击的方块在0周围，则与0交换位置，否则不变
function dataMove(n) {
    // console.log("this:" + EventSource);
    console.log("你想要移动: " + n);
    x = parseInt(n);

    //一维坐标转换为二维坐标
    // var i = parseInt((x-1)/3);	// 要先转换成整型，否则它为浮点数
    // var j = parseInt((x-1)%3);
    var index = getIndex(x);
    // console.log("now index = " + index);
    zero = findZero(index[0], index[1]);	// 如果0在周围则返回0的坐标
    // console.log("zero = " + zero);
    // alert("typeof(zero) = "+typeof zero);

    if (zero[0] < 0) {
        alert("无法移动!");
        console.log(n + "无法移动！");
    } else {
        alert(n + "已移动到 (" + zero[0] + "，" + zero[1] + ") 位置，打开控制台查看。");
        console.log(n + "已移动到 (" + zero[0] + "，" + zero[1] + ") 位置");
        // console.log(typeof zero[0]);
        array_board[zero[0]][zero[1]] = n;
        array_board[index[0]][index[1]] = 0;
    }

    console.log("array_board = " + showBoard());
}
// 在坐标i，j的上下左右寻找是否有0，有返回0的坐标，否则返回null
function findZero(a, b) {
    i = parseInt(a);
    j = parseInt(b);

    // 如果空格在中央
    if (array_board[1][1] == 0) {
        // 并且被点击的方块在中间行或者中间列，则表示它们相邻
        if (i == 1 || j == 1) {
            return [1, 1];	// 如果不相邻，则表示无法移动，后面的便不需要判断了
        }
    }
    // 如果方块在中央
    else if (i == 1 && j == 1) {
        var wsad = [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]];	//上下左右四个方向
        for (var ij in wsad) {	// for ij in array 语句中ij表示的是数组下标
            if (array_board[wsad[ij][0]][wsad[ij][1]] == 0) {
                return [wsad[ij][0], wsad[ij][1]];
            }
        }
    }
    // 方块在中间一行
    else if (i == 1) {
        var arr = [i - 1, i + 1]; //中央位置不需要遍历
        for (var ii in arr) {
            // console.log("[ii,j]=" + [arr[ii], j] + "\narray_board[ii][j] = " + array_board[arr[ii]][j]);
            if (array_board[arr[ii]][j] == 0) { return [arr[ii], j]; }
        }
    }
    // 方块在中间一列
    else if (j == 1) {
        var arr = [j - 1, j + 1]
        for (var jj in [j - 1, j + 1]) {	//中央位置不需要遍历
            if (array_board[i][arr[jj]] == 0) { return [i, arr[jj]]; }
        }
    }
    // 方块在四个角落
    else if (i == 0 && j == 0) {
        if (array_board[i][j + 1] == 0) { return [i, j + 1]; }
        if (array_board[i + 1][j] == 0) { return [i + 1, j]; }
    }
    else if (i == 0 && j == 2) {
        if (array_board[i][j - 1] == 0) { return [i, j - 1]; }
        if (array_board[i + 1][j] == 0) { return [i + 1, j]; }
    }
    else if (i == 2 && j == 2) {
        if (array_board[i][j - 1] == 0) { return [i, j - 1]; }
        if (array_board[i - 1][j] == 0) { return [i - 1, j]; }
    }
    else if (i == 2 && j == 0) {
        if (array_board[i][j + 1] == 0) { return [i, j + 1]; }
        if (array_board[i - 1][j] == 0) { return [i - 1, j]; }
    }

    return [-1, -1];
}