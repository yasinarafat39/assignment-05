
document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerExpence = getInputFieldAmount('per-player-expense-field');
    console.log(perPlayerExpence);

    const players = document.getElementsByClassName('player');
    const playerQuantity = players.length;

    console.log('playerQuantity', playerQuantity);
     
    const TotalPlayerExpenses = perPlayerExpence * playerQuantity;
    console.log('total Player expenses', TotalPlayerExpenses);

    const previousPlayerExpenses = getTextFieldAmount('player-expenses');
    console.log(previousPlayerExpenses);

    previousPlayerExpenses.innerText = TotalPlayerExpenses;
});


document.getElementById('btn-calculate-total').addEventListener('click', function(){
    const totalPlayerExpence = getTextFieldAmount('player-expenses');
    console.log(totalPlayerExpence);

    const managerAmount = getInputFieldAmount('manager-amount');
    console.log(managerAmount);

    const coachAmount = getInputFieldAmount('coachAmount');
    console.log(coachAmount);

    const total = totalPlayerExpence + managerAmount + coachAmount;
    console.log(total);

    const previousTotalAmount = getTextFieldAmount('totalAmout');
    console.log(previousTotalAmount);

    previousTotalAmount.innerText = total;

});