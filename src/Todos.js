import { memo } from "react";

const Todos = ({ todos, addTodo }) => {
  console.log('%c todos','background: red; color: white',todos,addTodo);
  return (
    <>
      <h2>My Todos</h2>
      {
        todos.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      }
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);