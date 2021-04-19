// alert('domTest')
// 获取div.cellRow对象
function getCellRow() {
    var d = document.getElementsByClassName("cellRow");
    // console.log(d[0])
    return d;
}

// 遍历div.cellRow 获取没一行每一个小格子
function getCell() {
    console.log('changeCellCol');
    var cellR = getCellRow();
    // cell保存每一个小格子
    var cell = [3]
    for (var i = 0; i < 3; i++) {
        // for (var j = 0; j < 3; j++) {
        //     // cellR[i][j].innerHTML(i);
        //     console.log(cellR[i][j]);
        // }
        // console.log(cellR[i]);
        // cell[i][j]表示第i行第j个
        cell[i] = cellR[i].getElementsByClassName("cellCol");

    }
    // console.log(cell);
    // console.log(typeof cell[0][0]);
    // 修改cell内容
    // cell[0][0].innerHTML = '0';

    return cell; // 小格子的二维数组

}

// 初始化
function init() {
    let cellSize = 3; // 表示矩阵大小为k*cellSize
    var cell = getCell();
    for (var i = 0; i < cellSize; i++) {
        for (var j = 0; j < cellSize; j++) {
            if (i != cellSize - 1 || j != cellSize - 1) { // 不是最后一个格子
                cell[i][j].innerHTML = i * cellSize + j + 1;
            } else {
                cell[i][j].innerHTML = 0;
                // cell[i][j].insertBefore();
                cell[i][j].className = "cellNotShow"; // 将最后一个格子隐藏
            }
            if (cell[i][j]) {
                console.log(cell[i][j].innerHTML);

            }

        }
    }
}

init()