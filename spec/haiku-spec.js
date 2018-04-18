import {Haiku} from './../src/main.js';

describe('Haiku', function() {

  it('should convert all three lines of submitted haiku into one array', function() {
    let haikuInput = new Haiku("this is line 1", "this is line 2", "this is line 3");
    expect(haikuInput.arrayConversion()).toEqual([["this", "is", "line", "1"],["this", "is", "line", "2"],["this", "is", "line", "3"]]);
  });

  it('should check that all characters used are letters', function () {
    let haikuInput = new Haiku("this is line 1", "this is line 2", "this is line 3");
    expect(haikuInput.characterChecker(haikuInput)).toEqual(false);
  });

  it('should verify that lines one and three have five syllables each', function() {
    let haikuInput = new Haiku("I don't even know where that came from", "this one is correct you know", "this is also a failure");
    haikuInput.arrayConversion();
    expect(haikuInput.syllableChecker(haikuInput)).toEqual(false);
  });
});
