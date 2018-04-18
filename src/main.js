export class Haiku{

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  arrayConversion() {
    let line1Array = this.line1.split(" ");
    let line2Array = this.line2.split(" ");
    let line3Array = this.line3.split(" ");
    let haikuArray = [];
    haikuArray.push(line1Array, line2Array, line3Array);
    return haikuArray;
  }

  characterChecker(array) {
    array.includes()
  }
}
