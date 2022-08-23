
document.getElementById('btn-calculate').addEventListener('click', function () {

    const perPlayerExpence = getInputFieldAmountById('per-player-expense-field');

    const players = document.getElementsByClassName('player');
    const playerQuantity = players.length;

    if (playerQuantity < 5) {
        alert('Please select your best five players.');
    } else {
        const totalPlayerExpenses = perPlayerExpence * playerQuantity;
        setTextFieldAmountById('player-expenses', totalPlayerExpenses);
    }

});


document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const totalPlayerExpence = getTextAmountById('player-expenses');

    if (totalPlayerExpence <= 0) {
        alert('Please Calculate per player expenses and than Calculate Total. Thank you !');
        document.getElementById('manager-amount').value = '';
        document.getElementById('coachAmount').value = '';
    }
    else {
        const managerAmount = getInputFieldAmountById('manager-amount');


        const coachAmount = getInputFieldAmountById('coachAmount');


        const total = totalPlayerExpence + managerAmount + coachAmount;


        setTextFieldAmountById('total-Amout', total);
    }

});


// Check input Field 
checkInputFieldById('per-player-expense-field');
checkInputFieldById('manager-amount');
checkInputFieldById('coachAmount');
