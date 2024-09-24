
// Noakhali section function..
document.getElementById('donetBtn1').addEventListener('click', function(){

    const blance = getInnerTextNumber('my-total-tk');    
    const inputValue = getInputValuToNumbar('donetInput');
    const donateTk = getInnerTextNumber('donate-tk');
    const history = document.getElementById('History');
    const donateTitle = document.getElementById('donate-title').innerText;
    
    if(isNaN(inputValue)) {
     return alert('Ivalid amount');
    }
    else if(inputValue <= 0){
       return alert('Invalid amount ')
    }
    else if(blance < inputValue){
       return alert('Insufficient Balance')
    }
 
    else {
        const myTotalBalance = blance - inputValue;
        document.getElementById('my-total-tk').innerText = myTotalBalance;
        const donateBalance = donateTk + inputValue;
        document.getElementById('donate-tk').innerText = donateBalance;
        
        document.getElementById('my_modal_5').showModal();
        document.getElementById('donetInput').value = '';
    }

    const historyItem = document.createElement('div');
    historyItem.classList.add('border');
    historyItem.classList.add('p-6');
    historyItem.classList.add('mt-5');
    historyItem.classList.add('rounded-xl');
    historyItem.innerHTML = 
        `
            <h1 class ="font-bold text-xl">${inputValue} Taka ${donateTitle}</h1>
            <p>Date: ${new Date()} </p>
        `
        history.insertBefore(historyItem, history.firstChild);
    

});


//Feni section funtion
document.getElementById('donetBtn2').addEventListener('click', function(){

    const blance = getInnerTextNumber('my-total-tk');    
    const inputValue = getInputValuToNumbar('donetInput1');
    const donateTk = getInnerTextNumber('donate-tk1');
    const history = document.getElementById('History');
    const donateTitle = document.getElementById('donate-title1').innerText;
    
    if(isNaN(inputValue)) {
     return alert('Ivalid amount');

    }
    else if(inputValue <= 0){
       return alert('Invalid amount');
    }
    else if(blance < inputValue){
       return alert('Insufficient Balance');
    }
     else {
        const myTotalBalance = blance - inputValue;
        document.getElementById('my-total-tk').innerText = myTotalBalance;
        const donateBalance = donateTk + inputValue;
        document.getElementById('donate-tk1').innerText = donateBalance;
        
        document.getElementById('my_modal_5').showModal();
        document.getElementById('donetInput1').value = '';
    }

    const historyItem = document.createElement('div');
    historyItem.classList.add('border');
    historyItem.classList.add('p-6');
    historyItem.classList.add('mt-5');
    historyItem.classList.add('rounded-xl');
    historyItem.innerHTML = 
        `
            <h1 class ="font-bold text-xl">${inputValue} Taka ${donateTitle}</h1>
            <p>Date: ${new Date()} </p>
        `
        history.insertBefore(historyItem, history.firstChild);
    

});

//Quota section start

document.getElementById('donetBtn3').addEventListener('click', function(){

    const blance = getInnerTextNumber('my-total-tk');    
    const inputValue = getInputValuToNumbar('donetInput2');
    const donateTk = getInnerTextNumber('donate-tk2');
    const history = document.getElementById('History');
    const donateTitle = document.getElementById('donate-title2').innerText;
    
    if(isNaN(inputValue)) {
     return alert('Ivalid amount');
    }
    else if(inputValue <= 0){
       return alert('Invalid amount ')
    }
    else if(blance < inputValue){
       return alert('Insufficient Balance')
    }
 
    else {
        const myTotalBalance = blance - inputValue;
        document.getElementById('my-total-tk').innerText = myTotalBalance;
        const donateBalance = donateTk + inputValue;
        document.getElementById('donate-tk2').innerText = donateBalance;
        
        document.getElementById('my_modal_5').showModal();
        document.getElementById('donetInput2').value = '';
    }

    const historyItem = document.createElement('div');
    historyItem.classList.add('border');
    historyItem.classList.add('p-6');
    historyItem.classList.add('mt-5');
    historyItem.classList.add('rounded-xl');
    historyItem.innerHTML = 
        `
            <h1 class ="font-bold text-xl">${inputValue} Taka ${donateTitle}</h1>
            <p>Date: ${new Date()} </p>
        `
        history.insertBefore(historyItem, history.firstChild);
    

});