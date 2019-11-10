var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var a=0;
for ( i = 0; i < matrix.length; i++) {
    for ( j = 0; j < i+1 ; j++) {
    a+=matrix[i][j]
    }
      }
console.log("the sum of lower matrix is: ",a)