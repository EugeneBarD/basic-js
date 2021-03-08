const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if(options.separator == undefined) options.separator = '+';
  if(options.addition !== undefined)
  {
    if(options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
    if(options.additionRepeatTimes == 1) str += options.addition;
    else
    {
      let resultAddition = options.addition;
      for (let i = 1; i < options.additionRepeatTimes; i++) 
      {
        resultAddition += (options.additionSeparator + options.addition) ;
      }
      str += resultAddition;
    }
  }
  let result = str;
  
  for (let i = 1; i < options.repeatTimes; i++) 
  {
    result += (options.separator + str);
  }
  
  return result;
};
  