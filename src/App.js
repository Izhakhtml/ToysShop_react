import logo from './logo.svg';
import './App.css';
import react from 'react';
import Toy from './components/Timer/toys/toy.componenet';
// import Pazel from './components/Timer/toys/Pazel.component';
// export const UserContext = react.createContext();
import { MyProvider } from './components/Timer/toys/MyProvider.component';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Toy toyName="dool"/> */}
        <MyProvider/>
         {/* <Pazel pazelToy ="izhak"/> */}
      </header>
    </div>

  );
}

export default App;
