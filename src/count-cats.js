const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) 
{
  matrix = matrix.join(',').split(',');
  let catsCount = 0;

  for (let i = 0; i < matrix.length; i++) 
  {
    if(matrix[i] == '^^') catsCount++;      
  }

  return catsCount;
};
