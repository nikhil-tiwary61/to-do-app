import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";
import tasksDB from "./data/TasksDB";

function App() {
  const [tasks, setTasks] = useState(tasksDB);
  function addTask(task) {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
    console.log("tasks", tasks);
  }
  return (
    <div className="App">
      <>
        <h1>To-Do List</h1>
        <Form addTask={addTask}></Form>
        <TaskList tasks={tasks}></TaskList>
      </>
    </div>
  );
}

export default App;
