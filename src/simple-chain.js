const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    console.log(this.arr.length);
    return this;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if(position <= 0 || position > this.arr.length) throw new Error ('THROWN');
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = `( ${this.arr[0]} )`;
    for (let i = 1; i < this.arr.length; i++) 
    {
      result += `~~( ${this.arr[i]} )`;
    }
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
