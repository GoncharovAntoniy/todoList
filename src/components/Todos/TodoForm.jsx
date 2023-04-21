import s from "./TodoForm.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const TodoForm = ({ addTodo }) => {
  const [textForm, setTextForm] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
    addTodo(textForm);
    setTextForm("");
  }

  return (
    <form onSubmit={handleFormSubmit} className={s.form}>
      <input className={s.input}
        value={textForm}
        onChange={(e) => setTextForm(e.target.value)}
        type="text"
        placeholder="Enter new todo"
      />
      <Button className={s.button} type="submit" title="submit">Submit</Button>
    </form>
  );
};

export default TodoForm;
