$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

});

function appendTasks() {

}

var time
setInterval(() => {
    time = moment().format("MMMM Do YYYY, HH:mm:ss");
    $("#currentDay").text(time);
}, 1000);

var currentHour = moment().format("k");
var currentHourParse = parseInt(currentHour);

var hourlyTask9 = document.querySelector("#formInput9")
var hourlyTask10 = document.querySelector("#formInput10")
var hourlyTask11 = document.querySelector("#formInput11")
var hourlyTask12 = document.querySelector("#formInput12")
var hourlyTask1 = document.querySelector("#formInput1")
var hourlyTask2 = document.querySelector("#formInput2")
var hourlyTask3 = document.querySelector("#formInput3")
var hourlyTask4 = document.querySelector("#formInput4")
var hourlyTask5 = document.querySelector("#formInput5")
var hourlyTaskArray = [hourlyTask9, hourlyTask10, hourlyTask11, hourlyTask12, hourlyTask1, hourlyTask2, hourlyTask3, hourlyTask4, hourlyTask5];

var hour9 = hourlyTask9.getAttribute("data-hour");
var hour10 = hourlyTask10.getAttribute("data-hour");
var hour11 = hourlyTask11.getAttribute("data-hour");
var hour12 = hourlyTask12.getAttribute("data-hour");
var hour1 = hourlyTask1.getAttribute("data-hour");
var hour2 = hourlyTask2.getAttribute("data-hour");
var hour3 = hourlyTask3.getAttribute("data-hour");
var hour4 = hourlyTask4.getAttribute("data-hour");
var hour5 = hourlyTask5.getAttribute("data-hour");
var hourArray = [hour9, hour10, hour11, hour12, hour1, hour2, hour3, hour4, hour5];

function renderTasks() {
    for (var i = 0; i < hourlyTaskArray.length; i++) {
        var hour = parseInt(hourArray[i]);
        if (hour > currentHourParse) {
            hourlyTaskArray[i].setAttribute("class", "custom-green");
        } else if (hour == currentHourParse) {
            hourlyTaskArray[i].setAttribute("class", "custom-red");
        } else {
            hourlyTaskArray[i].setAttribute("class", "custom-gray");
        }
    };
}

renderTasks();



var btn9 = document.querySelector("#btn9");

btn9.addEventListener("click", function(event) {
    var element = event.target;

    if (element.matches(".btn")) {
        var state = element.getAttribute("data-number");
        var stateParse = parseInt(state);
        i = stateParse;
        var newTask = hourlyTaskArray[i].value;
        localStorage.setItem("tasks", JSON.stringify(newTask));
    }
});




// var todoInput = document.querySelector("#todo-text");
// var todoForm = document.querySelector("#todo-form");
// var todoList = document.querySelector("#todo-list");
// var todoCountSpan = document.querySelector("#todo-count");

// var saveBtn = document.querySelector(".btn");


// var todos = [];


// // This function is being called below and will run when the page loads.
// //We've stored the to-do items, but we also need to be able to retrieve the data from storage. We will do this inside the init() function.
// //init() is being invoked in script.js, so it will run every time the page loads.
// //Inside of init(), we use getItem() and convert the data from a string to an array using JSON.parse(). To use the array in the code, we store it in a variable

// function init() {
//   // Get stored todos from localStorage
//   var storedTodos = JSON.parse(localStorage.getItem("todos"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if (storedTodos !== null) {
//     todos = storedTodos;
//   }

//   // This is a helper function that will render todos to the DOM
//   renderTodos();
// }

// //The storeTodos function stores an array using localStorage. First we stringify it using JSON.stringify(), then we set it to storage using setItem().
// //We need to save to-do items to localStorage in a few places, so storing this action in the function storeTodos cleans up the code! 
// function storeTodos() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("todos", JSON.stringify(todos));
// }



// // Add submit event to form
// //We add an event listener to the to-do form so that when a user enters a to-do item, the data is stored on submit. The to-dos are stored and rendered using two helper functions, storeTodos() and renderTodos()
// saveBtn.addEventListener("submit", function(event) {
//   event.preventDefault();

//   var taskInput = hourlyTaskArray[i].trim();

//   // Return from function early if submitted taskInputt is blank
//   if (taskInputt === "") {
//     return;
//   } 

//   // Store updated todos in localStorage, re-render the list
//   storeTodos();
//   renderTodos();
// });

// // Add click event to todoList element
// //Finally, we need to add an event listener to the completed button so that a user can remove to-do items. We do this by using the "data-index" of the button's parent element to remove the correct to-do item from the todos array.
// //We call the storeTodos() and renderTodos() functions when the complete button is clicked, to store and render the updated list
// todoList.addEventListener("click", function(event) {
//   var element = event.target;
//   console.log(element);
//   console.log("I was clicked");

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//         // ["take a walk","code","study"]
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init()
