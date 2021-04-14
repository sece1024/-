// alert("hello")
var arrayBoard = [[1,2,3],[4,5,6],[7,8,0]]
// alert(arrayBoard[2][1]);
function testOnClick(i){
    var c = document.getElementById('id'+i);
    c.style.background = 'black';
    c.style.color = 'red';
    // c.style.display = 'none';
}

function cellAction(n){
    for(var i = 0;i<3;i++){
        for(var j = 0;j<3;j++){
            if (arrayBoard[i][j] == n){
                alert(arrayBoard[i][j]);
                var cell = document.getElementById(n);
                cell.style.display = none;
            }
        }

    }


}