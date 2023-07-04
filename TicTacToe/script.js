const X_CLASS = 'x';
const CIRCLE_CLASS = 'circle';
const cellElements = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
let circleTurn;
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const winningMessageElement = document.getElementById('winningMessage')

const restartButton = document.getElementById('restartButton');

const WINNING_COMBINATIONS =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

startGame();

restartButton.addEventListener('click', startGame);

function startGame(){
    circleTurn= false;



    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)

        cell.addEventListener('click', handleClick, { once: true })
        }) 

    setBoardHoverClass();

    winningMessageElement.classList.remove('show');
    
    /* how to restart
    when we click restart, startgame() is reinitated
    in the beginning of that function we remove all of the x or circles classes in each of the cells
    when it loops through each cell
    we also remove the class of 'show' in the winningMessageELement class list to get rid of the overlay.
    */
   
   /* making the start game fucntion allows the hover class to initate before any marks are made considering that the
    function starts at the beginning which has the hover function */

}

//once:true allows it to only run once

    function handleClick(e) {
        const cell = e.target
        const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
        placeMark(cell, currentClass)

        if (checkWin(currentClass)){
            endGame(false);
        } 
        else if (isDraw()) {
            endGame(true)
            } 
        else {
            swapTurns()
            setBoardHoverClass()
            }
     
        }
    function placeMark(cell, currentClass) {
        cell.classList.add(currentClass)
        // adds the string value of currentClass next to the board class in our HTML
        }

    function endGame(draw) {
            if (draw) {
                winningMessageTextElement.innerText = 'Draw!'
            } 
            
            else {
            winningMessageTextElement.innerText = `${circleTurn ? "O's" :
            "X's"} Wins!`
            }
            winningMessageElement.classList.add('show')
            }

    function isDraw(){

        return [...cellElements].every(cell => {
            return cell.classList.contains(X_CLASS) || cell.classList.contains (CIRCLE_CLASS)
            })

        // if every index in cellElements is contains class x or circle then it's a draw
        // cellElemnts doesn't have an 'every' method, but we destructure it so that it works by adding ...

    }

    function swapTurns(){
       circleTurn = !circleTurn;
        // changes the boolean value of true or false of circleTurn in order to swap turns each time a new cell is clicked
    }

    function setBoardHoverClass() {
        board.classList.remove(X_CLASS)
        board.classList.remove(CIRCLE_CLASS)
        if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
        } else {
        board.classList.add(X_CLASS)
        }
        /* first we remove any of the x or circles classes from board
            next if circleTurn is true then we add in the circle class to initiate the hover for that class
            else we add in the x class in order to intiate the hover and creation classes */
        }

        function checkWin(currentClass) {
            return WINNING_COMBINATIONS.some(combination => {

            return combination.every(index => {

            return cellElements[index].classList.contains(currentClass)

            })

            })
            }

    /* 

    if any of the winning combination arrays have the class of circle or x in all of their indexes, then initate the winning message


    return WINNING_COMBINATIONS.some  
    this is going to return true if any of the values inside of it are true

    return WINNING_COMBINATIONS.some(combination => {

    })
    this is going to loop over all the combinations arrays in the array WINNING_COMBINATIONS

    return WINNING_COMBINATIONS.some (combination => {
        
        return combination.every(index => {
        return cellElements[index].classList.contains
        (currentClass)
        })
        })
    this is going to loop every index in the combaination array to see if it has currentClass

    1. it goes through the WINNING_COMBINATIONS array to check if any of the conditions are true 
    2. It loops through the array of WINNING_COMBINATINONS
    3. It then loops through the indexes of a winning combination array
    4. it then checks to see if there is a class of x or circle in the indexes 
    5. if all the indexes in any of the combination arrays have a class of x or circle then it will return true and the winning message will intiate

    */