const mat3 = require('./utils.js');

const mat1 = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1]
];

const mat2 = [
    [2, 1, 1],
    [3, 2, 0],
    [4, 3, 2]
];
//console.log (mat3.sumOfMatrices(mat1,mat2))
console.log (mat3.matrixProduct(mat1,mat2))
//console.log (mat3.sumOfEachRow(mat1))