var operator = null;
var inputValueMemo = 0;




function getContentClick(event) {
    const value = event.target.innerHTML;
    filterAction(value)
}




const filterAction = value => {
    value === "0" ? addNumberInput(0) : null;
    value === "1" ? addNumberInput(1) : null;
    value === "2" ? addNumberInput(2) : null;
    value === "3" ? addNumberInput(3) : null;
    value === "4" ? addNumberInput(4) : null;
    value === "5" ? addNumberInput(5) : null;
    value === "6" ? addNumberInput(6) : null;
    value === "7" ? addNumberInput(7) : null;
    value === "8" ? addNumberInput(8) : null;
    value === "9" ? addNumberInput(9) : null;
    value === "," ? addNumberInput(",") : null;

    value === "+" ? setOperation("+") : null;
    value === "-" ? setOperation("-") : null;
    value === "%" ? setOperation("%") : null;
    value === "+/-" ? setOperation("+/-") : null;
    value === "/" ? setOperation("/") : null;
    value === "x" ? setOperation("*") : null;

    value === "AC" ? resetCalculation("AC") : null;
    value === "=" ? calculation("=") : null;

}




function addNumberInput(value) {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    // guardar el valor
    const inputValue = inputScreen.value;

    // quitar el cero
    if (inputValue === "0" && inputValue.length === 1 && value !== ",") {
        inputScreen.value = value;
        return;
    }

    // agrega cero en el decimal
    if (inputScreen.value === "" && value === ",") {
        inputScreen.value = 0 + value;
        return;
    }

    // agregar el valor al input
    inputScreen.value = inputValue + value;
}




function setOperation(operator) {
    const inputScreenValue = document.getElementsByClassName("calculator__screen")[0].value;
    this.operator = operator;

    if (inputScreenValue != 0) {
        calculation();
    }

}




function calculation() {
    const inputScreen = document.getElementsByClassName("calculator__screen")[0];
    let valorOne = transformCommaToPoint(this.inputValueMemo);
    let valorTwo = transformCommaToPoint(inputScreen.value);
    let total = 0;

    if (this.operator === "+" && inputScreen !== "") {
        total = valorOne + valorTwo;
    }

    if (this.operator === "-" && inputScreen !== "") {
        if (valorOne !== 0) {
            total = valorOne - valorTwo;
        } else {
            total = valorTwo
        }
    }

    if (this.operator === "*" && inputScreen !== "") {
        if (valorOne !== 0) {
            total = valorOne * valorTwo;
        } else {
            total = valorTwo
        }
    }

    if (this.operator === "/" && inputScreen !== "") {
        if (valorOne !== 0) {
            total = valorOne / valorTwo;
        } else {
            total = valorTwo
        }
    }

    if (this.operator === "%" && inputScreen !== "") {
        total = valorTwo / 100;
    }

    if (this.operator === "+/-" && inputScreen !== "") {
        if (valorTwo > 0) {
            total = -valorTwo;
        }
    }




    total = transformPointToComma(total);
    this.inputValueMemo = total;
    inputScreen.value = "";
    inputScreen.placeholder = total;
}



function transformCommaToPoint(value) {
    if (typeof value !== "number") {
        let resultTransform = value.replace(',', '.');
        return parseFloat(resultTransform)
    }
    return value;
}



function transformPointToComma(value) {
    let resultTransform = value.toString();
    resultTransform = resultTransform.replace('.', ',');
    return resultTransform;
}



const resetCalculation = () => {
    let inputScreen = document.getElementsByClassName("calculator__screen")[0];
    inputScreen.value = 0;
    this.inputValueMemo = 0;
    this.operator = null;
}
