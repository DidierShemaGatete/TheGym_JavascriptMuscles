/* function declaration */


function role(a, b){
    return a + b
}


/*  function expression*/

var role = function(a, b){
    return a ** b
}

/* Arrow function  */

var role = (a, b) => {console.log('this adds arguments')}

/* high-order function */

function body(physical, spiritual){

    console.log(`both ${physical} and ${spiritual} made a being` )

    return () =>{return "wow"}
}


/*function invoking / function calling*/

body('health', 'wealth');