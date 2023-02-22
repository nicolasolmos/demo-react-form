import DniForm from './components/DniForm/DniForm';
import nationalities from './nationalities';
import { useState, useCallback } from 'react';
import SuccessScreen from './components/SuccessScreen/SuccessScreen';
import { Navbar } from './components/Navbar/Navbar';
import './styles/sizes.module.css'
import { Footer } from './components/Footer/Footer';

function App() {
  const [success, setSuccess] = useState(false);
  const [dniData, setDniData] = useState({});
  const handleSuccess = useCallback((dniData) => {
    setDniData(dniData);
    setSuccess(true);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {!success && <DniForm nationalities={nationalities} onSuccess={handleSuccess} />}
      {success && <SuccessScreen dniData={dniData} />}
      <Footer/>
    </div>
  );
}

export default App;
