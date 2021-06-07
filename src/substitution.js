// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //If alphabet is blank then return false
    if (!alphabet) return false;

    //Make sure alphabet array is length of 26
    if (alphabet.length !== 26) return false;

    //Make sure all characters in alphabet string are unique
    var obj = {};
    for (var z = 0; z < alphabet.length; ++z) {
      var ch = alphabet[z];
      if (obj[ch]) return false;
      obj[ch] = true;
    }

    // Make alphabet into an array
    const alphabetArray = Array.from(alphabet);
    let decoderArray = [];
    let j = 97;

    //Loop through newArray to create array of 'decoder' objects with keys of character and value
    for (let i = 0; i < 26; i++) {
      let decoder = {};
      decoder.charCode = j;
      decoder.value = alphabetArray[i];
      decoderArray.push(decoder);
      j++;
    }

    //Break input into array and create results array
    const inputArray = Array.from(input.toLowerCase());
    let resultsArray = [];

    //If encode is true then encode otherwise decode
    if (encode) {
      //Encode
      //Loop through array and replace with code symbol
      for (let i = 0; i < inputArray.length; i++) {
        let inputCharValue = inputArray[i].charCodeAt(0);
        //If character is a letter then transform it, else just put in array
        if (inputCharValue > 96 && inputCharValue < 123) {
          let found = decoderArray.find(
            (object) => object.charCode === inputCharValue
          );

          resultsArray[i] = found.value;
        } else {
          resultsArray[i] = inputArray[i];
        }
      }
    } else {
      //Decode
      //Loop through array and replace code symbol with decoded letter
      for (let i = 0; i < inputArray.length; i++) {
        let inputCharValue = inputArray[i].charCodeAt(0);

        let found = decoderArray.find(
          (object) => object.value === inputArray[i]
        );
        //If the character isn't found in the decoder then just return it, otherwise, use 'found'
        if (found === undefined) {
          resultsArray[i] = inputArray[i];
        } else {
          resultsArray[i] = String.fromCharCode(found.charCode);
        }
      }
    }
    return resultsArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
