// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    addTask(
        form.elements.WineName.value,
        form.elements.WineFlavour.value,
        form.elements.CheeseName.value,
        form.elements.CheeseFlavour.value,
        form.elements.taskRating.value,
        form.elements.taskDescription.value,

    )
    console.log(taskList)
})

function displayTask(task) {
    let item = document.createElement("li");
    item.setAttribute("data-id", task.id);
    item.innerHTML = `<p><strong>${task.WineName}</strong><br>${task.WineFlavour}<br>${task.CheeseName}<br>${task.CheeseFlavour}<br>${task.rating}p>${task.description}</p>`;

    tasklist.appendChild(item);

    // Clear the value of the input once the task has been added to the page
    form.reset();

    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task

    // Listen for when the delete button is clicked
    delButton.addEventListener("click", function (event) {

        taskList.forEach(function (taskArrayElement, taskArrayIndex) {
            if (taskArrayElement.id == item.getAttribute('data-id')) {
                taskList.splice(taskArrayIndex, 1)
            }
        })

        // Make sure the deletion worked by logging out the whole array
        console.log(taskList)

        item.remove(); // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element

    })


}




// Create an object called 'task'
// Populate the properties based on the provided data model

// Commented out now the object creation is included in the function

var task = {
  name: "Initial Sketches",
  type: "Concept Ideation",
  id: Date.now(),
  date: new Date().toISOString(),
  rating: 5,
}

console.log(task);


// Create an array called 'taskList'
var taskList = [];

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addTask(WineName, WineFlavour, CheeseName, CheeseFlavour, rating) {

    // Creating the object with the usual property:value syntax

    // Creating the object, directly passing in the input parameters
    let task = {
        WineFlavour,
        WineName,
        CheeseName,
        CheeseFlavour,
        taskDescription, 
        id: Date.now(),
        date: new Date().toISOString(),
        rating,
    }

    taskList.push(task);
    displayTask(task);

}

// Log the array to the console.
console.log(taskList);

// ...

// Variable to store the selected rating
let selectedRating = 0;

// Function to update the star rating UI
function updateStarRating() {
  const starIcons = document.querySelectorAll("#starRating i");
  starIcons.forEach((icon, index) => {
    if (index < selectedRating) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
  });
}

// Event listener for star rating selection
document.querySelectorAll("#starRating i").forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1;
    updateStarRating();
    document.getElementById("taskRating").value = selectedRating;
  });
});


