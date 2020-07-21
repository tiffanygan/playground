const calculateBtn = document.getElementById('calculate-btn')
const result = document.getElementById('result-form');
const loanAmount = document.getElementById('loan-amount');
const annualIntrest = document.getElementById('annual-intrest');
const numYears = document.getElementById('num-years');
const monthlyPayment = document.getElementById('monthly-payment');
const totPayment = document.getElementById('tot-payment');
const totIntrest = document.getElementById('tot-intrest');
const loader = document.getElementById('image');
const error = document.getElementById('error');
const clrBtn = document.getElementById('clr-btn');

function calculateResults() {
    loader.style.display = 'block';
    result.style.display = 'none';
    setTimeout(afterShowingLoader, 1000);
}

function afterShowingLoader() {
    loader.style.display = 'none'
    result.style.display = 'block';
    if (!loanAmount.value) {
        error.style.display = 'block';
        result.style.display = 'none';
        setTimeout(afterShowingError, 2000);
    } else {
        totPayment.value = (parseFloat(loanAmount.value) * Math.pow(1 + parseFloat(annualIntrest.value) / 100, parseFloat(numYears.value))).toFixed(2);
        monthlyPayment.value = (parseFloat(totPayment.value) / (12 * parseFloat(numYears.value))).toFixed(2);
        totIntrest.value = (parseFloat(totPayment.value) - parseFloat(loanAmount.value)).toFixed(2);
    }
}

function afterShowingError() {
    error.style.display = 'none';
}

function resetValues() {
    loanAmount.value = '';
    annualIntrest.value = '';
    numYears.value = '';
    result.style.display = 'none';
}

calculateBtn.addEventListener('click', calculateResults);
clrBtn.addEventListener('click', resetValues);