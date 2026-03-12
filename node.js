const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        let expression = display.value.replace(/²/g, "**2");
        expression = expression.replace(/√(\d+(\.\d+)?)/g, "Math.sqrt($1)");
        display.value = eval(expression);
    }
    catch(error) {
        display.value = "error";
    }
}

function removeNum() {
    display.value = display.value.slice(0, -1);
} 

function squared() {
    display.value += '²';

}

function sqrt(){
    display.value +='√';
}

  // first commit kinda nervy
