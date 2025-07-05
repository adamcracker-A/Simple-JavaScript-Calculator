// calculator program

let display = document.getElementById("display");

function appendtodisplay(input){
    display.value += input;
}
function sqrtdisplay(){
    display.value += '√(';
}
function calculate(){
    try{
        //replacing the square root sign by it's math function to allow calculation
        let expression = display.value.replace(/√/g, 'Math.sqrt');
        let result = eval(expression);
        display.value = result; 
        // Check if result is Infinity or -Infinity (division by zero)
        if (!isFinite(result)) {
            display.value = "Error: Division by zero";
            return;
        }       
    }
    catch(error){
        display.value = "Error";
    }
}
function cleardisplay(){
    display.value = "";
}