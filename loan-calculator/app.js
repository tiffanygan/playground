const calculateBtn = document.getElementById('calculate-btn')
const result = document.getElementById('result-form');
const loanAmount = document.getElementById('loan-amount');
const annualIntrest = document.getElementById('annual-intrest');
const numYears = document.getElementById('num-years');
const monthlyPayment = document.getElementById('monthly-payment');
const totPayment = document.getElementById('tot-payment');
const totIntrest = document.getElementById('tot-intrest');

function calculateResults(e) {
    e.preventDefault();
    result.style.display = 'block';
    monthlyPayment.value = loanAmount.value * Math.pow(1 + annualIntrest.value / 100, numYears.value) / 12 * numYears.value;
    totPayment.value = loanAmount.value * Math.pow(1 + annualIntrest.value / 100, numYears.value);
    totIntrest.value = totPayment.value - loanAmount.value;
}

calculateBtn.addEventListener('click', calculateResults);