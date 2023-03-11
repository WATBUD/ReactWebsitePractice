import React, { useState,useEffect,useReducer,Component } from 'react';
import "./RPG_Game.css";
import * as RPG_GameMapConfig from './RPG_GameMapConfig.js';
import * as RPG_GameModule from './RPG_GameModule.js';
const CentralManager =new RPG_GameModule.CentralManager()

class CustomName extends Component {
  //var CentralManager=_CentralManager;
  constructor(props) {
    super(props);

    this.state = {
      myNativeClassValue: CentralManager,
    };

  }
  componentDidMount(){//rendering completed
    CentralManager.enterMap(RPG_GameMapConfig.NOVICE_MAP);
    console.log('%c componentDidMount:', 'color: green', CentralManager);
        // 設置定時器，每 1 秒檢查一次原生 JavaScript class 的值是否發生變化
        setInterval(() => {
          //const myNativeClassValue = CentralManager;

          //if (myNativeClassValue._LogMessage !== this.state.myNativeClassValue._LogMessage) {
            //console.log('%c 觸發不等於:', 'color: blue');
            this.setState({ CentralManager });
            console.log('%c myNativeClassValue:', 'color: green', CentralManager._LogMessage.length, this.state.myNativeClassValue._LogMessage.length);

          //}
        }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate:', 'color: green', prevState);
    // if (myClassInstance._LogMessage !== prevState.myClassInstance) {
    //   this.setState({ myClassInstance: myClassInstance._LogMessage });
    // }
  }
  //const [state, forceUpdate] = useReducer(CentralManager.getLogMessage,[]);
  render() {
    //const { myClassInstance } = this.state;
    //console.log('%c myClassInstance:', 'color: green', myClassInstance);

    return (
      <section id="MainScreen">
      <div className="visible-scrollbar" 
      style={{position: 'absolute',background: 'red',width:'50%',height:'50%',zIndex: 0}}>
        <ul style={{display: 'flex',flexDirection: 'column-reverse'}}>
        {this.state.myNativeClassValue._LogMessage.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        </ul>
      </div>
      <canvas id="MiniMap">
      </canvas>
      <div id="DisplayOptions">
  
      </div>
  
      
    </section>
    );
  }


  // useEffect(() => {
  //   console.log('Render completed');
  //   CentralManager.enterMap(RPG_GameMapConfig.NOVICE_MAP);
  // }, []);

}
export default CustomName;
