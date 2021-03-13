const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(word, key)
  {
    if(typeof(word) == "undefined" || typeof(key) == "undefined") throw new Error("THROWN");

    word = word.toUpperCase().split("");
    key = key.toUpperCase().split("");
    
    let subKey = [];
    let k = 0;

    for (let i = 0; i < word.length; i++)
    {
      if(word[i].toUpperCase() == word[i].toLowerCase())
      { 
        subKey.push(word[i]);
        k++;
      }
      else
      {
        subKey.push(key[(i - k) % key.length]);
      }
    }

    let result = [];

    for (let i = 0; i < word.length; i++) 
    {
      if(word[i].toUpperCase() != word[i].toLowerCase())
      {
        result.push(String.fromCharCode(((word[i].charCodeAt() + subKey[i].charCodeAt()) % 26) + 65));
      }
      else
      {
        result.push(word[i]);
      }
    }
    return result.join('');
  }    
  decrypt(cipher, key)
  {
    if(typeof(cipher) == "undefined" || typeof(key) == "undefined") throw new Error("THROWN");

    cipher = cipher.toUpperCase().split("");
    key = key.toUpperCase().split("");
    
    let subKey = [];
    let k = 0;

    for (let i = 0; i < cipher.length; i++)
    {
      if(cipher[i].toUpperCase() == cipher[i].toLowerCase())
      { 
        subKey.push(cipher[i]);
        k++;
      }
      else
      {
        subKey.push(key[(i - k) % key.length]);
      }
    }

    let result = [];

    for (let i = 0; i < cipher.length; i++) 
    {
      if(cipher[i].toUpperCase() != cipher[i].toLowerCase())
      {
        result.push(String.fromCharCode(((cipher[i].charCodeAt() + 26 - subKey[i].charCodeAt()) % 26) + 65));
      }
      else
      {
        result.push(cipher[i]);
      }
    }
    return result.join('');
  }
}

module.exports = VigenereCipheringMachine;
