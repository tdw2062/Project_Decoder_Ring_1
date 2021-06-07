// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //Create polybius
    polyGrid = [
      { letter: "a", value: "11" },
      { letter: "b", value: "21" },
      { letter: "c", value: "31" },
      { letter: "d", value: "41" },
      { letter: "e", value: "51" },
      { letter: "f", value: "12" },
      { letter: "g", value: "22" },
      { letter: "h", value: "32" },
      { letter: "i", value: "42" },
      { letter: "j", value: "42" },
      { letter: "k", value: "52" },
      { letter: "l", value: "13" },
      { letter: "m", value: "23" },
      { letter: "n", value: "33" },
      { letter: "o", value: "43" },
      { letter: "p", value: "53" },
      { letter: "q", value: "14" },
      { letter: "r", value: "24" },
      { letter: "s", value: "34" },
      { letter: "t", value: "44" },
      { letter: "u", value: "54" },
      { letter: "v", value: "15" },
      { letter: "w", value: "25" },
      { letter: "x", value: "35" },
      { letter: "y", value: "45" },
      { letter: "z", value: "55" },
    ];

    //Create a transformedArray for results
    let transformedArray = [];

    if (encode) {
      //convert input to lowercase and then put into an array
      let string = input.toLowerCase();

      let starterArray = Array.from(string);

      //Loop through array of characters and output transformed character into transformedArray
      for (let i = 0; i < starterArray.length; i++) {
        currentLetter = starterArray[i];
        //IF the currentLetter is not a space, then transform otherwise, use the space
        if (currentLetter !== " ") {
          //console.log(currentLetter);
          let found = polyGrid.find(
            (object) => object.letter === currentLetter
          );

          transformedArray[i] = found.value;
        } else {
          transformedArray.push(" ");
        }
      }
    } else {
      //Decode
      //convert input to lowercase and then put into an array
      let string = input.toLowerCase();
      //Remove spaces
      let stringTrimmed = string.split(" ").join("");
      //If length is odd number, return false
      if (stringTrimmed.length % 2 !== 0) return false;

      //Change polyGrid to have i/j character
      let newGrid1 = polyGrid.splice(0, 8);
      let newGrid2 = polyGrid.splice(2, 16);
      newGrid1.push({ letter: "(i/j)", value: "42" });
      let newGrid = [...newGrid1, ...newGrid2];

      //Decode with polyGrid
      for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) !== " ") {
          let poly = string.substring(i, i + 2);
          let found = newGrid.find((object) => object.value === poly);
          let polyChar = found.letter;
          transformedArray.push(polyChar);
          i++;
        } else {
          transformedArray.push(" ");
        }
      }
    }

    return transformedArray.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
