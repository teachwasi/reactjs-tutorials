
function add(number1,number2){
    let result=number1+number2;
    return result;
}
function sub(number1,number2){
    let result=number1-number2;
    return result;
}
function mul(number1,number2){
    let result=number1*number2;
    return result;
}
function div(number1,number2){
    let result=number1/number2;
    return result.toFixed(2);
}


export {add,sub,mul,div};