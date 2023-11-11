import { useState } from 'react';
import './App.css';

function Pendu() {
  const word: string = 'voiture';
  const [foundLetter, setFoundLetter] = useState();
  const validLetter = (letter: string) => word.includes(letter);

  return (
    <>
      <p>/* mot que l'on doit deviner : {word} */</p>
      <p>{}</p>
      <input size={1} maxLength={1} />
      <button>to propose</button>
    </>
  );
}

export default Pendu;
