
function calculator() {
    operator = prompt(`Enter your operation using the any of the symbols below
    + for addition
    - for Subraction
    * for multiplication
    / for modulus \n
    HERE: `)

    a = prompt('Enter 1st number: ')
    b = prompt('Enter second number: ')

    // function for addition logic
    function sum(a,b){
        return (a + b)
    }
     
    //  function for subtraction logic
    function min(a,b){
        return (a - b)
    }
    
    // function for multiplication logic
    function mul(a, b){
        return (a * b)
    }
    
    // function for modulus logic
    function mod(a,b){
        return (a % b)
    }

    // conditonal statement to perform user operation
    if (operator === '+'){
    alert(`the sum is: ${sum(a,b)}`)
    }
    
    else if( operator === '-'){
        alert(`Subraction is: ${min(a,b)}`)
    }
    else if( operator === '*'){
        alert(`multiplication is ${mul(a,b)}`)
    }
    else if( operator === '/'){
       alert(`modulis is ${mod(a,b)}`)
    }
    else {
        alert(`you have entered not the correct operation`)
    }
}

calculator()