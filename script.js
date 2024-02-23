function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Close the form for adding new task
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
// Function to add a new task
document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var taskName = document.getElementById("addtask").value;
    var taskDate = document.getElementById("date").value;
    var taskPriority = document.getElementById("prio").value;

    // Create a new task item
    var taskItem = document.createElement("div");
    taskItem.className = "task-item";
    
    // Font color change based on the selection
    var priorityColor;
    switch (taskPriority) {
        case "Urgent":
            priorityColor = "red";
            break;
        case "Medium":
            priorityColor = "#B8860B";
            break;
        case "Low":
            priorityColor = "green";
            break;
        default:
            priorityColor = "black"; // Default color
    }
    
    taskItem.innerHTML = `
        <p><strong>Task:</strong> ${taskName}</p>
        <p><strong>Date:</strong> ${taskDate}</p>
        <p><strong>Priority:</strong> <span style="color: ${priorityColor};">${taskPriority}</span></p>
        <button class="btn Done" onclick="markAsDone(this)">Done</button>
    `;
    
    // Append the task item to the task list container
    document.getElementById("taskList").appendChild(taskItem);
    
    // Clear the form fields
    document.getElementById("addtask").value = "";
    document.getElementById("date").value = "";
    document.getElementById("prio").value = "Urgent";

    // Close the form
    closeForm();
});

// Function to mark a task as done or delete it
function markAsDone(button) {
    var taskItem = button.parentElement;
    var taskName = taskItem.querySelector("p").textContent;
    var taskDate = taskItem.querySelector("p:nth-child(2)").textContent;
    var taskPriority = taskItem.querySelector("p:nth-child(3)").textContent;
    
    // Check if the button text is "Done"
    if (button.textContent === "Done") {
        // Change button text to "Delete"
        button.textContent = "Delete";
        // Move the task item to the completed tasks section
        document.getElementById("completedTasks").appendChild(taskItem);
    } else {
        // If button text is "Delete", remove the task item
        taskItem.remove();
    }
}

