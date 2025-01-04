function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const completionMessage = document.getElementById('completionMessage');

    const task = taskInput.value.trim();
    if (task === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');

    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.className = 'task-text';

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.className = 'complete';
    completeBtn.onclick = function () {
        taskText.classList.toggle('completed');
        completeBtn.classList.toggle('completed-btn');
        checkAllTasksCompleted();
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
        checkAllTasksCompleted();
    };

    li.appendChild(completeBtn);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
    taskInput.focus();

    checkAllTasksCompleted();
}

function checkAllTasksCompleted() {
    const taskList = document.getElementById('taskList');
    const tasks = taskList.querySelectorAll('li .task-text');
    const completionMessage = document.getElementById('completionMessage');

    if (tasks.length > 0 && Array.from(tasks).every(task => task.classList.contains('completed'))) {
        completionMessage.style.display = 'block';
    } else {
        completionMessage.style.display = 'none';
    }
}