import React, { useState } from "react";

const TodoListNew = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: Math.random(), title: "", description: "", isEditing: true },
    ]);
  };

  const clearAll = () => {
    setTasks([]);
  };

  const handleChange = (id, field, value) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, [field]: value } : task)),
    );
  };

  const handleSave = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: false } : task,
      ),
    );
  };

  const handleEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => id !== task.id));
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={addTask}
        >
          Add Task
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={clearAll}
        >
          Clear All
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={task.id}>
          {task.isEditing ? (
            <div className="flex flex-col gap-2 w-100">
              <p>{index + 1}</p>
              <p className="font-medium">Title</p>
              <input
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                type="text"
                placeholder="Enter task title"
                name="title"
                value={task.title}
                onChange={(e) => handleChange(task.id, "title", e.target.value)}
              />
              <p className="font-medium">Description</p>
              <textarea
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                placeholder="Enter task title"
                name="description"
                value={task.description}
                onChange={(e) =>
                  handleChange(task.id, "description", e.target.value)
                }
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
                onClick={() => handleSave(task.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-100">
              <span className="text-xl font-semibold">{task.title}</span>
              <span className="whitespace-pre-wrap">{task.description}</span>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
                  onClick={() => handleEdit(task.id)}
                >
                  Edit
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
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
