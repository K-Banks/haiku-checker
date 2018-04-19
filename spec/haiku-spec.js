import {Checker} from './../src/checker.js';
import {Haiku} from './../src/haiku.js';

describe('Haiku', function() {

  it('should convert all three lines of submitted haiku into one array', function() {
    let haikuInput = new Haiku("this is line 1", "this is line 2", "this is line 3");
    expect(haikuInput.arrayConversion()).toEqual([["this", "is", "line", "1"],["this", "is", "line", "2"],["this", "is", "line", "3"]]);
  });

  it('should check that all characters used are letters', function () {
    let haikuInput = new Haiku("this is line 1", "this is line 2", "this is line 3");
    const checker = new Checker();
    expect(checker.characterChecker(haikuInput)).toEqual(false);
  });

  it('should verify that lines one and three have five syllables each', function() {
    let haikuInput = new Haiku("I don't evean knoow wheerp that came from", "this one is correct you know", "this is also a failure");
    const checker = new Checker();
    haikuInput.arrayConversion();
    expect(checker.syllableChecker(haikuInput)).toEqual(false);
  });
});
