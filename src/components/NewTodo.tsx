import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (evt: React.FormEvent) => {
    evt.preventDefault();
    let enteredText = textInputRef.current!.value;
    addTodo(enteredText);
  };

  return (
    <form>
      <div>
        <label htmlFor="todo-text"> Todo Text </label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit" onClick={submitHandler}>
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
