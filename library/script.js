
let submitButton = document.getElementById('sub');  // variable connecting to HTML submit button
let myLibrary = [];   // array of objects

// let input1 = document.getElementById('title');
// let input2 = document.getElementById('author');
// let input3 = document.getElementById('pages');

function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

}
//the constructor for the book which has a title, author and page numbers

submitButton.addEventListener('click', function() {
  event.preventDefault();
  addBookToLibrary();
  createBox(book);
  
});

//adds an event listener to the submit button and when clicked it runs the following functions


function addBookToLibrary() {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
   
    var newBook = new Book(title,author,pages);
    myLibrary.push(newBook);
    createBox(newBook);


    /* 
    1. user types into the input and the strings get stored in their respective value
    2. with that data we input those variables into the constructor which makes a new book
    3. we push the new book into myLibrary array
    4. we push the invidual properties into their respected arrays
    5. we alter the headers by adding in the content of the arrays into the innerText

    */
    
  
}

// Function to create a new div box inside container


const container = document.getElementById("container");


function createBox(book) {

  // Create a new div element
  const box = document.createElement("div");

  const header = document.createElement("h1");
  const header2 = document.createElement("h1");
  const header3 = document.createElement("h1");

  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  
  removeBtn.className= 'btn';
  removeBtn.textContent= 'Remove';

  let checkbox = document.getElementById('myCheckBox')

  var readBtnText = checkbox.checked ? "Read" :"Not Read";
  readBtn.textContent= readBtnText;

  readBtn.classList.add(checkbox.checked ? 'readBtn' : 'noRead');

  

 

  readBtn.addEventListener('click', function() {

    if (readBtn.textContent === "Read") {
      readBtn.textContent = "Not Read";
      readBtn.classList.remove('readBtn');
      readBtn.classList.add('noRead');
    } else {
      readBtn.textContent = "Read";
      readBtn.classList.add('readBtn');
      readBtn.classList.remove('noRead');
    }
  })

  removeBtn.addEventListener('click', function(){
    container.removeChild(box);
  })

  // Set the class and content of the box
  box.className = "box";

  header.textContent = 'title: ' + book.title;
  header2.textContent = 'author: ' + book.author;
  header3.textContent = 'pages: ' + book.pages;
  
  // Append the box to the container
  box.appendChild(header);
  box.appendChild(header2);
  box.appendChild(header3);

  box.appendChild(readBtn);
  box.appendChild(removeBtn);

  container.appendChild(box);



  formOverlay.classList.remove('active');

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';

}




const openFormButton = document.getElementById('addBtn');

const formOverlay = document.getElementById('formOverlay');

openFormButton.addEventListener('click', function() {
  formOverlay.classList.add('active');
});

formOverlay.addEventListener('click', function(event) {
  if (event.target === formOverlay) {
    formOverlay.classList.remove('active');
  }
});

// let checkbox = document.getElementById('myCheckBox')

// checkbox.addEventListener('change', check);

// function check(){

//   if (checkbox.checked) {
//     readBtn.textContent = "Read";
//   } else {
//     readBtn.textContent = "Not Read";

//   }
// }