import { useState,useCallback, useEffect } from "react";
import Todos from "./Todos";
//Louis(路易斯) 論點:預設useState 直接CALL 每次他都會從無到有產生
//Louis(路易斯) 使用useCallback 不會從無到有產生
//The React useCallback Hook returns a memoized callback function.
//Think of memoization as caching a value so that it does not need to be recalculated.


function Test1() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    console.log('%c addTodo_useCallback','background: red; color: white',addTodo);

    setTodos((t_temp) => [...t_temp, "New Todo~~~~~~"]);
  };
  // const addTodo = useCallback(() => {
  //   console.log('%c addTodo_useCallback','background: red; color: white',addTodo);
  //   setTodos((t) => [...t, "New Todo"]);
  // }, [todos])
  useEffect(() => {
    console.log('%c T_useCallback_useEffect', 'background: blue; color: white');
  }, []);//後面必須加入才會重覆Call

  var style1 = {
    position: 'absolute', marginTop: '100px'
  };
  return (
    <>
    <div style={style1}>
      <Todos todos={todos} addTodo={addTodo} />

      </div>
      <hr />
      {/* <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div> */}
    </>
  );
};

export default Test1;


