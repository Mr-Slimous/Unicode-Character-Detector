// Get references to DOM elements
const userInp = document.querySelector(".userInp");
const btn = document.querySelector(".detect");
const result = document.querySelector(".result");

// Function to check if a character is an ASCII character
// charCodeAt() returns the Unicode code point of the character
// The function returns true if the code point is between 0 and 127 (inclusive)
function isASCII(char) {
    const codePoint = char.charCodeAt();
    return codePoint >= 0 && codePoint <= 127;
}

// Main function to check if all characters in the input are ASCII
function checker() {
    // Get user input, trim whitespace, and split into an array of characters
    const converter = userInp.value.trim().split("");
    let forTest = 0;

    // Iterate through each character in the array
    for (let i = 0; i < converter.length; i++) {
        // Check if the current character is an ASCII character using the isASCII function
        if (isASCII(converter[i])) {
            forTest++;
        }
    }

    // Update the result based on the count of ASCII characters
    result.textContent = (converter.length === forTest)
        ? "Yes, all elements are ASCII code"
        : "No, all elements or one are not ASCII code";
}

// Add click event listener to the button
btn.addEventListener('click', checker);











