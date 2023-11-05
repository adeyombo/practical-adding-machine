const numbersInput = document.querySelector("#numbers");
const getSumBtn = document.querySelector("#get-sum-btn");
const total = document.querySelector("#sum");

function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

getSumBtn.onclick = (e) => {
    e.preventDefault();

    const numbers = numbersInput.value.split("\n").map(n => n.replace(/,/g, "")).filter(n => isNumeric(n)).map(n => Number(n));

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    total.value = sum.toFixed(2);
}