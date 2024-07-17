import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialTasks = [
  { id: 1, surah: "Al-Fatihah", progress: 40 },
  { id: 2, surah: "Al-Baqarah", progress: 60 },
  { id: 3, surah: "Aal-E-Imran", progress: 20 },
];

const GetStarted = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [newTask, setNewTask] = useState({ surah: "", progress: "" });
  const [showForm, setShowForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState("all");

  const handleComplete = (id) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, progress: 100 } : task))
    );
    toast.success("Surah marked as completed!");
  };

  const handleDelete = (id) => {
    const taskToDelete = tasks.find((task) => task.id === id);
    toast.warn(
      <div>
        <p>Mahubtaa inaad Tireysid Task-gaan "{taskToDelete.surah}"?</p>
        <button
          onClick={() => confirmDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
        >
          Confirm
        </button>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  };

  const confirmDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.dismiss();
    toast.warning("Task Removed!");
  };

  const handleUpdate = (task) => {
    setCurrentTask(task);
    setShowUpdateForm(true);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTaskEntry = {
      ...newTask,
      id: tasks.length + 1,
      progress: parseInt(newTask.progress, 10),
    };
    setTasks([...tasks, newTaskEntry]);
    setNewTask({ surah: "", progress: "" });
    setShowForm(false);
    toast.success("Surah added successfully!");
  };

  const handleUpdateTask = (e) => {
    e.preventDefault();
    setTasks(
      tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
    );
    setCurrentTask(null);
    setShowUpdateForm(false);
    toast.success("Surah updated successfully!");
  };

  const filteredTasks = tasks.filter((task) =>
    task.surah.toLowerCase().includes(search.toLowerCase())
  );

  const tasksToShow = filteredTasks.filter((task) => {
    if (filter === "completed") return task.progress === 100;
    if (filter === "in-progress") return task.progress < 100;
    return true;
  });

  return (
    <div className="container mx-auto p-6">
      <ToastContainer />
      <h1 className="text-4xl font-bold mb-6">Get Started</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search tasks"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 mb-4"
        >
          <FontAwesomeIcon icon={faPlus} /> Add New Progress
        </button>
        <button
          onClick={() => setFilter("completed")}
          className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 mb-4 ml-4"
        >
          Completed Progress
        </button>
        <button
          onClick={() => setFilter("in-progress")}
          className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 mb-4 ml-4"
        >
          In Progress
        </button>
      </div>

      {showForm && (
        <form
          onSubmit={handleAddTask}
          className="mb-6 p-4 border rounded shadow bg-white"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Surah Name</label>
            <input
              type="text"
              value={newTask.surah}
              onChange={(e) =>
                setNewTask({ ...newTask, surah: e.target.value })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Progress</label>
            <input
              type="number"
              value={newTask.progress}
              onChange={(e) =>
                setNewTask({ ...newTask, progress: e.target.value })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Add Progress
          </button>
        </form>
      )}

      {showUpdateForm && (
        <form
          onSubmit={handleUpdateTask}
          className="mb-6 p-4 border rounded shadow bg-white"
        >
          <div className="mb-4">
            <label className="block text-gray-700">Surah Name</label>
            <input
              type="text"
              value={currentTask.surah}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, surah: e.target.value })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Progress</label>
            <input
              type="number"
              value={currentTask.progress}
              onChange={(e) =>
                setCurrentTask({ ...currentTask, progress: e.target.value })
              }
              className="p-2 border rounded w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
          >
            Update Progress
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasksToShow.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">{task.surah}</h2>
            <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-green-500 rounded-full"
                style={{ width: `${task.progress}%` }}
              />
            </div>
            <p className="mb-4">Progress: {task.progress}%</p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleComplete(task.id)}
                className="text-green-500"
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
              <button
                onClick={() => handleUpdate(task)}
                className="text-blue-500"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="text-red-500"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStarted;
