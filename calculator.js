function digitOnClick() {
    console.log(this)
}

document.addEventListener('DOMContentLoaded', function() 
    {
        let digitBtns = document.getElementsByClassName('digit');
        alert(digitBtns);
        for ( let i=0; i<digitBtns.length; i++ ) {
            digitBtns[i].addEventListener('click', digitOnClick)
        }
    }
);

