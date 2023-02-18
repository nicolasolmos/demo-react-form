import logo from './logo.svg';
import './App.css';
import DniForm from './components/DniForm/DniForm';
import nationalities from './nationalities';

function App() {
  return (
    <div className="App">
      <DniForm nationalities={nationalities} />
    </div>
  );
}

export default App;
