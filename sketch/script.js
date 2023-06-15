  const button = document.getElementById('change');
  const gridContainer = document.getElementById('gridContainer');

  button.addEventListener('click', changeGrid);

  function changeGrid(){

    let userInput = parseInt(prompt('Enter the number of squares per side (maximum 100):'));

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
      alert('Invalid input. Please enter a number between 1 and 100.');
      return;
    }

    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${userInput}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${userInput}, 50px)`;



    for (let i = 0; i < userInput; i++) 
    
    {
  
      for (let j = 0; j < userInput; j++)
     
       {
        const square = document.createElement('div');
        square.classList.add('square');
       
        gridContainer.appendChild(square);
       
  
      }
    }

  }
  


  // Generate the default 16x16 grid of squares
  for (let i = 0; i < 16; i++) 
  //this loop here is making the vertical 
  {

    for (let j = 0; j < 16; j++)
    // this loop is making the horizontal
     {
      const square = document.createElement('div');
      square.classList.add('square');
      //we make a div element and then add it to the square class

      gridContainer.appendChild(square);
      //we add the div into the div with the gridContainer ID

    }
  }

