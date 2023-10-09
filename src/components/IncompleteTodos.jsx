import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComp, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了TODO</p>
      <ul>
        {todos.map((todo, index) => {
          console.log("koko");
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
