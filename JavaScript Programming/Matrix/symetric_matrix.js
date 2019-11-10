var matrix=[[1,0,2],[0,1,0],[0,0,1]];
var flag=0;
for ( i = 0; i < matrix.length; i++) {
    for ( j = 0; j < matrix.length ; j++) {
       if(matrix[i][j]!=matrix[j][i]){
           console.log("not symetric matrix");
           flag=1;
           break
     }

        }
    if(flag==1){
        break
    }
    }
if(flag==0){
    console.log("symetric matrix")
}