const btn = document.querySelectorAll('.button')
const body = document.querySelector('body')

btn.forEach(function (buttons) {
    log(buttons);  // here we can access all buttons. 
    buttons.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);  
        
        if (event.target.id === 'green') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'red') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = event.target.id;
        
        }
        
    })
    
    
})