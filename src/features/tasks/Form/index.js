import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";
import { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

export const Form = () => {
  const [formValue, setFormValue] = useState({});
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value.trim(),
    }));
  };

  const handleSubmitNewTask = (event) => {
    event.preventDefault();

    if (!formValue.content) return;

    dispatch(
      addTask({
        id: nanoid(),
        content: formValue.content,
        done: false,
      })
    );

    inputRef.current.focus();
    setFormValue({});
  };

  return (
    <StyledForm onClick={handleSubmitNewTask}>
      <Input
        name="content"
        value={formValue.content || ""}
        onChange={handleInputChange}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};
