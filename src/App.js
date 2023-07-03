import "./App.css";
import Form from "./components/Form";
import NewItem from "./components/NewItem";

function App() {
  return (
    <div className="App">
      <>
        <h1>To-Do List</h1>
        <Form></Form>
        <NewItem></NewItem>
      </>
    </div>
  );
}

export default App;
