import { useState } from "react";

import "./todoList.scss";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const handleAdd = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random(), title: "", description: "", isEditing: true },
    ]);
  };

  const handleChange = (id, field, value) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [field]: value } : task))
    );
  };

  const handleEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isEditing: true } : task))
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => id !== task.id));
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add task</button>
      <button onClick={handleClearAll}>Clear All</button>

      {tasks.map((task, index) => (
        <div key={task.id}>
          {task.isEditing ? (
            <div>
              <span>{index + 1}</span>
              <p>Title</p>
              <input
                type="text"
                name="title"
                value={task.title}
                onChange={(e) => handleChange(task.id, "title", e.target.value)}
              />
              <p>Description</p>
              <textarea
                name="description"
                value={task.description}
                onChange={(e) =>
                  handleChange(task.id, "description", e.target.value)
                }
              ></textarea>
              <button>Save</button>
            </div>
          ) : (
            <div>
              <span>{index + 1}</span>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <button onClick={() => handleEdit(task.id)}>Edit</button>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
