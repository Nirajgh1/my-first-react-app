import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Niraj Suddala's Github</h1>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Click here to goto my GitHub.
        </p>
        <a
          className="App-link"
          href="https://github.com/Nirajgh1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
