const input =document.querySelector('.RG')
input.addEventListener('keypress',() =>{
    let inputLength = input.value.length 
    if(inputLength == 3|| inputLength == 7){
        input.value +='.'


        
    }

    
})
