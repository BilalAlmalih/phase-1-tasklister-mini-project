
const taskForm = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

taskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const taskInput = document.getElementById('new-task-description');
  const task = document.createElement('li');
  task.innerText = taskInput.value;
  taskList.appendChild(task);
  taskInput.value = '';
});
