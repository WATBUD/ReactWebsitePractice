import React from 'react';
import { Link } from 'react-router-dom';

import './DemoListUI.css';
import SlideOut from 'UIDemo/SlideOut';
// function DemoListUI() {
//   return (
//     <div id="Area1" class="GroupArea" >
//       <div id="Practice Example" class="list-group">
//         <input id="toggle2" class="btn-toggle" type="checkbox" checked />
//           <label class="toggleBtn" htmlFor="toggle2">Practice Example</label>
//           <ul>
//             <li><Link to="/Line_Graph">Line_Graph</Link></li>
//           </ul>
//       </div>
//     </div>
//   );
// }
// var style1 = {
//   position: 'absolute', marginTop: '100px'
// };
class DemoListUI extends React.Component {
  PracticeExampleLinks = [
    { text: "IsDragging" },
    { to: "/NativeHTML/GeneratorSlopeEquation", text: "GeneratorSlopeEquation" },
    { to: "/NativeHTML/Canvas Fireball Follow Exercise", text: "Canvas Fireball Follow Exercise" },
    { text: "OptionsMap" },
    { text: "CSSTutorial" },
    { text: "ProgressDIYUse" },
    { text: "TraversingAndRendering" },
    { to:"/RpgGame",text: "RPG_Game" },
    { text: "TutorialTemplate" },
    { text: "ReactFragment" },
    { text: "LongestCommonPrefix" },
    { text: "ValidParentheses" },
    { text: "MergeTwoSortedLists" },
    { text: "MergeKSortedLists" },
    { text: "FindSumOfFirst_N_Natural_Numbers" },
    { text: "MergeArraysAndSortSlice" },
    { text: "FindFirstSingleNumber" },
    { text: "LengthOfLongestSubstring" },
    { text: "ReverseInteger" },
    { text: "SetTimeoutInsideAForLoopInJavaScript" },
    { text: "AssignASpecificNumberOfUniqueNumbers" },

  ];
  ReactBasicsLinks = [
    { text: "useEffect" },
    { text: "useState" },
    { text: "useContext" },
    { text: "useCallback" },
    { text: "UseOtherComponents" }
  ];
  technical_training = [
    { text: "RomanToInteger13" },
    { text: "ValidPalindrome125" },
    { text: "FibonacciNumber509" },
    { text: "MoveZeroes283" },
    { text: "PalindromeNumber9" },
  ];
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
              {/* <li><Link to={`/NativeHTML:222`} state={{ from: "props-v-state" }}>NativeHTML</Link></li> */}
              {/* <li><Link to="/DemoListUI">DemoListUI</Link></li> */}
              {/* <li ><Link to="/FetchOpenAI">FetchOpenAI</Link></li> */}
              {this.PracticeExampleLinks.map((link,index) => (
                <li key={index}>
                  <Link to={link.to?link.to:'/'+link.text}>{link.text}</Link>
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
            {this.ReactBasicsLinks.map((link,index) => (
                <li key={index}>
                  <Link to={link.to?link.to:'/'+link.text}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="technical_training" className="list-group">
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
            {this.technical_training.map((link,index) => (
                <li key={index}>
                  <Link to={link.to?link.to:'/'+link.text}>{link.text}</Link>
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
