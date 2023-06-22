
let myLibrary = [];   // array of objects

let titles=[];
let authors=[];
let pageList =[];

// array containing object properties


titleList.innerText= 'title: ' 
authorList.innerText='author: ' 
pageNum.innerText = 'pages: ' 

//default header content

let submitButton=document.getElementById('sub');  // variable connecting to HTML submit button
//

submitButton.addEventListener('click', function() {
  addBookToLibrary();
  display();
});

//adds an event listener to the submit button and when clicked it runs the following functions

function Book(title,author,pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;

}
//the constructor for the book which has a title, author and page numbers

function addBookToLibrary() {

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;


   
    var newBook = new Book(title,author,pages);
    myLibrary.push(newBook);

    titles.push(newBook.title);
    authors.push(newBook.author);
    pageList.push(newBook.pages);
     
      titleList.innerText= 'title: ' + titles;
      authorList.innerText='author: ' + authors;
      pageNum.innerText = 'pages: ' + pageList;
  
  
    /* 
    1. user types into the input and the strings get stored in their respective value
    2. with that data we input those variables into the constructor which makes a new book
    3. we push the new book into myLibrary array
    4. we push the invidual properties into their respected arrays
    5. we alter the headers by adding in the content of the arrays into the innerText

    */
}

