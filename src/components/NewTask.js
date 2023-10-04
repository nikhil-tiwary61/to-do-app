import { useState } from "react";
import "./NewTask.css";

export default function NewItem({ id, title, description, deleteTask }) {
  let [status, setStatus] = useState("Pending");
  function changeStatus(e) {
    e.stopPropagation();
    status === "Pending" ? setStatus("Completed") : setStatus("Pending");
  }
  function handleDelete(e) {
    e.stopPropagation();
    deleteTask(id);
  }
  return (
    <div className={status === "Pending" ? "pending" : "completed"}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="status">Status : {status}</div>
      <button onClick={handleDelete} className="delete">
        X
      </button>
      <button onClick={changeStatus}>
        Mark as {status === "Pending" ? "Completed" : "Pending"}
      </button>
    </div>
  );
}
