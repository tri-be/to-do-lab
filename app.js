//test files are connected properly 
console.log("Testing, 1, 2, 3!");

// add click event

$("#add-task-button").click(function() {
    let task = $("#add-task-input").val();
    if (task === "") {
        alert("Task cannot be blank.");
    } else {
        $("#to-do-list").append(`<li>${task}</li>`);
        $("#add-task-input").val("");
    }
});