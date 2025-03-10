document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("toggleTheme").addEventListener("click", toggleTheme);
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let category = document.getElementById("category").value;
    let taskList = document.getElementById("taskList");
    
    if (taskInput.value.trim() === "") return;
    
    let li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value} [${category}]</span>`;
    
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "X";
    removeBtn.classList.add("remove-btn");
    removeBtn.onclick = () => removeTask(removeBtn);
    
    li.appendChild(removeBtn);
    li.setAttribute("data-category", category);
    li.addEventListener("click", () => li.classList.toggle("completed"));
    
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function clearAllTasks() {
    document.getElementById("taskList").innerHTML = "";
}

function filterTasks(category) {
    let tasks = document.querySelectorAll("#taskList li");
    tasks.forEach(task => {
        if (category === "all" || task.getAttribute("data-category") === category) {
            task.style.display = "flex";
        } else {
            task.style.display = "none";
        }
    });
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    let btn = document.getElementById("toggleTheme");
    btn.textContent = document.body.classList.contains("dark-theme") ? "Light Mode" : "Dark Mode";
}
