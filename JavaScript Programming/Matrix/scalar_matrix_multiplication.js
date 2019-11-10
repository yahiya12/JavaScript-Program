var matrix_A=[[2,3],[6,8]];
var scalar=2;
var matrix_D=[];
var matrix_E=[];

for(i=0;i<matrix_A.length;i++){
       for(j=0;j<matrix_A.length;j++){
        matrix_D.push(matrix_A[i][j]*scalar);
       }
       matrix_E.push(matrix_D)
       matrix_D=[]
    }
console.log(matrix_E)
