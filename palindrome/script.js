const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");

checkButton.addEventListener("click", () => {
    const input = textInput.value.replace(/[^0-9a-z]/gi, '').toLowerCase();
    if (input === "") {
        alert("Please input a value");
    }
    const isPalindrome = input === reverseInput(input) ? result.textContent = `${textInput.value} is a palindrome` : result.textContent = `${textInput.value} is not a palindrome`;
});

const reverseInput = (input) => {
    const reversedInput = input.split("").reduce((acc, char) => char + acc, "");
    return reversedInput;
}