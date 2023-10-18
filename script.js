document.addEventListener('DOMContentLoaded', function () {

    const contentLabel = document.getElementById('content');
    const numberButtons = document.querySelectorAll('.number');
    const operatorButtons = document.querySelectorAll('.operator');
    const equalButton = document.getElementById('equal');
    const clearButton = document.getElementById('clear');

    let currentInput = '';
    let currentOperator = '';
    let calculationHistory = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', function () {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (currentInput !== '') {
                if (currentOperator !== '') {
                    performCalculation();
                } else {
                    calculationHistory = currentInput;
                }
                currentInput = '';
                currentOperator = button.textContent;
                updateDisplay();
            }
        });
    });

    equalButton.addEventListener('click', function () {
        if (currentInput !== '' && currentOperator !== '') {
            performCalculation();
            currentOperator = '';
            updateDisplay();
        }
    });

    clearButton.addEventListener('click', function () {
        clearCalculator();
        updateDisplay();
    });

    function performCalculation() {
        switch (currentOperator) {
            case '+':
                currentInput = String(parseFloat(calculationHistory) + parseFloat(currentInput));
                break;
            case '-':
                currentInput = String(parseFloat(calculationHistory) - parseFloat(currentInput));
                break;
            case 'x':
                currentInput = String(parseFloat(calculationHistory) * parseFloat(currentInput));
                break;
            case '/':
                currentInput = String(parseFloat(calculationHistory) / parseFloat(currentInput));
                break;
            default:
                break;
        }
        calculationHistory = currentInput;
    }

    function clearCalculator() {
        currentInput = '';
        currentOperator = '';
        calculationHistory = '';
    }

    function updateDisplay() {
        contentLabel.textContent = currentInput !== '' ? currentInput : calculationHistory;
    }
});