import React from 'react';
import { Link } from 'react-router-dom';

import './DemoListUI.css';
import SlideOut from 'UIDemo/SlideOut';
import {ReactBasicsRoutes,PracticeExampleRoutes,technicalTrainingRoutes,} from '../PageConfig';

class DemoListUI extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      candidateSelectedList: [false,false,false],
      rootBackgroundColor:false
    }
    // this.setRootBackgroundColor=this.setRootBackgroundColor.bind(this);
  }

  onSelectCandidatesClick(index) {
    this.setState(prevState => {
      let newCandidateSelectedList = [...prevState.candidateSelectedList];
      newCandidateSelectedList[index] = !newCandidateSelectedList[index];
      return { candidateSelectedList: newCandidateSelectedList };
    });
  }
  setRootBackgroundColor(color) {
    console.log('%c setRootBackgroundColor', 'background: white; color: red',color);
    this.setState({
      rootBackgroundColor: !this.state.rootBackgroundColor
    });

    document.getElementById('root').style.backgroundColor=color;
  }

  render() {
    const host = {
      Top: `${'0vh'}`,
    };
    return (
      <React.Fragment>
        <div
          id="Area1"
          style={{ marginTop: `${host.Top}`, display: "flex" }}
          className="GroupArea"
        >
          <div id="Practice Example" className="list-group">
            <input
              id="toggle1"
              className="btn-toggle"
              type="checkbox"
              checked={this.state.candidateSelected}
              onChange={(e) => {
                this.onSelectCandidatesClick(0);
              }}
            />
            <label className="toggleBtn" htmlFor="toggle1">
              Practice Example
            </label>
            <ul>

              {/* <li><Link to="/DemoListUI">DemoListUI</Link></li> */}
              <li ><Link to="/NativeHTML/Generator Slope Equation">Generator Slope Equation</Link></li>
              <li ><Link to="/NativeHTML/Canvas Fireball Follow Exercise">Canvas Fireball Follow Exercise</Link></li>
              {PracticeExampleRoutes.map((link,index) => (
                <li key={index}>
                  <Link to={link.path?link.path:'/'+link.text}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div id="ReactBasics" className="list-group">
            <input
              id="toggle3"
              className="btn-toggle"
              type="checkbox"
              checked={this.state.candidateSelected2}
              onChange={() => this.onSelectCandidatesClick(1)}
            />
            <label className="toggleBtn" htmlFor="toggle3">
              React-Basics
            </label>
            <ul>
            {ReactBasicsRoutes.map((link,index) => (
                <li key={index}>
                  <Link to={link.path?link.path:'/'+link.text}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="technicalTrainingRoutes" className="list-group">
            <input
              id="toggle_4"
              className="btn-toggle"
              type="checkbox"
              checked={this.state.candidateSelected2}
              onChange={() => this.onSelectCandidatesClick(2)}
            />
            <label className="toggleBtn" htmlFor="toggle_4">
              Technical Training
            </label>
            <ul>
            {technicalTrainingRoutes.map((link,index) => (
                <li key={index}>
                  <Link to={link.path?link.path:'/'+link.text}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <SlideOut setBackgroundColor={this.setRootBackgroundColor.bind(this)} />
      </React.Fragment>
    );
  }
}


//export default DemoListUI;
export default DemoListUI;
