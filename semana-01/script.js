document.getElementById('add-task').addEventListener('click', function() {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') {
        alert('Por favor, insira uma tarefa');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });

    taskItem.appendChild(deleteButton);

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    document.getElementById('task-list').appendChild(taskItem);

    document.getElementById('new-task').value = '';
});
