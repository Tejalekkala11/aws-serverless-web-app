import React, { useState } from 'react';

const TaskForm = ({ fetchTasks }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const task = { taskId: new Date().toISOString(), taskName };
    await fetch('/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
    });
    setTaskName('');
    fetchTasks();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;

