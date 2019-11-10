var matrix=[[1,0,0],[0,1,0],[0,0,1]];
var flag=0,flag2=0;
for ( i = 0; i < matrix.length; i++) {
    for ( j = 0; j < matrix.length ; j++) {
        if(i==j && matrix[i][j]==1){
            flag++;
        }
        else if(matrix[i][j]!=0){
            console.log("it is not an identity matrix");
            flag2=1;
            break
        }
    }
if(flag2==1){
    break
}
}
if(flag==matrix.length){
    console.log("it is an identity matrix");
}