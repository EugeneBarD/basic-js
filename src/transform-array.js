const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) 
{
    if(!Array.isArray(arr)) throw new Error ('THROW');
    
    let resultArr = arr.slice();
    let length = arr.length
    
    for (let i = 0; i < length; i++) 
    {
      if (resultArr[i] == "--discard-next") 
      { 
        if(typeof(resultArr[i + 1]) != "undefined"){ delete resultArr[i]; delete resultArr[i + 1]; }
        else { delete resultArr[i]; } 
      }
      if (resultArr[i] == "--discard-prev") 
      { 
        if(typeof(resultArr[i - 1]) != "undefined"){ delete resultArr[i - 1]; delete resultArr[i]; }
        else { delete resultArr[i]; } 
      }
      if (resultArr[i] == "--double-next") { typeof(resultArr[i + 1]) != "undefined" ? resultArr[i] = resultArr[i + 1] : delete resultArr[i]; }
      if (resultArr[i] == "--double-prev") { typeof(resultArr[i - 1]) != "undefined" ? resultArr[i] = resultArr[i - 1] : delete resultArr[i]; }
    }
    return resultArr.filter(n => typeof(n) != "undefined");
};
