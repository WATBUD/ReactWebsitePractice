// import logo from './logo.svg';
import indexTitleIcon from './indexTitleIcon.png';
//import Square from './index.js';


import './App.css';

function T_App() {
  return (

    <div id="Area1" class="GroupArea" >
      <div id="Practice Example" class="list-group">
        <input id="toggle2" class="btn-toggle" type="checkbox" checked>
          <label class="toggleBtn" for="toggle2">Practice Example</label>
          <ul>
            <li><Link to="/Line_Graph">Line_Graph</Link></li>
          </ul>
          {this.props.children}
      </div>
      </div>
  );
}

export default T_App;
