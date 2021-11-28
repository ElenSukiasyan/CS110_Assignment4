function sumOfArray(arr){
    let sum=0;
    for(i=0; i<=arr.length - 1 ;i++)
    {
        sum = sum + arr[i];
    }
    return sum;
}

module.exports = {
    
    matrixProduct: function(mat1,mat2)
    {
        totalMat = [];
        for ( let i=0; i<=mat1.length ;i++)
        {
            let temprary = [];
            for (let k=0; k<= mat2[0]; k++)
            {
                sum=0;
                for ( let j=0; j<=mat1[0].length; j++)
                {
                    sum = mat1[i][j] + mat2[j][k];
                }
                temporary.push(sum);
            }
            totalMat.push (temporary)
        }
        return totalMat;
    },
    sumOfMatrices: function(mat1, mat2)
    {
         let mat3 = []; 
        for (let i = 0; i <= mat1.length-1 ; i++)
        {
            let temporary=[];
            for (let j = 0; j <= mat1[0].length-1 ; j++)
            {  
                temporary.push (mat1[i][j] + mat2[i][j]);
            }  
            mat3.push (temporary);    
        }
        return mat3;
    },
    sumOfEachRow: function(mat)
    {
        let sumArr = [];
        for(let i=0; i <= mat.length-1; i++)
        {
            sumArr.push (sumOfArray(mat[i]));
        }
        return sumArr;
    }
}
