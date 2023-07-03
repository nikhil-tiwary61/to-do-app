import { useState } from "react";

export default function Form({ addTask }) {
  const [task, setTask] = useState(null);
  function handleChange(e) {
    e.stopPropagation();
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    addTask(task);
  }
  return (
    <div className="form">
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        onChange={handleChange}
        placeholder="Description"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
