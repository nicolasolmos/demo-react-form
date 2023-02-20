import './App.css';
import DniForm from './components/DniForm/DniForm';
import nationalities from './nationalities';
import { useState, useCallback } from 'react';
import SuccessScreen from './components/SuccessScreen/SuccessScreen';

function App() {
  const [success, setSuccess] = useState(false);
  const [dniData, setDniData] = useState({});
  const handleSuccess = useCallback((dniData) => {
    setDniData(dniData);
    setSuccess(true);
  }, []);

  return (
    <div className="App">
      {!success && <DniForm nationalities={nationalities} onSuccess={handleSuccess} />}
      {success && <SuccessScreen dniData={dniData} />}
    </div>
  );
}

export default App;
