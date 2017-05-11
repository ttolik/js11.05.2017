do {
    var firstNumber = +prompt("Enter first number");
    var secondNumber = +prompt("Enter second number");
    var operation = prompt("What do you want to do with this numbers +, -, /, *");
    var result;


    switch (operation) {
        case "+": {
            result = firstNumber + secondNumber;
            break;
        }
        case "-": {
            result = firstNumber - secondNumber;
            break;
        }
        case "/": {
            result = firstNumber / secondNumber;
            break;
        }
        case "*": {
            result = firstNumber * secondNumber;
            break;
        }

        default: {
            alert("Wrong Operation");
            break;
        }

    }
    console.log(result);

    var question = confirm("You wanna continue ?");
} while (question)