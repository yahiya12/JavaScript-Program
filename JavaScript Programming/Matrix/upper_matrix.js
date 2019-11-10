var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var a="";
for ( i = 0; i < matrix.length; i++) {
    for ( j = i; j < matrix[i].length; j++) {
    a+= String(matrix[i][j]);
    a+=" ";
    }
    console.log(a)
    a="";

}