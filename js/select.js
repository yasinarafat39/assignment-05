

document.getElementById('btn-Lionel-Messi').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-Lionel-Messi');
    setDisabledAttribute('btn-Lionel-Messi');

     
});

document.getElementById('btn-neymar-jr').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-neymar-jr');
    setDisabledAttribute('btn-neymar-jr');

     
})

document.getElementById('btn-kylian-mbappe').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-kylian-mbappe');
    setDisabledAttribute('btn-kylian-mbappe');
 
});

document.getElementById('btn-vitor-machado').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-vitor-machado');
    setDisabledAttribute('btn-vitor-machado');
    
     
});

document.getElementById('btn-sergio-ramos').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-sergio-ramos');
    setDisabledAttribute('btn-sergio-ramos');

    
});

document.getElementById('btn-renato-sanches').addEventListener('click', function () {

    chackPlayerLength('player');

    setListItem('name-renato-sanches');
    setDisabledAttribute('btn-renato-sanches');

    
});


const listContainer = document.getElementById('orderate-list');
console.log(listContainer.length);
