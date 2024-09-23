const donationContainer = document.getElementById('donationON');
const donationBtnEl = document.getElementById('donationBtn');
const historyBtnEl = document.getElementById('historyBtn');
// console.log('hello');


// function () {
    
// }

document.getElementById('donationBtn').addEventListener('click', function () {
    donationContainer.classList.remove('hidden');
    donationBtnEl.style.backgroundColor='#B4F461';
    historyBtnEl.style.backgroundColor = '#ffff'
})

document.getElementById('historyBtn').addEventListener('click', function () {
    donationContainer.classList.add('hidden');
    historyBtnEl.style.backgroundColor = '#B4F461'
    donationBtnEl.style.backgroundColor='#ffff';
})