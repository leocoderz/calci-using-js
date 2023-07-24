// Get references to the input field and result display span
const num1Input = document.getElementById("num1");
const resultDisplay = document.getElementById("demo");

// Function to add two numbers
function add() {
    const num1 = parseFloat(num1Input.value);
    const result = num1 + parseFloat(resultDisplay.textContent || 0);
    resultDisplay.textContent = result;
}

// Function to subtract two numbers
function sub() {
    const num1 = parseFloat(num1Input.value);
    const result = parseFloat(resultDisplay.textContent || 0) - num1;
    resultDisplay.textContent = result;
}

// Function to multiply two numbers
function mul() {
    const num1 = parseFloat(num1Input.value);
    const result = num1 * (parseFloat(resultDisplay.textContent || 0));
    resultDisplay.textContent = result;
}

// Function to divide two numbers
function div() {
    const num1 = parseFloat(num1Input.value);
    const result = parseFloat(resultDisplay.textContent || 0) / num1;
    resultDisplay.textContent = result;
}

// Function to calculate the result of the expression
function equals() {
    try {
        resultDisplay.textContent = eval(resultDisplay.textContent);
    } catch (error) {
        resultDisplay.textContent = "Error";
    }
}
