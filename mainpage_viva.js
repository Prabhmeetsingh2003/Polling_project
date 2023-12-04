// mainpage_viva.js
import React, { useState } from 'react';
import './styles.css';

const TaskForm = ({ addTask, tasks, markTaskAsCompleted }) => {
  const [taskDescription, setTaskDescription] = useState('');

  const handleInputChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the description is not empty
    if (taskDescription.trim() !== '') {
      // Call the addTask function passed as a prop from the parent component
      addTask({ description: taskDescription });

      // Clear the input field
      setTaskDescription('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add form data</h2>
        <input
          type="text"
          placeholder="Enter task description"
          value={taskDescription}
          onChange={handleInputChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <div>
        <h2>Pending Tasks</h2>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task.description}
              <button onClick={() => markTaskAsCompleted(index)}>
                Mark as Completed
              </button>
            </li>
          ))}
        </ul>

        <h2>Completed tasks</h2>
      </div>
    </div>
  );
};

export default TaskForm;
