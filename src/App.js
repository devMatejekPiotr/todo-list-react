import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { Section } from "./Section";
import { useState } from "react";
import { useTask } from "./hooks/useTask";

function App() {
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
      <Tasks
        tasks={tasks}
        isTaskDone={isTaskDone}
        handleCheckedTask={handleCheckedTask}
        handleRemoveTask={handleRemoveTask}
      />
    </>
  );
}

export default App;
