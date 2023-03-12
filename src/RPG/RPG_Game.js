import React, { useState,useEffect,useReducer,Component } from 'react';
//import { withRouter } from 'react-router-dom';

import "./RPG_Game.css";
import * as RPG_GameMapConfig from './RPG_GameMapConfig.js';
import * as RPG_GameModule from './RPG_GameModule.js';

class CustomName extends Component {
  //var CentralManager=_CentralManager;

  constructor(props) {
    super(props);
    console.log('%c constructor:', 'color: green', this);
    //this.CentralManager=new RPG_GameModule.CentralManager();
    this.CentralManager=new RPG_GameModule.CentralManager();
    this.state = {
      myNativeClassValue: this.CentralManager,
    };

  }
  componentDidMount(){//rendering completed
    //const { location } = this.props;
    console.log('%c this.props:', 'color: green', this.props);
    this.forceUpdate();

    this.CentralManager.enterMap(RPG_GameMapConfig.NOVICE_MAP);
    console.log('%c componentDidMount:', 'color: green', this.CentralManager);
        // 設置定時器，每 1 秒檢查一次原生 JavaScript class 的值是否發生變化
        this.timer = setInterval(() => {
          //const myNativeClassValue = CentralManager;

          //if (myNativeClassValue._LogMessage !== this.state.myNativeClassValue._LogMessage) {
            //console.log('%c 觸發不等於:', 'color: blue');
             
            this.setState({ myNativeClassValue:this.CentralManager });
            console.log('%c myNativeClassValue:', 'color: green', this.CentralManager._LogMessage.length, this.state.myNativeClassValue._LogMessage.length);

          //}
        }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('%c componentDidUpdate:', 'color: green', prevState);
    // if (myClassInstance._LogMessage !== prevState.myClassInstance) {
    //   this.setState({ myClassInstance: myClassInstance._LogMessage });
    // }
  }
  componentWillUnmount(){
    console.log('%c componentWillUnmount:', 'color: blue');
    //console.log(this.props.location);
    //const location = useLocation();

    clearInterval(this.timer);

    this.CentralManager.centralBeforeDestroy();
    //this.state=null;
    //this.props.location.reload();//this.$router.go(0);
    // const history = useHistory();
    // history.replace('/');


  }
  //const [state, forceUpdate] = useReducer(CentralManager.getLogMessage,[]);
  render() {
    //const { myClassInstance } = this.state;
    //console.log('%c myClassInstance:', 'color: green', myClassInstance);
    
    return (
      <section id="MainScreen">
      <div id="LogMessage">
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
