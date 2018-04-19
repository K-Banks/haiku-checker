class Checker {
  characterChecker(haiku) {
    const arrayToCheck = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let x = true;
    arrayToCheck.forEach(function(character) {
      if (haiku.line1.includes(character) === true) {
        x = false;
      }
      if (haiku.line2.includes(character) === true) {
        x = false;
      }
      if (haiku.line3.includes(character) === true) {
        x = false;
      }
    });
    return x;
  }

  syllableChecker(haiku) {
    const regEx  = new RegExp('[aeiouy]');
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (var b = 0; b < 3; b++) {
      let syllables = [];
      haiku.array[b].forEach(function(word){
        let length = word.length-1;
        if (word[length] === 'e') {
          word = word.replace(word[length], "x");
        }
        if (word.length === 1) {
          syllables.push(word);
        } else {
          for (var i = 0; i < word.length; i++) {
            vowels.forEach(function(vowel) {
              if (word[i] === vowel && word[i+1] !== undefined) {
                let testLetter = word[i+1];
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
        }
      });
      if (syllables.length !== 5 && b === 0 || b === 2 && syllables.length !== 5 || b === 1 && syllables.length !== 7) {
        return false;
      } else {
        return true;
      }
    }
  }
}

export {Checker};
