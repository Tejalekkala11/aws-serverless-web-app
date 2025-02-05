import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.taskId}>{task.taskName}</li>
      ))}
    </ul>
  );
};

export default TaskList;


