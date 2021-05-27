const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    
    panel.addEventListener('click', function() {
        removee();
        panel.classList.add('active');
    })
})

function removee() {
    panels.forEach(panel => {
        panel.classList.remove('active');
        console.log('yo');
    })
}

var flag = 0;

document.querySelector('body').addEventListener('keypress', function() {
    if(flag===0) {
        document.querySelector('body').style.backgroundColor = 'white';
        flag = 1;
        
    } else {
        document.querySelector('body').style.backgroundColor = 'black';
        flag = 0;
        
    }
})

