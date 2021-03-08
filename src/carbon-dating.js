const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) 
{
  if(Number.isNaN(+sampleActivity) || typeof(sampleActivity) != 'string' || typeof(sampleActivity) == 'undefined' ||
     +sampleActivity <= 0 || +sampleActivity > 15) return false;
  
  return Math.ceil((Math.log(15 / +sampleActivity) * 5730) / 0.693);
};