document.addEventListener("DOMContentLoaded", () => {
      const taskNameInput = document.getElementById("taskName");
      const taskCategorySelect = document.getElementById("taskCategory");
      const addTaskBtn = document.getElementById("addTaskBtn");
      const filterCategorySelect = document.getElementById("filterCategory");
      const taskList = document.getElementById("taskList");
      const clearAllBtn = document.getElementById("clearAllBtn");
  
      const tasks = [];
  
      const renderTasks = (filter = "All") => {
          taskList.innerHTML = "";
          const filteredTasks = tasks.filter(task => filter === "All" || task.category === filter);
  
          filteredTasks.forEach((task, index) => {
              const li = document.createElement("li");
              li.className = task.completed ? "completed" : "";
              li.innerHTML = `
                  ${task.name} - <strong>${task.category}</strong>
                  <div>

                      <button onclick="toggleComplete(${index})" style="background-color:red ; color:white ">Complete</button>

                      <button onclick="removeTask(${index})" style="background-color:red ; color:white ">Remove</button>
                  </div>
              `;
              taskList.appendChild(li);
          });
      };
  
      // Add the task

      const addTask = () => {

          const name = taskNameInput.value.trim();
          const category = taskCategorySelect.value;
  
          if (name === "") {
              alert("Task name cannot be empty.");
              return;
          }
  
          tasks.push({ name, category, completed: false });
          taskNameInput.value = "";
          renderTasks(filterCategorySelect.value);
      };
  


      const toggleComplete = (index) => {
          tasks[index].completed = !tasks[index].completed;
          renderTasks(filterCategorySelect.value);
      };

    // Remove task

      const removeTask = (index) => {
          tasks.splice(index, 1);
          renderTasks(filterCategorySelect.value);
      };
  
      //Clear all tasks
      
      const clearAllTasks = () => {
          tasks.length = 0;
          renderTasks();
      };
  

      addTaskBtn.addEventListener("click", addTask);
      filterCategorySelect.addEventListener("change", () => renderTasks(filterCategorySelect.value));
      clearAllBtn.addEventListener("click", clearAllTasks);
  
      

      window.toggleComplete = toggleComplete;
      window.removeTask = removeTask;


  });
  
