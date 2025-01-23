"use strict";
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let times = document.querySelector('#times');
let divide = document.querySelector('#divide');
let resultBtn = document.querySelector('.result');
let total = document.querySelector(".total");
let inp1 = document.querySelector(".num1");
let inp2 = document.querySelector(".num2");
let operator = "+";
let operatorBtns = document.querySelectorAll("#operator_btns button");
if (operatorBtns) {
    operatorBtns.forEach(btn => {
        btn.onclick = () => {
            operator = btn.value;
        };
    });
}
if (resultBtn) {
    resultBtn.onclick = () => {
        if (inp1 && inp2 && total) {
            let num1 = parseFloat(inp1.value);
            let num2 = parseFloat(inp2.value);
            let result = 0;
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "x":
                    result = num1 * num2;
                    break;
                case ":":
                    if (num2 === 0) {
                        total.innerHTML = "";
                    }
                    result = num1 / num2;
                    break;
                default:
                    total.innerText = "Error2";
            }
            total.innerHTML = result.toString();
        }
    };
}
console.log(operatorBtns);
console.log(operator);
