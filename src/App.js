import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <>
        <h1>To-Do List</h1>
        <Form></Form>
        <TaskList></TaskList>
      </>
    </div>
  );
}

export default App;
