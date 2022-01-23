import logo from './logo.svg';
import './App.css';
import Toy from './components/Timer/toys/toy.componenet';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Toy toyName="dool"/>
      </header>
    </div>
  );
}

export default App;
