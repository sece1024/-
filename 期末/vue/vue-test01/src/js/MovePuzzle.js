// 棋盘大小
let _size = 3;
// 0的下标
var zeroIndex = 0;


var board2 = [
    [],
    [],
    []
]; //二维棋盘

// 传入一维数组棋盘和被点击的坐标
// 返回新的棋盘
function newBoard(oldBoard, index) {
    for (var i = 0; i < _size; i++) {
        for (var j = 0; j < _size; j++) {
            if (oldBoard[i * _size + j] == 0) {
                this.zeroIndex = i * _size + j
            }
            board2[i][j] = oldBoard[i * _size + j]
        }
    }
    // 获取所有可移动方格
    moves = this.getMoves();
    // 如果index可移动
    moves.forEach(i => {
        if (index == i) {
            let temp = this.board[index];
            this.board[index] = this.board[i];
            this.board[i] = temp;
        }
    });
    return this.board;
}


// 获取0周围的合法下标
// 只有0周围的数字才能移动，知道0周围有哪些数字后，检查鼠标点击的数字是否在这些数字之中即可判断是否能移动；
function getMoves() {
    b = this.board;
    moves = []; // 可移动网格的一维下标

    if (b[this.zeroIndex] == 0) {
        let fourDirection = [
            [i, j - 1],
            [i, j + 1],
            [i - 1, j],
            [i + 1, j]
        ]; // 左右下上

        var k = 0;
        for (k in fourDirection) {
            if ((fourDirection[k][0] >= 0 && fourDirection[k][0] < _size) && (fourDirection[k][1] >= 0 && fourDirection[k][1] < _size)) {
                moves.push(fourDirection[k][0] * _size + fourDirection[k][1]);
            }
        }



    }
    return moves;
}