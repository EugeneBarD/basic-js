const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) 
{
  if(!Array.isArray(members)) return false;

  let dreamTeamName = "";
  
  for (let i = 0; i < members.length; i++) 
  {
    if(typeof(members[i]) == 'string')
    {
      dreamTeamName += (members[i].split(' ').join(''))[0].toUpperCase();
    }
  }
  
  return dreamTeamName.split('').sort().join('');
};
