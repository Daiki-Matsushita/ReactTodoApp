import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComp = (index) => {
    const newIncompTodos = [...incompleteTodos];
    newIncompTodos.splice(index, 1);
    setIncompleteTodos(newIncompTodos);

    const newCompTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newCompTodos);
  };

  const onClickReturn = (index) => {
    const newCompTodos = [...completeTodos];
    newCompTodos.splice(index, 1);
    setcompleteTodos(newCompTodos);

    const newIncompTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red" }}>
          登録できるTODOは5個までです！消化しろ！！
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos todos={completeTodos} onClickReturn={onClickReturn} />
    </>
  );
};
