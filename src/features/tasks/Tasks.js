import { Buttons } from "./Buttons";
import { Form } from "./Form";
import { Header } from "../../common/Header";
import { TasksList } from "../tasks/TasksList";
import { Section } from "../../common/Section";

function Tasks() {
  return (
    <>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section title="Lista zadań" body={<Buttons />} />
      <TasksList />
    </>
  );
}

export default Tasks;
