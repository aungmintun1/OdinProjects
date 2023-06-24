
const container = document.getElementById("container");
let submitButton = document.getElementById('sub');  // variable connecting to HTML submit button
let myLibrary = [];   // array of objects

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

// Function to create a new div box
function createBox(book) {

  // Create a new div element
  const box = document.createElement("div");

  const header = document.createElement("h1");
  const header2 = document.createElement("h1");
  const header3 = document.createElement("h1");
  
  // Set the class and content of the box
  box.className = "box";

  header.textContent = 'title: ' + book.title;
  header2.textContent = 'author: ' + book.author;
  header3.textContent = 'pages: ' + book.pages;
  
  // Append the box to the container
  box.appendChild(header);
  box.appendChild(header2);
  box.appendChild(header3);
  container.appendChild(box);

  formOverlay.classList.remove('active');

}


// const openFormButton = document.getElementById('openFormButton');

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

