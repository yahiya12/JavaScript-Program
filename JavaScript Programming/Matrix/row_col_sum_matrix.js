var matrix=[[1,2,3],[4,5,6],[7,8,9]];
var row_sum=0;
var row_array=[];
var col_sum=0;
var col_array=[];
for(i=0;i<matrix.length;i++){
    for(j=0;j<matrix[i].length;j++){
        row_sum+=matrix[i][j]
        col_sum+=matrix[j][i]
      }
      row_array.push(row_sum)
      col_array.push(col_sum)
      col_sum=0;
      row_sum=0;
}
console.log("sum of each rows are: ",row_array)
console.log("sum of each columns are: ",col_array)