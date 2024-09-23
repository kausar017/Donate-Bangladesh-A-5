// document.getElementById("donetBtn1") 


document.getElementById('donetBtn1').addEventListener('click', function(){

    const blance = getInnerTextNumber('my-total-tk');
    // console.log( blance);
    
    const inputValue = getInputValuToNumbar('donetInput');
    // console.log(inputValue);
    
    const donateTk = getInnerTextNumber('donate-tk');
  
    
    if(isNaN(inputValue)) {
     alert('Ivalid amount');
    }
    else if(inputValue < 0){
        alert('Invalid amount ')
    }
    else if(blance < inputValue){
        alert('Insufficient Balance')
    }
 
    else {
        // const myTotalBalace = blance - inputValue;
        // document.getElementById('My-total-tk').innerText = myTotalBalace;
        // const donetedBalance = donateTk + inputValue;
        // document.getElementById('donetInput').innerText = donetedBalance;
        const myTotalBalance = blance - inputValue;
        document.getElementById('my-total-tk').innerText = myTotalBalance;
        const donateBalance = donateTk + inputValue;
        document.getElementById('donate-tk').innerText = donateBalance;
        
        document.getElementById('my_modal_5').showModal();
        document.getElementById('donetInput').value = '';
    }

});

