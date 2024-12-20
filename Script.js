function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <span>${taskInput.value}</span>
            <div class="actions">
                <button onclick="editTask(this)"><img src="Images/editing.png" alt="Edit"></button>
                <button onclick="deleteTask(this)"><img src="Images/bin.png" alt="Delete"></button>
            </div>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newTask = prompt("Edit task:", taskText);

    if (newTask) {
        taskItem.querySelector('span').innerText = newTask;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}