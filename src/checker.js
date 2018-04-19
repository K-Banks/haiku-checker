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
    const regEx  = new RegExp('[aeiouy]');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    haiku.array[0].forEach(function(word){
      let length = word.length-1;
      if (word[length] === 'e') {
        word = word.replace(word[length], "x");
        console.log(word);
      }
      if (word.length === 1) {
        syllables.push(word);
      } else {
        for (var i = 0; i < word.length; i++) {
          vowels.forEach(function(vowel) {
            if (word[i] === vowel && word[i+1] !== undefined) {
              console.log(word[i]);
              console.log(word[i+1]);
              let testLetter = word[i+1];
              console.log(testLetter);
              let tester = testLetter.match(regEx);
              if (tester === null) {
                let syllable = word.slice(i);
                syllables.push(syllable);
              }
            } else if (word[i] === vowel) {
              let syllable = word.slice(i);
              syllables.push(syllable);
            }
          });
        }
        console.log(syllables);
      }
    });
    if (syllables.length !== 5) {
      return false;
    }
  }
}

export {Checker};

// && ("[aeiouy]([^aieouy]|$)", 'gim')
// if (word[length] === 'e') {
//   syllables.push(0);
// } else
