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
  constructor(props) {
    super(props);

    this.state = {
      candidateSelected: false,
      candidateSelected2:false,
      rootBackgroundColor:false
    }
    // this.setRootBackgroundColor=this.setRootBackgroundColor.bind(this);
  }

  onSelectCandidatesClick() {
    this.setState({
      candidateSelected: !this.state.candidateSelected
    });
  }
  onSelectCandidatesClick2() {
    this.setState({
      candidateSelected2: !this.state.candidateSelected2
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
      <div id="Area1" style={{ marginTop: `${host.Top}`,display:'flex' }} className="GroupArea" >
        <div id="Practice Example" className="list-group">
          <input id="toggle1" className="btn-toggle" type="checkbox" checked={this.state.candidateSelected} 
          onChange={e => { this.onSelectCandidatesClick() }} 
          />
          <label className="toggleBtn" htmlFor="toggle1">Practice Example</label>
          <ul>
          <li ><Link to="/IsDragging">IsDragging</Link></li>

            {/* <li><Link to={`/NativeHTML:222`} state={{ from: "props-v-state" }}>NativeHTML</Link></li> */}
            {/* <li><Link to="/DemoListUI">DemoListUI</Link></li> */}
            <li key="1"><Link to="/NativeHTML/GeneratorSlopeEquation">GeneratorSlopeEquation</Link></li>
            <li key="2"><Link to="/NativeHTML/Canvas Fireball Follow Exercise">Canvas Fireball Follow Exercise</Link></li>
            <li key="5"><Link to="/OptionsMap">OptionsMap</Link></li>
            <li key="6"><Link to="/CSSTutorial">CSSTutorial</Link></li>
            <li key="7"><Link to="/ProgressDIYUse">ProgressDIYUse</Link></li>
            <li ><Link to="/TraversingAndRendering">TraversingAndRendering</Link></li>
            <li ><Link to="/RpgGame">RPG_Game</Link></li>
            <li ><Link to="/TutorialTemplate">TutorialTemplate</Link></li>
            <li ><Link to="/ReactFragment">ReactFragment</Link></li>
            {/* <li ><Link to="/FetchOpenAI">FetchOpenAI</Link></li> */}
            <li ><Link to="/PalindromeNumber">PalindromeNumber</Link></li>
            <li ><Link to="/RomanToInteger">RomanToInteger</Link></li>
            <li ><Link to="/LongestCommonPrefix">LongestCommonPrefix</Link></li>
            <li ><Link to="/ValidParentheses">ValidParentheses</Link></li>
            <li ><Link to="/MergeTwoSortedLists">MergeTwoSortedLists</Link></li>
            <li ><Link to="/MergeKSortedLists">MergeKSortedLists</Link></li>
            <li ><Link to="/FindSumOfFirst_N_Natural_Numbers">FindSumOfFirst_N_Natural_Numbers</Link></li>
            <li ><Link to="/MergeArraysAndSortSlice">MergeArraysAndSortSlice</Link></li>
            <li ><Link to="/FindFirstSingleNumber">FindFirstSingleNumber</Link></li>
            <li ><Link to="/LengthOfLongestSubstring">LengthOfLongestSubstring</Link></li>
            <li ><Link to="/ReverseInteger">ReverseInteger</Link></li>
            <li ><Link to="/SetTimeoutInsideAForLoopInJavaScript">SetTimeoutInsideAForLoopInJavaScript</Link></li>
            <li ><Link to="/AssignASpecificNumberOfUniqueNumbers">AssignASpecificNumberOfUniqueNumbers</Link></li>
            <li ><Link to="/ValidPalindrome125">ValidPalindrome125</Link></li>
          </ul>
        </div>
        <div id="ReactBasics" className="list-group">
          <input id="toggle3" className="btn-toggle" type="checkbox" checked={this.state.candidateSelected2} 
          onChange={()=> this.onSelectCandidatesClick2() }
          />
          <label className="toggleBtn" htmlFor="toggle3">React-Basics</label>
          <ul>
            <li><Link to="/HookEffect">useEffect</Link></li>
            <li><Link to="/UseState">useState</Link></li>
            <li><Link to="/HookContext">useContext</Link></li>
            <li ><Link to="/HookCallback" >useCallback</Link></li>
            <li ><Link to="/UseOtherComponents">UseOtherComponents</Link></li>
          </ul>
        </div>
      </div>
      <SlideOut setBackgroundColor={this.setRootBackgroundColor.bind(this)}/>

      </React.Fragment>
      

    );
  }
}


//export default DemoListUI;
export default DemoListUI;
