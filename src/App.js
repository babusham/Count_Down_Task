import CountDown from './components/Countdown';
import './App.css';

function App() {
  const newYear = new Date('Jan 1, 2024').getTime();
  return (
    <div className="App">
      <CountDown newYear={newYear} />
    </div>
  );
}

export default App;