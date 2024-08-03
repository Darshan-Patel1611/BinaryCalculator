function addToDisplay(val) {
    var display = document.getElementById("display");
    display.value += val;
}
function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
    document.getElementById("toDecimal").innerHTML = "";
}

function calculate() {
    var display = document.getElementById("display");
    var input = display.value;
    var result;

    //splitting the input by operator
    var numbers = input.split(/[+\-*/]/);
    var operator = input.replace(numbers[0], "").replace(numbers[1], "");

    //converting strings to binary
    var num1 = parseInt(numbers[0], 2);
    var num2 = parseInt(numbers[1], 2);

    //checking the operator and performing the corresponding operation
    switch (operator) {
        case "+":
            result = (num1 + num2).toString(2);
            var decimalNumber = parseInt(result, 2);
            document.getElementById("toDecimal").innerHTML = decimalNumber;
            break;
        case "-":
            result = (num1 - num2).toString(2);
            var decimalNumber = parseInt(result, 2);
            document.getElementById("toDecimal").innerHTML = decimalNumber;
            break;
        case "*":
            result = (num1 * num2).toString(2);
            var decimalNumber = parseInt(result, 2);
            document.getElementById("toDecimal").innerHTML = decimalNumber;
            break;
        case "/":
            result = (num1 / num2).toString(2);
            var decimalNumber = parseInt(result, 2);
            document.getElementById("toDecimal").innerHTML = decimalNumber;
            break;
        default:
            result = "Invalid operator";
            var decimalNumber = parseInt(result, 2);
            document.getElementById("toDecimal").innerHTML = decimalNumber;
    }
    display.value = result;
    //local storage with key = previousCalculation
    //local storage store the current input and the result 
    localStorage.setItem("previousCalculation", input + " = " + result);
    var previousCalculation = localStorage.getItem("previousCalculation");
    document.getElementById("previousCalculation").innerHTML = previousCalculation;
}