const morseCodeObject = {
   'A':'.-', 
   'B':'-...',
  'C':'-.-.', 
  'D':'-..', 
  'E':'.',
  'F':'..-.', 
  'G':'--.', 
  'H':'....',
  'I':'..', 
  'J':'.---', 
  'K':'-.-',
  'L':'.-..', 
  'M':'--', 
  'N':'-.',
  'O':'---', 
  'P':'.--.', 
  'Q':'--.-',
  'R':'.-.', 
  'S':'...', 
  'T':'-',
  'U':'..-', 
  'V':'...-', 
  'W':'.--',
  'X':'-..-', 
  'Y':'-.--', 
  'Z':'--..',
  '1':'.----', 
  '2':'..---', 
  '3':'...--',
  '4':'....-', 
  '5':'.....', 
  '6':'-....',
  '7':'--...', 
  '8':'---..', 
  '9':'----.',
  '0':'-----', 
  ', ':'--..--', 
  '.':'.-.-.-',
  '?':'..--..', 
  '/':'-..-.', 
  '-':'-....-',
  '(':'-.--.', 
  ')':'-.--.-',
};

const decodeMorsecode = (morseCode) => {
  try {
    const splitForSpaces = morseCode.split('  ');
    const splitForWords = splitForSpaces.map((words) => words.split(' '));
    // const charactersMap = splitForWords.
    const charactersMap = splitForWords.map((words) => {
      return words.map((char) => {
        return Object.entries(morseCodeObject).map((morseChar) => {
          if (morseChar[1] === char) {
            return morseChar[0]
          }
        }).filter((notUnd) => notUnd);
      });
    });
    const joinWords = charactersMap.map((joinWords) => joinWords.join(''));
    joinWords.forEach((words) => {
      console.log();
      if (words.includes('??')) {
        throw 'String is invalid';
      }
    });
    return joinWords.join(' ');
  } catch (err) {
    console.log(err);
  }
};

// const decoded = decodeMorsecode("..--.. ..--.. --");

const decoded = decodeMorsecode(".-- --- .-. -..   .-- --- .-. -..");
console.log(decoded);