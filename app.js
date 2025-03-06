document.addEventListener("DOMContentLoaded", function(){

const amount = document.querySelector("#amount");
const term = document.querySelector("#term");
const rate = document.querySelector("#rate");
const inactive = document.querySelector(".inactive");
const active = document.querySelector(".active");
const monthlyAmount = document.querySelector(".monthly-amount");
const totalAmount = document.querySelector(".total-amount");
const repayment = document.querySelector("#repayment");
const interest = document.querySelector("#interest");
const clearAll = document.querySelector("#clearAll");
const mortgageForm = document.getElementsByTagName("mortgageform");


mortgageForm.addEventListener("submit", function(e){
   e.preventDefault();
   const loanAmount = parseFloat(amount.value);
    const loanTermMonths = parseFloat(term.value) * 12;
     const monthlyRate = parseFloat(rate.value) / 100 / 12;
       

 const mortgageType = document.querySelector('input[name="type"]:
checked').value;

        let monthlyPayment, totalPayment;

        if (mortgageType === "repayment") {
            const factor = Math.pow(1 + monthlyRate, loanTermMonths);
            monthlyPayment = loanAmount * (monthlyRate * factor) / (factor - 1);
            totalPayment = monthlyPayment * loanTermMonths;
}
        else {
            monthlyPayment = loanAmount *    monthlyRate;

            totalPayment = monthlyPayment * loanTermMonths;
 }

        monthlyAmount.textContent = `$${monthlyPayment.toFixed(2)}`;
        totalRepayment.textContent = `$${totalPayment.toFixed(2)}`;
    });

    clearAll.addEventListener("click", () => {
        form.reset();
        monthlyRepayment.textContent = "$0.00";
        totalRepayment.textContent = "$0.00";

});

});