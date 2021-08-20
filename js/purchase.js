function getValue(idName){
    return parseFloat(document.getElementById(idName).innerText);
}


// check pomo code validation
function pomoCheck(){
    const inputValueField = document.getElementById('pomo-code');
    const inputValue = inputValueField.value;
    inputValueField.value = '';
    if(inputValue.toLowerCase() == 'stevekaku'){
        return true;
    }
    return false;
}

// adding discount to the price
function addDiscount(){
    let totalCost = updateTotal();
    if(pomoCheck()){
        const voucherAdded = totalCost / 10 * 2;
        totalCost = totalCost - voucherAdded;
    }
    const totalCoastField = document.getElementById('total-cost');
    totalCoastField.innerText = totalCost;

}

// update the total price
function updateTotal(){
    const totalCostField = document.getElementById('total-price');
    const total = getValue('base-price') + getValue('extra-memory-cost') + getValue('extra-storage-cost') + getValue('extra-delivery-cost');
    totalCostField.innerText = total;

    const totalCoastField = document.getElementById('total-cost');
    totalCoastField.innerText = total;
    return total;
}

// set the value of costing
function getConfiguration(value, inputField){
    const memoryCostField = document.getElementById(inputField);
    const memoryCost = value;
    memoryCostField.innerText = memoryCost;
    updateTotal();
    
}


// event handler added to the button
document.getElementById('memory-8gb').addEventListener('click', ()=>{
    getConfiguration(0, 'extra-memory-cost');
})

document.getElementById('memory-16gb').addEventListener('click', ()=>{
    getConfiguration(180, 'extra-memory-cost');
})
document.getElementById('storage-256gb').addEventListener('click', ()=>{
    getConfiguration(0, "extra-storage-cost");
})

document.getElementById('storage-512gb').addEventListener('click', ()=>{
    getConfiguration(100,"extra-storage-cost");
})
document.getElementById('storage-1tb').addEventListener('click', ()=>{
    getConfiguration(180,"extra-storage-cost");
})

document.getElementById('delivery-normal').addEventListener('click', ()=>{
    getConfiguration(0,'extra-delivery-cost');
})

document.getElementById('delivery-urgent').addEventListener('click', ()=>{
    getConfiguration(20,'extra-delivery-cost');
})

document.getElementById('pomo-btn').addEventListener('click', ()=>{
    addDiscount()
})

