const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const reference = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
];

const convertToRomanNumeral = (number) => {
  const result = [];
  reference.forEach(function (arr) {
    while (number >= arr[1]) {
      result.push(arr[0]);
      num -= arr[1];
    }
  })
  return result.join('');
} 

convertBtn.addEventListener("click", () => {
  const input = parseInt(inputNumber.value);
  console.log(inputNumber.value);

  if (!input) {
    result.innerText = "Please enter a valid number";
  } else if (input <= 0) {
    result.innerText = "Please enter a number greater than or equal to 1";
  } else if (input >= 4000) {
    result.innerText = "Please enter a number less than or equal to 3999";
  } else {
    result.innerText = convertToRomanNumeral(input);
  }
});