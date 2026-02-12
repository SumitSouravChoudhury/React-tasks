import { useEffect, useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    if (savedTasks && savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random(), title: "", description: "", isEditing: true },
    ]);
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

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={handleAdd}
        >
          Add task
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>

      {tasks.map((task, index) => (
        <div key={task.id}>
          {task.isEditing ? (
            <div className="flex flex-col gap-2 w-100">
              <span>{index + 1}</span>
              <p className="font-medium">Title</p>
              <input
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                type="text"
                name="title"
                value={task.title}
                onChange={(e) => handleChange(task.id, "title", e.target.value)}
              />
              <p className="font-medium">Description</p>
              <textarea
                className="border border-gray-300 rounded px-3 py-2 focus:outline-none"
                name="description"
                value={task.description}
                onChange={(e) =>
                  handleChange(task.id, "description", e.target.value)
                }
              ></textarea>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold cursor-pointer py-2 px-4 rounded"
                onClick={() => handleSave(task.id)}
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2 w-100">
              <span className="font-medium">{index + 1}</span>
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p className="whitespace-pre-wrap">{task.description}</p>
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

export default TodoList;
