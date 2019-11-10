var matrix=[[1,2,3],[4,5,6],[7,8,9]];
b=[];c=[]
for ( i = 0; i < matrix.length; i++) {


if (i != matrix.length / 2) {
    a=matrix[i][i]
    matrix[i][i]=matrix[i][matrix.length-i-1]
    matrix[i][matrix.length-i-1]=a
}
}

for ( i = 0; i < matrix.length; i++) {
    for ( j= 0; j < matrix.length; j++) {
        b.push(matrix[i][j])
        
    }
    c.push(b)
    b=[];
   
}
console.log(c)