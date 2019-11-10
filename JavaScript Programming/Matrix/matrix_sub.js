var matrix_A=[[2,3],[6,8]];
var matrix_B=[[2,2],[4,6]];
var matrix_D=[];
var matrix_E=[];

for(i=0;i<matrix_A.length;i++){
       for(j=0;j<matrix_B.length;j++){
        matrix_D.push(matrix_A[i][j] - matrix_B[i][j] );
       }
       matrix_E.push(matrix_D)
       matrix_D=[]
    }
console.log(matrix_E)
