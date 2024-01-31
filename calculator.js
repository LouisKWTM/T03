function digitOnClick() {
    console.log(this)
}


document.addEventListener('DOMContentLoaded', function() 
{
    let digitBtns = document.getElementsByClassName('digit');

    for ( let i=0; i<digitBtns.length; i++ ) {
        digitBtns[i].addEventListener('click', digitOnClick)
    }
})

document.addEventListener('DOMContentLoaded', function() 
{
    let OperateBtns = document.getElementsByClassName('operate');

    for ( let i=0; i<OperateBtns.length; i++ ) {
        OperateBtns[i].addEventListener('click', digitOnClick)
    }
})

document.addEventListener('DOMContentLoaded', function() {
    let DotButton = document.querySelector('#dot');
    DotButton.addEventListener('click', digitOnClick)
})

document.addEventListener('DOMContentLoaded', function() {
    let CancelButton = document.querySelector('#cancel');
    CancelButton.addEventListener('click', digitOnClick)
})

document.addEventListener('DOMContentLoaded', function() {
    let EqualButton = document.querySelector('#equal');
    EqualButton.addEventListener('click', digitOnClick)
})
