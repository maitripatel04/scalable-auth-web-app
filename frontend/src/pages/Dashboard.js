import { useState, useEffect } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async () => {
    await API.post("/tasks", { title, description });
    setTitle(""); setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(()=>{ fetchTasks(); }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
      <div className="my-4 flex gap-2">
        <input type="text" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="border p-2"/>
        <input type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} className="border p-2"/>
        <button onClick={addTask} className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
      </div>
      <ul>
        {tasks.map(task=>(
          <li key={task._id} className="flex justify-between border p-2 my-1">
            <span>{task.title}: {task.description}</span>
            <button onClick={()=>deleteTask(task._id)} className="bg-red-500 text-white px-2 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
