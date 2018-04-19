class Checker {

  constructor(x) {
    this.x = x;
  }

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
  }

  // syllableChecker(object) {
  //
  // }
}

export {Checker};
