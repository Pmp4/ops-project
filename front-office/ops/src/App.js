import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { test } from 'api/service/MemberService';

function App() {
  useEffect(() => {
    console.log(test());
  })

  return (
    <div className="App">
      <header className="App-header">
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
          충돌해결
        </a>
      </header>
    </div>
  );
}

export default App;
