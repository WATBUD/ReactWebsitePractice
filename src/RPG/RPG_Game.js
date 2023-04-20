import React, { useState,useEffect,useReducer,Component } from 'react';
//import { withRouter } from 'react-router-dom';

import "./RPG_Game.css";
import * as RPG_GameMapConfig from './RPG_GameMapConfig.js';
import * as RPG_GameModule from './RPG_GameModule.js';
import BackpackPage from './BackpackPage';
import Inventory from './Inventory';

class CustomName extends Component {
  //var CentralManager=_CentralManager;
  _items = ['Apple', 'Banana', 'Cherry'];
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
    //console.log('%c componentDidMount:', 'color: green', this.CentralManager);
        // 設置定時器，每 1 秒檢查一次原生 JavaScript class 的值是否發生變化
        this.timer = setInterval(() => {
          //const myNativeClassValue = CentralManager;

          //if (myNativeClassValue._LogMessage !== this.state.myNativeClassValue._LogMessage) {
            //console.log('%c 觸發不等於:', 'color: blue');
             
            this.setState({ myNativeClassValue:this.CentralManager });
            //console.log('%c myNativeClassValue:', 'color: green', this.CentralManager._LogMessage.length, this.state.myNativeClassValue._LogMessage.length);

          //}
        }, 100);
  }
  componentDidUpdate(prevProps, prevState) {
    //console.log('%c componentDidUpdate:', 'color: green', prevState);
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
      <section id="original">
        <section id="MainScreen">
          <div id="LogMessage">
            <ul style={{ display: 'flex', flexDirection: 'column-reverse' }}>
              {this.state.myNativeClassValue._LogMessage.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <canvas id="MiniMap">
          </canvas>
          <div id="DisplayOptions">
            <button type="button" className='Item' style={{ background: '#1eff007a' }} onClick={() => this.CentralManager._BackpackBool = !this.CentralManager._BackpackBool}>背包</button>
            <button type="button" className='Item' style={{ background: '#000dffe0' }} onClick={() => this.CentralManager._AbilityTableBool = !this.CentralManager._AbilityTableBool}>能力</button>
            <button type="button" className='Item' style={{ background: '#000dffe0' }} onClick={() => this.CentralManager.viewAllCoordinates()}>顯示怪物與玩家資訊</button>

          </div>

          {this.CentralManager._BackpackBool ? (
            <div className="FillAreaScreen" style={{ background: '#1eff007a' }}>
              {/* <BackpackPage /> */}
              <Inventory />
              

            </div>) : null}
          {this.CentralManager._AbilityTableBool ? (
            <div className="FillAreaScreen" style={{ background: '#000dffe0' }}>
              AbilityTableBool
            </div>) : null}




        </section>

        {this.CentralManager._CoordinatesPanal ? (
          <ArrayPanel
            height={'80%'}
            items={this.CentralManager.obtainBiologicalInformationOnTheMap()} />) : null}
      </section>
    );
  }


  // useEffect(() => {
  //   console.log('Render completed');
  //   CentralManager.enterMap(RPG_GameMapConfig.NOVICE_MAP);
  // }, []);

}

function ArrayPanel(props) {
  console.log('%c props:', 'color: green', props);

  const items = props.items.map((item, index) =>
  //<li key={index}>{item}</li>
  <div key={index}>{JSON.stringify(item)}</div>
);
  return (
    <div className="visible-scrollbar" style={{height:props.height}}>
      {/* <h2>----------Child Component----------</h2> */}
     {items}
    </div>
  );
}




export default CustomName;
