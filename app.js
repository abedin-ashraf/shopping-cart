function updateItemNumber(id1, id2, isIncreasing) {
    const caseInput = document.getElementById(id1);
    var caseNumber = caseInput.value;

    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else {
        if (parseInt(caseNumber) > 0) {
            caseNumber = parseInt(caseNumber) - 1;
        }
    }

    caseInput.value = caseNumber;

    //Update totatl
    const caseTotal = document.getElementById(id2);
    var casePrice;
    if (id2 == 'phone-total') {
        casePrice = 1219;
    }
    else {
        casePrice = 59;
    }
    caseTotal.innerText = parseInt(caseNumber) * casePrice;
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