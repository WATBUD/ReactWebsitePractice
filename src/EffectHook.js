

import React, {useCallback,useState, useEffect} from 'react';
import List from './List.js';
class EffectHook extends React.Component {
  constructor(props) {
    super(props);
    //this.state={time : new Date().toLocaleTimeString()};
    this.state = {
      count: 0
    };
    //Example();
    this.setState({ count: 5 });
    console.log('%c this.state','background: red; color: white',this.state);
  }
  //加入組件建構完成後執行的事件
  componentDidMount() {//Constructor
    document.title = `You clicked ${this.state.count} times`;
    console.log('%c componentDidMount','background: red; color: white',this.state.count,this);
  }
  //state被修改時會執行的函式
  componentDidUpdate() {//Continuous Refresh
    document.title = `You clicked ${this.state.count} times`;
    console.log('%c componentDidUpdate','background: blue; color: white',this.state.count,this);

  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }

  
}
function CustomArrayList({ inputItems }) {
  const [items, setItems] = useState([]);
  console.log('%c CustomArrayList_Enter', 'background: blue; color: white', inputItems);

  useEffect(() => {
    setItems(inputItems())
    console.log('%c CustomArrayList_useEffect', 'background: blue; color: white', inputItems);
  }, [inputItems]);//後面必須加入才會重覆Call

  return items.map(item => <div key={item}>key={item}</div>);
}


function Example() {
  console.log('%c Example', 'background: black; color: red');

  var style1 = {
    position: 'absolute', marginTop: '100px'
  };
  const [count, setCount] = useState(0);
  const [Number, setNumber] = useState(6);

  const getItems= () => {
    return [Number, Number + 1, Number + 2]
  }
  const getItems2 = () => {
    return [Number, Number + 1]
  }
  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    console.log('%c Example_useEffect', 'background: black; color: red', Number);
    document.title = `You clicked ${count} times`;// 使用瀏覽器 API 更新文件標題
  });

  return (
    <div style={style1}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <input type="number" value={Number} onChange={(e) => setNumber(parseInt(e.target.value))}>
      </input>
      <List inputItems={getItems } />
      <CustomArrayList inputItems={getItems2} />

      
    </div>  
    );
}



export default Example;
