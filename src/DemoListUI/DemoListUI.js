import indexTitleIcon from '../indexTitleIcon.png';
import { Link, useParams } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';

import './DemoListUI.css';
// function DemoListUI() {
//   return (
//     <div id="Area1" class="GroupArea" >
//       <div id="Practice Example" class="list-group">
//         <input id="toggle2" class="btn-toggle" type="checkbox" checked />
//           <label class="toggleBtn" for="toggle2">Practice Example</label>
//           <ul>
//             <li><Link to="/Line_Graph">Line_Graph</Link></li>
//           </ul>
//       </div>
//     </div>
//   );
// }
class DemoListUI extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      candidateSelected: false
    }
  }

  onSelectCandidatesClick() {
    this.setState({
      candidateSelected: !this.state.candidateSelected
    });
  }

  render() {
    var sadas = "3vh";
    const host = {
      Top: `${'3vh'}`,
    };
    return (
      <div id="Area1" style={{ marginTop: `${host.Top}` }} class="GroupArea" >
        <div id="Practice Example" class="list-group">
          <input id="toggle2" class="btn-toggle" type="checkbox" checked={this.state.candidateSelected} onChange={e => { this.onSelectCandidatesClick() }} />
          <label class="toggleBtn" for="toggle2">Practice Example</label>
          <ul>
            {/* <li><Link to={`/NativeHTML:222`} state={{ from: "props-v-state" }}>NativeHTML</Link></li> */}
            <li><Link to="/DemoListUI">DemoListUI</Link></li>

            <li><Link to="/NativeHTMLGeneratorSlopeEquation">NativeHTML</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}


//export default DemoListUI;
export default DemoListUI;
