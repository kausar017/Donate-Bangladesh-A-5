// document.getElementById("donetBtn1") 


document.getElementById('donetBtn1').addEventListener('click', function(){

    const blance = getInnerTextNumber('My-total-tk');
    console.log( blance);
    
    const donatTk = getInputValuToNumbar('donetInput');
    console.log(donatTk);
    
    const inputValue = getInnerTextNumber('donate-tk');
    console.log(inputValue);
    

})

