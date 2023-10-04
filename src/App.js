import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import tasksDB from "./data/TasksDB";

function App() {
  const [tasks, setTasks] = useState(tasksDB);
  function addTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    console.log(tasks);
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function changeStatus(id, status) {
    const otherTasks = tasks.filter((task) => task.id !== id);
    const targetTask = tasks.filter((task) => task.id === id);
    targetTask.status = status === "Pending" ? "Completed" : "Pending";
    setTasks([...otherTasks, targetTask]);
  }
  return (
    <div className="App">
      <>
        <h1>To-Do List</h1>
        <Form addTask={addTask}></Form>
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          changeStatus={changeStatus}
        ></TaskList>
      </>
    </div>
  );
}

export default App;
