function digitOnClick() {
    console.log(this);
}

function operateOnClick() {
    //alert(this.classList);
    let OperateBtns = document.getElementsByClassName('operate');
    for ( let loop=0; loop<OperateBtns.length; loop++){
        OperateBtns[loop].classList.remove("operateClick")
    };
    this.classList.add("operateClick");
    
    console.log(this);
}

function equalOnClick() {
    
}

function cancelOnClick() {
    document.querySelector("#displayValue").value == document.body.innerHTML.replace(document.querySelector("#displayValue").value, '123456');
}

document.addEventListener('DOMContentLoaded', function() 
{
    let digitBtns = document.getElementsByClassName('digit');

    for ( let i=0; i<digitBtns.length; i++ ) {
        digitBtns[i].addEventListener('click', digitOnClick);
    }
})

document.addEventListener('DOMContentLoaded', function() 
{
    let OperateBtns = document.getElementsByClassName('operate');

    for ( let i=0; i<OperateBtns.length; i++ ) {
        OperateBtns[i].addEventListener('click', operateOnClick);
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let EqualButton = document.querySelector('#equal');
    EqualButton.addEventListener('click', digitOnClick)
})

document.addEventListener('DOMContentLoaded', function() {
    let CancelButton = document.querySelector('#cancel');
    CancelButton.addEventListener('click', cancelOnClick)
})
