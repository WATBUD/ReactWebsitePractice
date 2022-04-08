

import React, {useCallback,useState, useEffect} from 'react';


class EffectHook extends React.Component {
  constructor(props) {
    super(props);
    //this.state={time : new Date().toLocaleTimeString()};
    this.state = {
      count: 0
    };
    this.Example();
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
function Example() {
  const [count, setCount] = useState(0);

  // 相似於 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用瀏覽器 API 更新文件標題
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}



export default EffectHook;
