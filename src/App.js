import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "./Header";
import { Tasks } from "./Tasks";
import { Section } from "./Section";

const tasks = [
  { content: "kupic bulki", done: false },
  { content: "kupic piwko", done: true },
];

let isTaskDone = true;

function App() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={<Buttons tasks={tasks} isTaskDone={isTaskDone} />}
      />
      <Tasks tasks={tasks} isTaskDone={isTaskDone} />
    </>
  );
}

export default App;
