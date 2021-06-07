// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //if shift is less than -25 or greater than 25 or equal to zero then return false
    if (shift < -25 || shift > 25 || shift === 0) return false;

    //If it is decoding then multiply shift by -1
    if (encode === false) {
      shift = shift * -1;
    }
    //Create array for output
    let transformedArray = [];

    //convert input to lowercase and then put into an array
    let string = input.toLowerCase();

    let starterArray = Array.from(string);

    //Loop through array of characters and output transformed character into transformedArray
    for (let i = 0; i < starterArray.length; i++) {
      currentNumber = starterArray[i].charCodeAt(0);
      //If character is a letter, transform it
      if (currentNumber > 96 && currentNumber < 123) {
        let newNumber = currentNumber + shift;
        //This if statement determines whether to loop around the alphabet or use the letter as is
        if (newNumber > 122) {
          newNumber = 97 + (newNumber - 123);
          transformedArray[i] = String.fromCharCode(newNumber);
        } else if (newNumber < 97) {
          newNumber = 123 - (97 - newNumber);
          transformedArray[i] = String.fromCharCode(newNumber);
        } else {
          transformedArray[i] = String.fromCharCode(newNumber);
        }
      } else {
        //If not a letter, use the symbol, number, etc.
        transformedArray[i] = String.fromCharCode(currentNumber);
      }
    }

    return transformedArray.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
