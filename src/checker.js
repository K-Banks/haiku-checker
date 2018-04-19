class Checker {


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

  syllableChecker(haiku) {
    let syllables = [];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    haiku.array[0].forEach(function(word){
      for (var i = 0; i < word.length; i++) {
        vowels.forEach(function(vowel) {
          if (word[i] === vowel) {
            let syllable = word.slice(i);
            syllables.push(syllable);
            console.log(syllable);
            console.log(syllables);
          }
        });
      }
    });
    if (syllables.length !== 5) {
      return false;
    }
  }
}

export {Checker};
