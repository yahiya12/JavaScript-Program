var matrix_A=[[2,3],[6,8]];
var matrix_B=[[2,3],[6,8]];
var flag=0;

for(i=0;i<matrix_A.length;i++){
       for(j=0;j<matrix_B.length;j++){
       if(matrix_A[i][j]!=matrix_B[i][j] ){
        console.log("not equal")
        flag=1;
        break
       }
       }
      if(flag==1){
          break
      }
    }
if(flag==0){
console.log("matrices are equal")
}