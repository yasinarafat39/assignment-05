
function setListItem(elementId){
    const nameElement = document.getElementById(elementId);
    const name = nameElement.innerText;

    const ol = document.getElementById('orderate-list');

    const li = document.createElement('li');
    li.innerText = name;
    li.classList.add('itim', 'player');
    ol.appendChild(li);
    
}

function setDisabledButton(elementId){
    const button = document.getElementById(elementId);
    button.setAttribute('disabled', true);
    button.style.backgroundColor = '#A2A9AF';
}


function chackPlayerLength(playerCalss){
    const players = document.getElementsByClassName(playerCalss);
    console.log(players.length);
    if(players.length > 4){
        
       
    }
    else{
        alert("You can't select more than five players. Thank You !");
        return;
    }
}