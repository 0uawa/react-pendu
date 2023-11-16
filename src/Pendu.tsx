import { useState } from 'react';
import './App.css';

function Pendu() {
  const word: string[] = ['v', 'o', 'i', 't', 'u', 'r', 'e'];
  const [letter, setLetter] = useState('');
  const createHiddenWord = (word: string[]) => {
    const res: string[] = [];
    word.map(() => res.push('-'));
    return res;
  };
  const [stepLink, setStepLink] = useState('1');

  const [hiddenWord, setHiddenWord] = useState(createHiddenWord(word));
  const testLetter = (letter: string) => {
    console.log(createHiddenWord(word));
    if (letter in word) {
      console.log('bonne lettre');
      setHiddenWord(
        word.map((l, i) => {
          if (l == letter) {
            hiddenWord[i] = letter;
          }
        })
      );
    } else {
      setStepLink(`${Number(stepLink) + 1}`);
      console.log('mauvaise lettre');
    }
  };

  return (
    <>
      <p>/* mot que l'on doit deviner : {word} */</p>
      <p>{hiddenWord.map()}</p>
      <p>{letter}</p>
      <input
        id="choose"
        size={1}
        maxLength={1}
        onChange={(e) => setLetter(e.target.value)}
      />
      <button onClick={() => testLetter(letter)}>to propose</button>
    </>
  );
}

export default Pendu;
