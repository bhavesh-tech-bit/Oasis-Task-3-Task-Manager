function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    createTask(taskText, "pendingList");
    taskInput.value = "";
}

function createTask(taskText, listId) {

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let btnGroup = document.createElement("div");

 
    let completeBtn = document.createElement("button");
    completeBtn.textContent = "✔";
    completeBtn.className = "complete-btn";
    completeBtn.onclick = function () {
        li.classList.add("completed");
        completeBtn.remove();
        document.getElementById("completedList").appendChild(li);
    };


    let editBtn = document.createElement("button");
    editBtn.textContent = "✏";
    editBtn.className = "edit-btn";
    editBtn.onclick = function () {
        let newTask = prompt("Edit your task:", span.textContent);
        if (newTask !== null && newTask.trim() !== "") {
            span.textContent = newTask.trim();
        }
    };

  
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function () {
        li.remove();
    };

    btnGroup.appendChild(completeBtn);
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    document.getElementById(listId).appendChild(li);
}