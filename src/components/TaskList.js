import tasks from "../data/Tasks";
import NewItem from "./NewItem";

const TaskList = () => {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <NewItem title={task.title} description={task.description}></NewItem>
        );
      })}
    </div>
  );
};

export default TaskList;
