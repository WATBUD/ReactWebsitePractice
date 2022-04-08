

import React, {useCallback} from 'react';


class EffectHook extends React.Component {
  constructor(props) {
    super(props);
    //this.state={time : new Date().toLocaleTimeString()};
    this.state = {
      count: 0
    };
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

export default EffectHook;
