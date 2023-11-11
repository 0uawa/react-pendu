import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  const routeChange = () => {
    navigate(`/game`);
  };
  const [word, setword] = useState('');

  return (
    <>
      <p>Choose a word : </p>
      <input
        id="wordChoosen"
        type="text"
        onChange={(e) => setword(e.target.value)}
      />
      <button onClick={routeChange}>submit</button>
      <p></p>
    </>
  );
}

export default App;
