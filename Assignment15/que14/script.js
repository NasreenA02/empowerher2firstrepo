const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const searchInput = document.getElementById('searchInput');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Render tasks
function renderTasks(filter = '') {
  taskList.innerHTML = '';
  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(filter.toLowerCase()));
  
  filteredTasks.forEach(task => {
    const li = document.createElement('li');
    li.classList.toggle('completed', task.completed);

    const span = document.createElement('span');
    span.textContent = task.text;
    span.addEventListener('click', () => toggleComplete(task.id));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => removeTask(task.id));

    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Add task
function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  taskInput.value = '';
  renderTasks(searchInput.value);
}

// Toggle completion
function toggleComplete(id) {
  tasks = tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(searchInput.value);
}

// Remove task
function removeTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(searchInput.value);
}

// Event listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});
searchInput.addEventListener('input', () => renderTasks(searchInput.value));

// Initial render
renderTasks();
