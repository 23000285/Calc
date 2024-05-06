function dis(val) { 
    document.getElementById("result").value += val; 
} 

function myFunction(event) { 
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', 'Enter'];
    
    if (validKeys.includes(event.key)) {
        const currentValue = document.getElementById("result").value;
        const lastChar = currentValue[currentValue.length - 1];
        
        if (event.key === '.' && currentValue.includes('.')) {
            // Prevent multiple decimal points in one number
            return;
        }
        
        if (event.key === 'Enter' && ['+', '-', '*', '/'].includes(lastChar)) {
            // Prevent the expression from ending with an operator
            return;
        }
        
        document.getElementById("result").value += event.key;
    }
} 

var cal = document.getElementById("calcu"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 

// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("result").value;
    try {
        let y = eval(x);
        document.getElementById("result").value = y;
    } catch (error) {
        console.error("Error:", error);
        // Handle error gracefully, e.g., display an error message to the user
    }
} 

// Function that clears the display 
function clr() { 
    document.getElementById("result").value = ""; 
} 
