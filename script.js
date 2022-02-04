newBook = document.querySelector("#newBook");
display = document.querySelector(".display");
author = document.querySelector("#author");
title = document.querySelector("#title");
pages = document.querySelector("#pages");
read = document.querySelector("#read");
newBookForm = document.querySelector(".newBookForm");
newBookForm.style.display = 'none';
mainBtn = document.querySelector(".mainBtn")
specialDiv = document.querySelector(".specialDiv")

let myLibrary = [];
newBook.addEventListener("click", function (){
  let newDiv = document.createElement("div");
  newDiv.id = "dynamicDiv";

  let bookRead = "";
  if (read.checked === true){
    bookRead = "Read!"
  } else {
    bookRead = "Not Read"
  }

  if (author.value === '' || title.value === '' || pages.value === ''){
    alert('please fill out all fields.')
  } else {
  newDiv.innerHTML = `Author: ${author.value}</br> Title:${title.value}</br> Pages: ${pages.value}</br> ${bookRead}</br>`;

  let removeBtn = document.createElement("button");
  removeBtn.id = "removeBtn"
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function(){
    newDiv.parentNode.removeChild(newDiv);
    removeBtn.parentNode.removeChild(removeBtn);
  })
  removeBtn.style.background="none";
  removeBtn.style.borderStyle="none";
  removeBtn.style.borderRadius="12px";
  removeBtn.style.padding="6px";
  // removeBtn.style.opacity="0.5";

  

  specialDiv.appendChild(newDiv)
  newDiv.appendChild(removeBtn)
  newBook.style.opacity = "1";
  author.value = "", title.value = "", pages.value = "", read.checked = false;
  newBookForm.style.opacity = "1";
  newBook.disabled = true;

  newBookForm.style.display = 'none';
  mainBtn.style.boxShadow = "1px 13px 8px 0px rgba(0, 0, 0, 0.5)"
  displayLibrary()
  }
});


function Book(){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read; 
};

function displayLibrary() {
  
  for (book in myLibrary){
    display.push(myLibrary.textContent)
  };
};

displayForm.addEventListener("click", function(){
  newBookForm.style.display = 'grid';
  newBook.disabled = false;
  mainBtn.style.boxShadow = "none"; 
})