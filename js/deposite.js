// Step: 1 add event listener to the deposite button
document.getElementById('btn-deposite').addEventListener('click', function () {
    // console.log('deposite button clicked')
    // Step: 2 get the deposite amount from the deposite input field
    // for input field use .value to get the value of an input filed
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString)
    // console.log(typeof newDepositeAmount);
    // Step: 3 get the current deposite total
    const depositeTotalElement = document.getElementById('deposite-total');
    // for non-input( element other than input, text area) use innerText to get the text
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat( previousDepositeTotalString);
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount ;
    console.log(typeof previousDepositeTotal)
    
    depositeTotalElement.innerText = currentDepositeTotal;

    // Step: 7 Clear the deposite field
    depositeField.value = ''
})