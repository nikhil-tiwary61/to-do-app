import NewItem from "./NewTask";

export default function TaskList({ tasks }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <NewItem
            key={task.id}
            title={task.title}
            description={task.description}
          ></NewItem>
        );
      })}
    </div>
  );
}
