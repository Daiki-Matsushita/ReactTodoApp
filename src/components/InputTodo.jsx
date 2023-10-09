import React from "react";

// css-in-jsという考え方
// コンポーネントでせっかく分けたので、コンポーネントに当たっているcssは
// cssファイルを見なくてもいい。関心はその具体的なコンポーネントとされる
// デザイナーがcssで管理するというプロジェクトもあるので一概に、
// この書き方が正解というわけではない
const style = {
  backgroundColor: "rgb(93, 217, 222)",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="TODOを入力してね"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
