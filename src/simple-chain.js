const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: new Array(),
  getLength() {
    console.log(this.arr.length);
    return this;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(typeof(this.arr[position - 1]) == "undefined")
    {
      this.arr = new Array();
      throw new Error ('THROWN');
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.slice();
    this.arr = new Array();
    return result.join("~~");
  }
};

module.exports = chainMaker;
