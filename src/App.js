import logo from './logo.svg';
import './App.css';
import Desktop from './Components/Desktop/Desktop';
import Mobile from './Components/Mobile/Mobile';

function App() {
  return (
    <div className="App">
      <div className='desktop'>
        <Desktop />
      </div>
      <div className='mobile'>
        <Mobile  />
      </div>
    </div>
  );
}

export default App;
