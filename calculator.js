let temp = 0
let click = 0
let evaluated = false
let OperateBtns = document.getElementsByClassName('operate');

function removeColor() {
    for ( let loop=0; loop<OperateBtns.length; loop++ ){
        OperateBtns[loop].classList.remove("operateClick");
    }
}

function digitOnClick() {
    alert(click)
    if (displayValue.textContent == 0 || 
        evaluated == true || 
        (isNaN(Number(temp)) == true && click == 0))
        {
        displayValue.textContent = this.textContent;
        evaluated = false;
        click += 1
    }
    else {
        displayValue.textContent += this.textContent;
        click += 1
    }
}

function operateOnClick() {
    removeColor()
    this.classList.add('operateClick')
    temp = displayValue.textContent
    if (this.textContent === 'x') {
        temp += '*';
    }
    else {
        temp += this.textContent;
    }
    click = 0
    //displayValue.textContent = 0
    //alert(isNaN(Number(temp)))
    //alert(typeof temp);
}

function equalOnClick() {
    removeColor()
    temp += displayValue.textContent
    displayValue.textContent = eval(temp)
    temp = 0
    click = 0
    evaluated = true
}

function cancelOnClick() {
    removeColor()
    click = 0
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
