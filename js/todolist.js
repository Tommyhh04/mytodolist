//Storage for tasks added to the list
let myList = [];
//HTML elements stored in variables

//User input
const myInput = document.querySelector("#input-el");
//Add task button
const inputBtn = document.querySelector("#input-btn");
//Area for displaying the list
const listEl = document.querySelector("#list-el");

//Gives button function to renderList() when button is clicked.
inputBtn.addEventListener("click", function () {
  myList.push(myInput.value);

  renderList();
});

//Appends the user input from the text field into the list-el in HTML document

function renderList() {
  let listItems = "";
  for (let i = 0; i < myList.length; i++) {
    listItems += "<li>" + myList[i] + "</li>";
  }
  listEl.innerHTML = listItems;
}
