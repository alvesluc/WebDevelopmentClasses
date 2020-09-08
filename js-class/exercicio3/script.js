let calculator_buttons = [
    {
        name: "delete",
        symbol: "⌫",
        formula: false,
        type: "key"
    }, {
        name: "clear",
        symbol: "C",
        formula: false,
        type: "key"
    }, {
        name: "percent",
        symbol: "%",
        formula: "/100",
        type: "number"
    }, {
        name: "division",
        symbol: "÷",
        formula: "/",
        type: "operator"
    }, {
        name: "7",
        symbol: 7,
        formula: 7,
        type: "number"
    }, {
        name: "8",
        symbol: 8,
        formula: 8,
        type: "number"
    }, {
        name: "9",
        symbol: 9,
        formula: 9,
        type: "number"
    }, {
        name: "multiplication",
        symbol: "×",
        formula: "*",
        type: "operator"
    }, {
        name: "4",
        symbol: 4,
        formula: 4,
        type: "number"
    }, {
        name: "5",
        symbol: 5,
        formula: 5,
        type: "number"
    }, {
        name: "6",
        symbol: 6,
        formula: 6,
        type: "number"
    }, {
        name: "addition",
        symbol: "+",
        formula: "+",
        type: "operator"
    }, , {
        name: "1",
        symbol: 1,
        formula: 1,
        type: "number"
    }, {
        name: "2",
        symbol: 2,
        formula: 2,
        type: "number"
    }, {
        name: "3",
        symbol: 3,
        formula: 3,
        type: "number"
    }, {
        name: "subtraction",
        symbol: "–",
        formula: "-",
        type: "operator"
    }, {
        name: "0",
        symbol: 0,
        formula: 0,
        type: "number"
    }, {
        name: "comma",
        symbol: ".",
        formula: ".",
        type: "number"
    }, {
        name: "calculate",
        symbol: "=",
        formula: "=",
        type: "calculate"
    }
];

let data = {
    operation: [],
    result: [],
}

const time_element = document.querySelector(".operation .time-now");
const input_element = document.querySelector(".input");
const output_result_element = document.querySelector(".result .value");
const output_operation_element = document.querySelector(".operation .value");

function createButtons() {
    const buttons_per_row = 4;
    let added_buttons = 0;

    calculator_buttons.forEach(button => {
        if (added_buttons % buttons_per_row == 0) {
            input_element.innerHTML += `<div class="row"></div>`;
        }

        const row = document.querySelector(".row:last-child");

        row.innerHTML += `<button id="${button.name}">
                                ${button.symbol}
                            </button>`;
        added_buttons++;
    });
}

createButtons();

input_element.addEventListener("click", event => {
    const target_button = event.target;

    calculator_buttons.forEach(button => {
        if (button.name == target_button.id) calculator(button);
    });
});

function pushData(button) {
    data.operation.push(button.symbol);
    data.result.push(button.formula);
}

function popData() {
    data.operation.pop();
    data.result.pop();
}

function clearData() {
    data.operation = [];
    data.result = [];
    updateOutputResult(0);
}

function calculate() {
    let result_joined = data.result.join('');

    clearData();

    let result_final;
    try {
        result_final = eval(result_joined);
    } catch (error) {
        if (error instanceof SyntaxError) {
            result_final = "Syntax Error!"
            updateOutputResult(result_final);
            return;
        }
    }

    result_final = formatResult(result_final);

    data.operation.push(result_final);
    data.result.push(result_final);

    updateOutputResult(result_final);
}

function calculator(button) {
    switch (button.type) {
        case "operator":
            pushData(button);
            break;
        case "number":
            pushData(button);
            break;
        case "key":
            if (button.name == "clear") {
                clearData();
            } else if (button.name == "delete") {
                popData();
            }
            break;
        case "calculate":
            calculate();
            break;
        default:
            break;
    }
    updateOutputOperation(data.operation.join(''));
}

function updateOutputOperation(operation) {
    output_operation_element.innerHTML = operation;
}

function updateOutputResult(result) {
    output_result_element.innerHTML = result;
}

function digitCounter(number) {
    number = "" + number;
    return number.toString().length;
}

function isFloat(number) {
    return number % 1 != 0;
}

const max_output_number_length = 10;
const output_precision = 5;

function formatResult(result) {
    if (digitCounter(result) > max_output_number_length) {
        if (isFloat(result)) {
            const result_int = parseInt(result);
            const result_int_length = digitCounter(result_int);

            if (result_int_length > max_output_number_length) {
                return result.toPrecision(output_precision);
            } else {
                const num_digits_after_point = max_output_number_length - result_int_length;
                return result.toFixed(num_digits_after_point);
            }
        } else {
            return result.toPrecision(output_precision);
        }
    } else {
        return result;
    }
}