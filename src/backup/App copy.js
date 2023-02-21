import logo from './logo.svg';
import indexTitleIcon from './indexTitleIcon.png';
import Square from './index.js';


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={indexTitleIcon} className="App-logo" alt="indexTitleIcon" />
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
