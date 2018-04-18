export class Haiku{

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  // arrayConversion() {
  //   let line1Array = this.line1.split(" ");
  //   let line2Array = this.line2.split(" ");
  //   let line3Array = this.line3.split(" ");
  //   let haikuArray = [];
  //   haikuArray.push(line1Array, line2Array, line3Array);
  //   this.array = haikuArray;
  //   return haikuArray;
  // }

  characterChecker(object) {
    const arrayToCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let x = true;
    arrayToCheck.forEach(function(character) {
      if (object.line1.includes(character) === true) {
        x = false;
      }
      if (object.line2.includes(character) === true) {
        x = false;
      }
      if (object.line3.includes(character) === true) {
        x = false;
      }
    });
    return x;
      //if (this.line1.match(/[\W1234567890]+/g) === true || this.line2.match(/[\W1234567890]+/g) === true || this.line3.match(/[\W1234567890]+/g) === true) {
    //   return false;
    // } else {
    //   console.log("FUCKING WORK DAMNIT");
    // }
  }
}
