# Ex.08 Design of a Standard Calculator

## Date: 06/05/2024

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :

### calculator.html
```
<html>
<head>
    <title>Standard Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script src="index.js" defer></script>
</head>
<body bgcolor="khaki">
    <center>
        <table class="calculator" align="center"> 
            <caption>VENKATANATHAN P R(212223240173)</caption>
            <div class="table">
            <tr> 
                <td colspan="4"><input type="text" id="result"></td> 
            </tr> 
            <tr> 
                <td class="clear"><input type="button" value="c" onclick="clr()"
                            onkeydown="myFunction(event)"> </td> 
                <td class="operator"><input type="button" value="/" onclick="dis('/')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="operator"><input type="button" value="*" onclick="dis('*')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="operator"><input type="button" value="+" onclick="dis('+')"
                            onkeydown="myFunction(event)"> </td> 
            </tr> 
            <tr> 
                <td class="number"><input type="button" value="7" onclick="dis('7')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="8" onclick="dis('8')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="9" onclick="dis('9')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="operator"><input type="button" value="-" onclick="dis('-')"
                            onkeydown="myFunction(event)"> </td> 
            </tr> 
            <tr> 
                <td class="number"><input type="button" value="4" onclick="dis('4')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="5" onclick="dis('5')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="6" onclick="dis('6')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="equals"><input type="button" value="=" onclick="solve()"> </td> 
            </tr> 
            <tr> 
                <td class="number"><input type="button" value="1" onclick="dis('1')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="2" onclick="dis('2')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="3" onclick="dis('3')"
                            onkeydown="myFunction(event)"> </td> 
            </tr> 
            <tr> 
                <td class="number"><input type="button" value="0" onclick="dis('0')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="number"><input type="button" value="00" onclick="dis('00')"
                            onkeydown="myFunction(event)"> </td> 
                <td class="decimal"><input type="button" value="." onclick="dis('0')"
                            onkeydown="myFunction(event)"> </td> 
            </tr> 
        </table> 
    </div>
    </center>
</body>
</html>

```

### style.css
```
* {
    box-sizing: border-box;
    margin:0;
    padding:0;
    text-align:center;
  }
  
  .calculator {
    background-color: black;
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
    border: solid 1px #ccc;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin-top: 40px;
  }
  
  #result{
      background-color: yellowgreen;
      width: 100%;
      padding: 10px;
      font-size: 24px;
      border: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) inset;
      border-radius: 5px;
      text-align:right;
  }
  
  .buttons{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      margin-top: 15px;
  }
  
  input[type="button"]{
      padding: 10px;
      font-size: 24px;
      border: none;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
  
  }
  
  button:hover{
      background-color: #ddd;
  }
  
  .clear{
      background-color: #ff4136;
      color: #fff;
  }
  
  .number, .decimal{
      background-color: #fff;
      color: #333;
  
  }
  
  .operator{
      background-color: #0074d9;
      color: #fff;
  }
  
  .equals{
      background-color: #01ff70;
      grid-row: span 3;
      color: #fff;
  }

```

### index.js
```
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
```
## OUTPUT:
![alt text](<Screenshot 2024-05-06 220216.png>)

![alt text](<Screenshot 2024-05-06 220153.png>)

## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
