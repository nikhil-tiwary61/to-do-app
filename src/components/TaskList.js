import NewItem from "./NewTask";

export default function TaskList({ tasks, deleteTask }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <NewItem
            key={task.id}
            id={task.id}
            title={task.title}
            description={task.description}
            deleteTask={deleteTask}
          ></NewItem>
        );
      })}
    </div>
  );
}
