var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var a=0;
for ( i = 0; i < matrix.length; i++) {
    for ( j = i; j < matrix[i].length; j++) {
    a+= matrix[i][j];
    }
}
console.log("the sum of upper matrix is: ",a)