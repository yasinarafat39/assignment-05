
function setListItem(elementId){
    const nameElement = document.getElementById(elementId);
    const name = nameElement.innerText;

    const ol = document.getElementById('orderate-list');

    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('itim', 'player');
    ol.appendChild(li);
    
}


function setDisabledAttribute(elementId){
    const button = document.getElementById(elementId);
    button.setAttribute('disabled', true);
    button.style.backgroundColor = '#A2A9AF';
}


function chackPlayerLength(playerCalss){
    const players = document.getElementsByClassName(playerCalss);

    if(players.length > 4){
        alert("You can't select more than five players. Thank You !");
        return;
    }
    
}


// Calculate section 

function getInputFieldAmount(elementId){
    const inputFieldElement = document.getElementById(elementId);
    const inputFieldAmountString = inputFieldElement.value;
    const inputFieldAmount = parseFloat(inputFieldAmountString);
    inputFieldElement.value = '';
    return inputFieldAmount;
}


function getTextFieldAmount(elementId){
    const textFieldElement = document.getElementById(elementId);
    const textFieldAmountString = textFieldElement.innerText;
    const textFieldAmount = parseFloat(textFieldAmountString);
    return textFieldAmount;
}