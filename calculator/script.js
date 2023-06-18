/* How do we program the number buttons to be added to the display after clicking the button?

1. first we set our variable 

const numberButtons = document.querySelectorAll('[data-number]')
this is going to connect html buttons to the variable in javascript

2. next we set up our eventlisteners that activate when we click on the button

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
  })
  })

  * in this function, we use the forEach method in order to add a eventlistner to every button in the variable 'numberButtons'. 
    the 'click' is going to activate the function that we assigned the eventlistener to.
  * calculator.appendNumber is going to access the appendNumber function in our class. It takes in the text of the button element.
  *calculator.updateDisplay is going to actually update the text elements of the divs in our HTML, which will be shown in our display.


  3. we make appendNumber(number)

      appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  the first if statment allows us to only input 1 '.' and not multiple of them. if there are 2 or more .'s then we return/ don't do anything

   this.currentOperand = this.currentOperand.toString() + number.toString();
   // this is going to set the this.currentOperand to whatever number button we press. the value of the button.innerText goes into number,
      and then number is added onto this.currentOperand. note that we have .toString() added so that they can concatenate instead of being added as actual numbers.
    
  4. we make updateDisplay()

    updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand

    if (this.operation != null) {
      this.previousOperandTextElement.innerText =`${this.previousOperand} ${this.operation}`



      // this function is going to change the text of the div elements of the current and previous operations. The operations will be shown on display

      // it does this by accessing the div element that identifys with the current operation, and setting the value of the HTML text to this.currentOperand.
         Which is going to be whatever numbers the user clicked on

      the if statement is going to display the previous operation

      if this.operation is not null. in simple terms, if this.operation has a value then the innerText of the previous operation div, 
      is going to be the previous operation variable + the operator symbol

      // this is a string template literal ${this.previousOperand}
      // a string template literal allows us to have more easy and readable concatenation.
      //in this case we can do this.prevousOperand + " " + this.operation which will produce the same thing. but using literal syntax it is more concise

    }


*/

/* how do we progam the operator buttons? 

    *note that the first time we press an operator button it will just print the number and the operator symbol to the prev div element
    *the second time will change the number variable in the pre div element to the computation from our compute() function.

1. make a variable that connects to the HTML elements of the operator buttons
const operationButtons = document.querySelectorAll('[data-operation]')

2. Add eventlistners to each of those buttons using forEach
      operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation (button.innerText)
    calculator.updateDisplay()
    })
    })


    3. we make the function chooseOperation(operation), 
   this is going to take in the operator symbol we input from(button.innerText). It is then going to start our compute function

      chooseOperation(operation){
    if (this.currentOperand === '') return
    // this does nothing if there is no value in this.currnetOperand. meaning if the input is empty don't print the operator.

    if (this.previousOperand !== ''){
    / if there this.previousOperand is not an empty string, then run compute()
    this.compute()
    }
    
    // note that these variables are set after the functions start execute

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand ='';
                          
  }

    4. we make the compute() function, which is going to calculate the equation for us and change the variable of the previous operation number

     compute(){
    let computation;
    // this variable stores our result

    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // we are going to change the string to a float value using parseFloat

    if (isNaN(prev) || isNaN(current)) return
    //this is going to return nothing if there is no previous value. basically the first time the user inputs a number and then clicks on a operator will just print the input onto the
    previous operation div element.
    //however the second time there is a number element in the variable 'prev', then it is going to go through the switch statment. And then the computation will go into the previous operation div element
    // for example user inputs 1 +, 1 + gets printed onto the prev div element. if they press 1 again and then press + again, 2 + will then be printed onto the prev div element.

    switch (this.operation) {
      case '+':
      computation = prev + current
      break
      case '-':
      computation = prev - current
      break
      case '*':
      computation = prev * current
      break
      case '÷':
      computation = prev / current
      break
    default:
      return
      }
      // in the switch statement it is going to take in the operator symbol, and whatever case it fulfills it will do the computation that is assigned in the case and then break.
      // the default statement returns nothing in the case it is anything other than the symbols we assigned

      this.currentOperand = computation;
      this.operation= undefined;
      this.previousOperand= ' ';

      //these variables will then be assigned their values after the switch statement has been executed.

  }




  5. updateDisplay() will get executed

        updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    //note that in chooseOperation(), this.currentOperand will be assigned '' at the end, which clears out the current operation div.
    
    if (this.operation != null) 
        // if there is a value in this.operation which is obtained from clicking a operator button, then run this code below
    {
      this.previousOperandTextElement.innerText =`${this.previousOperand} ${this.operation}`
    // this function is going to change the text of the div elements of the current and previous operations. The operations will be shown on dispaly
     
      // this is a string template literal ${this.previousOperand}
      // a string template literal allows us to have more easy and readable concatenation.
      //in this case we can do this.prevousOperand + " " + this.operation which will produce the same thing. but using literal syntax it is more concise

    }





*\

/* how do we program the computations? 

*/

class Calculator {

  constructor (previousOperandTextElement, currentOperandTextElement) {

  this.previousOperandTextElement = previousOperandTextElement
  this.currentOperandTextElement = currentOperandTextElement
  this.clear()
  
  /*
  a class has variables and functions
  a constructor is used to take in variables, and add the data to a variable in the class.

   In this case we have this.previousOperandTextElement and this.currentOperandTextElement]
   which are assigned to previousOperandTextElement and currentOperandTextElement.
  This allows the class to access those variables


  the clear function defines:
   this.currentOperand and this.previousOperand. by default they are set to '' because there is nothing in the input
    this.operation is undefined because there is nothing selected as well

    also if we were to use the clear function after clicking the clear button then we can use it to clear the display
  */
 

  }

  clear(){
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  chooseOperation(operation){
    if (this.currentOperand === '') return
    if (this.previousOperand !== ''){
    this.compute()
    }

    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand ='';
                          
  }

  compute(){
    let computation;
    // this variable stores our result

    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    // we are going to change the string to a float value using parseFloat

    if (isNaN(prev) || isNaN(current)) return
    //this is going to prevent the user from initiating the function from clicking on the = button, if there is not previous value

    switch (this.operation) {
      case '+':
      computation = prev + current
      break
      case '-':
      computation = prev - current
      break
      case '*':
      computation = prev * current
      break
      case '÷':
      computation = prev / current
      break
    default:
      return

      }
      this.currentOperand = computation;
      this.operation= undefined;
      this.previousOperand= ' ';

  }




  appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return

    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  updateDisplay(){
    this.currentOperandTextElement.innerText = this.currentOperand
    
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =`${this.previousOperand} ${this.operation}`
    // this function is going to change the text of the div elements of the current and previous operations. The operations will be shown on dispaly
     
      // this is a string template literal ${this.previousOperand
      // a string template literal allows us to have more easy and readable concatenation.
      //in this case we can do this.prevousOperand + " " + this.operation which will produce the same thing. but using literal syntax it is more concise

    }

  
    
  }
  


}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

  numberButtons.forEach(button => {
  button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
  })
  })

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
    calculator.chooseOperation (button.innerText)
    calculator.updateDisplay()
    })
    })

  equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
  })