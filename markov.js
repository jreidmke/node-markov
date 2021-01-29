class MarkovMachine {

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    if(this.words.length === 0) throw Error('must enter words');
    this.makeChains();
  }

  makeChains() {
    this.obj = {};
    for(let [idx, word] of this.words.entries()) {
      if(!this.obj[word]) {
        this.obj[word] = [this.words[idx + 1]]
      } else {
        this.obj[word] = [...this.obj[word], this.words[idx + 1]];
      }
    };
    return this.obj;
  }

  makeText(numWords = 100) {
    let currWord = this.words[choice(this.words)];
    this.arr = [currWord];
    while(this.arr.length < numWords) {
      this.arr.push(this.obj[currWord][choice(this.obj[currWord])]);
      currWord = this.arr[this.arr.length - 1];
      if(currWord === undefined) break;
    }
    return this.arr.join(' ');
  }
}

function choice(arr) {
  return Math.floor(Math.random() * arr.length);
}

module.exports = {
  MarkovMachine,
};