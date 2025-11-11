import React, { useEffect, useState } from "react";

const TodoListNew = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    setTasks((prev) => [
      ...prev,
      { id: Math.random(), title: "", description: "", isEditing: true },
    ]);
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  const handleSave = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: false } : task
      )
    );
  };

  const handleChange = (id, name, value) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [name]: value } : task))
    );
  };

  const handleEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, isEditing: true } : task))
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <button
          className="cursor-pointer bg-blue-500 rounded px-3 py-1 text-white"
          onClick={handleAdd}
        >
          Add Task
        </button>
        <button
          className="cursor-pointer bg-blue-500 rounded px-3 py-1 text-white"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={task.id}>
          {task.isEditing ? (
            <div>
              <p>{index + 1}</p>
              <p>Title</p>
              <input
                className="border rounded"
                type="text"
                placeholder="Enter task title"
                name="title"
                value={task.title}
                onChange={(e) => handleChange(task.id, "title", e.target.value)}
              />
              <p>Description</p>
              <textarea
                className="border rounded"
                placeholder="Enter task title"
                name="description"
                value={task.description}
                onChange={(e) =>
                  handleChange(task.id, "description", e.target.value)
                }
              />
              <button
                className="cursor-pointer bg-blue-500 rounded px-3 py-1 text-white"
                onClick={() => handleSave(task.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              <span>{task.title}</span>
              <span>{task.description}</span>
              <div className="flex gap-1">
                <button
                  className="cursor-pointer bg-blue-500 rounded px-3 py-1 text-white"
                  onClick={() => handleEdit(task.id)}
                >
                  Edit
                </button>
                <button
                  className="cursor-pointer bg-red-500 rounded px-3 py-1 text-white"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoListNew;
