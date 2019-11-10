 var a = [[1, 2], 
          [3, 4]],
      b = [[5,6],
           [7, 8]];
           var c=0;
for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        c+=a[i][j]*b[j][i]
    }
    console.log(c)
    c=0;
}