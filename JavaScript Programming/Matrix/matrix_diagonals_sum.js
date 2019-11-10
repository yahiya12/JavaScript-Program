var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var major_diagonal=0;
var minor_diagonal=0;
for(i=0;i<matrix.length;i++){
major_diagonal+=matrix[i][i];
minor_diagonal+=matrix[i][matrix.length-1-i];
}
console.log("sum of major_diagonal: ",major_diagonal);
console.log("sum of minor_diagonal: ",minor_diagonal);