const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) 
{
    if(!Array.isArray(arr)) throw new Error ('THROW');
    
    let arrCopy = arr;

    for (let i = 0; i < arr.length; i++) {
      if(arrCopy[i + 1] != undefined )
      {
        if(arrCopy[i] == '--discard-next') 
        {
          delete arrCopy[i];
          delete arrCopy[i + 1];
        }
        if(arrCopy[i] == '--double-next') arrCopy[i] = arrCopy[i + 1];
      }
      if(arrCopy[i - 1] != undefined)
      {
        if(arrCopy[i] == '--discard-prev') arrCopy.splice(i - 1, 2);
        if(arrCopy[i] == '--double-prev') arrCopy[i] = arrCopy[i - 1];
      }
      if((arrCopy[i + 1] == undefined || arrCopy[i - 1] == undefined) &&
         (arrCopy[i] == '--discard-next' || arrCopy[i] == '--double-next' ||
          arrCopy[i] == '--discard-prev' || arrCopy[i] == '--double-prev' ))
          {
            delete arrCopy[i];
          }
    }

    return arrCopy.filter(Boolean);
};
