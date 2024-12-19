import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "../../common/Header";
import { TasksList } from "../tasks/TasksList";
import { Section } from "../../common/Section";
import { useState } from "react";
import { useTask } from "../../hooks/useTask";

function Tasks() {
  const [isTaskDone, setIsTaskDone] = useState(false);

  const {
    tasks,
    handleCheckedTask,
    completeAllTasks,
    handleRemoveTask,
    addNewTask,
  } = useTask();

  const toggleHideCompletedTasks = () => {
    setIsTaskDone((prevState) => !prevState);
  };

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addTask={addNewTask} tasks={tasks} />}
      />
      <Section
        title="Lista zadań"
        body={
          <Buttons
            tasks={tasks}
            isTaskDone={isTaskDone}
            handleIsTaskDone={toggleHideCompletedTasks}
            completeAllTasks={completeAllTasks}
          />
        }
      />
      <TasksList
        tasks={tasks}
        isTaskDone={isTaskDone}
        handleCheckedTask={handleCheckedTask}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  );
}

export default Tasks;
