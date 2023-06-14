function updateItemNumber(id1, id2, isIncreasing) {
    const itemInput = document.getElementById(id1);
    var itemNumber = itemInput.value;

    if (isIncreasing == true) {
        itemNumber = parseInt(itemNumber) + 1;
    }
    else {
        if (parseInt(itemNumber) > 0) {
            itemNumber = parseInt(itemNumber) - 1;
        }
    }

    itemInput.value = itemNumber;

    //Update totatl
    const itemTotal = document.getElementById(id2);
    var itemPrice;
    if (id2 == 'phone-total') {
        itemPrice = 1219;
    }
    else {
        itemPrice = 59;
    }
    itemTotal.innerText = parseInt(itemNumber) * itemPrice;
    calculateTotal()

}
function getInputValue(id) {
    const itemInput = document.getElementById(id);
    const itemNumber = parseInt(itemInput.value);
    return itemNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone-number') * 1219;

    const caseTotal = getInputValue('case-number') * 59;

    const subtotalValue = phoneTotal + caseTotal;

    const subtotal = document.getElementById('subtotal');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    const taxTotalValue = (subtotalValue * .1);
    const totalValue = subtotalValue + parseFloat(taxTotalValue);

    //Update on HTML
    subtotal.innerText = subtotalValue;
    tax.innerText = (taxTotalValue).toFixed(2);
    total.innerText = (totalValue).toFixed(2);
}

//Phone Case Event
document.getElementById('phone-minus').addEventListener('click', function () {
    updateItemNumber('phone-number', 'phone-total', false);
})

document.getElementById('phone-plus').addEventListener('click', function () {
    updateItemNumber('phone-number', 'phone-total', true);
})


//Handle Case Event
document.getElementById('case-plus').addEventListener('click', function () {
    updateItemNumber('case-number', 'case-total', true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateItemNumber('case-number', 'case-total', false)



})