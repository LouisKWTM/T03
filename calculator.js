let temp = 0
let evaluated = false
let OperateBtns = document.getElementsByClassName('operate');

function removeColor() {
    for ( let loop=0; loop<OperateBtns.length; loop++ ){
        OperateBtns[loop].classList.remove("operateClick");
    }
}

function digitOnClick() {
    //alert(isNaN(Number(temp)))
    if (displayValue.textContent == 0
        || (isNaN(Number(temp)) == true) && (typeof temp != 'number')
        || ((displayValue.textContent != 0) && (evaluated == true))
        ) {
        displayValue.textContent = this.textContent;
        evaluated = false
    }
    else {
        displayValue.textContent += this.textContent;
this    }
}

function operateOnClick() {
    //alert(this.classList);
    removeColor()
    this.classList.add('operateClick')
    temp = displayValue.textContent
    if (this.textContent === 'x') {
        temp += '*';
    }
    else {
        temp += this.textContent;
    }
    alert(temp);
}

function equalOnClick() {
    removeColor()
    temp += displayValue.textContent
    displayValue.textContent = eval(temp)
    temp = 0
    evaluated = true
}

function cancelOnClick() {
    removeColor()
    displayValue.textContent = 0
    temp = 0;
    evaluated = false
}

document.addEventListener('DOMContentLoaded', function() 
{
    let DigitBtns = document.getElementsByClassName('digit');
    for ( let i=0; i<DigitBtns.length; i++ ) {
        DigitBtns[i].addEventListener('click', digitOnClick);
    }
})

document.addEventListener('DOMContentLoaded', function() 
{
    for ( let i=0; i<OperateBtns.length; i++ ) {
        OperateBtns[i].addEventListener('click', operateOnClick);
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let EqualButton = document.querySelector('#equal');
    EqualButton.addEventListener('click', equalOnClick)
})

document.addEventListener('DOMContentLoaded', function() {
    let CancelButton = document.querySelector('#cancel');
    CancelButton.addEventListener('click', cancelOnClick)
})
