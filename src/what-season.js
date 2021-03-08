const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) 
{
    if(date == null) return 'Unable to determine the time of year!';
    if(!(typeof date.getDate === 'function'))  throw new Error("THROWN");

    let dateStringView = date.toDateString().split(' ');

    let data = [
        {months: ['Dec', 'Jan', 'Feb'], season: 'winter'}, {months: ['Mar', 'Apr', 'May'], season: 'spring'}, 
        {months: ['Jun', 'Jul', 'Aug'], season: 'summer'}, {months: ['Sep', 'Oct', 'Nov'], season: 'autumn'}
    ]
    for (let i = 0; i < data.length; i++) 
    {
        if(data[i].months.includes(dateStringView[1])) return data[i].season;   
    }
};