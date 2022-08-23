
function setListItemById(elementId) {
    const nameElement = document.getElementById(elementId);
    const name = nameElement.innerText;

    const ol = document.getElementById('orderate-list');

    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('itim', 'player');
    ol.appendChild(li);

}


function setDisabledAttribute(elementId) {
    const button = document.getElementById(elementId);
    button.setAttribute('disabled', true);
    button.style.backgroundColor = '#A2A9AF';
}



// Calculate section 

function getInputFieldAmountById(elementId) {
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldAmountString = inputFieldElement.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputFieldElement.value = '';
    return inputFieldAmount;
}


function getTextAmountById(elementId) {
    const textFieldElement = document.getElementById(elementId);
    const textFieldAmountString = textFieldElement.innerText;
    const textFieldAmount = parseFloat(textFieldAmountString);
    return textFieldAmount;
}


function setTextFieldAmountById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
}


// Check input Field 
function checkInputFieldById(inputFieldId) {

    document.getElementById(inputFieldId).addEventListener('keyup', function () {
        const inputFieldElement = document.getElementById(inputFieldId);
        const inputFieldValue = document.getElementById(inputFieldId).value;
        if (isNaN(inputFieldValue) && inputFieldValue === '') {
            console.log(inputFieldValue);
            alert('please enter a valid number.');
            inputFieldElement.value = '';
        }
         
    })
}
