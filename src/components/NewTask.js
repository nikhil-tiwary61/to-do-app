import { useState } from "react";
import "./NewTask.css";

export default function NewItem({ title, description }) {
  let [status, setStatus] = useState("Pending");
  function handleClick(e) {
    e.stopPropagation();
    status === "Pending" ? setStatus("Completed") : setStatus("Pending");
  }
  return (
    <div className="task" onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>Status : {status}</div>
    </div>
  );
}
