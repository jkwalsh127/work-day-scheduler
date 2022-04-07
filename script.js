$(document).ready(function () {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

});

// Object hourlyTask with three properties
//We declare a hourlyTask object using object literal notation. We give the object three properties, as follows:
var hourlyTask= {
    //We use key-value pairs to define each property, like in the following example:
    time: 9,
    task: "aisudhfkasfdnk",
    button: 9,
  };
  
  // This logs the entire object
  //To access the whole object, we use the object's name, as follows:
    console.log(hourlyTask);
  
  // Note that in bracket notation, the key is inside brackets and surrounded by quotes
  //We can also use bracket notation to access a value, as follows:
    console.log("   " + hourlyTask["time"] + "  " + hourlyTask["task"] + "  ");
  