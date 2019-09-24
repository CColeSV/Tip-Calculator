const bill = document.getElementById('bill');
const tip = document.getElementById('tip');
const people = document.getElementById('people');
const button = document.getElementById('button');
const form = document.getElementById('form-container');

const buttonClickEvent = function(e) {
    e.preventDefault();
    console.log(e);
    let pElement = document.getElementById("finalTipAmount");
    console.log(pElement);
    console.log("click");
    let tipAmount = bill.value * (tip.value / 100);
    console.log("tipAmount", tipAmount);

    let finalTipAmount = tipAmount / people.value; 
    
    if(pElement == null) {
        pElement = document.createElement('p');
        pElement.setAttribute("id", "finalTipAmount");
    }

    pElement.innerHTML = finalTipAmount;
    form.insertBefore(pElement, button);
}



button.addEventListener("click", buttonClickEvent)

/**
 * Use percentage of number entered in tip field and calculate against bill
 * total of tip / number of people
 */