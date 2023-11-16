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
  const [life, setLife] = useState('1');
  const [letterAlreadyUse,setLetterAlreadyUse] = useState([''])

  const [hiddenWord, setHiddenWord] = useState(createHiddenWord(word));
  const end = (life : number) => life==8
  const testLetter = (letter: string) => {
    
    console.log(hiddenWord);
    if(letterAlreadyUse.includes(letter)){
      console.log('lettre deja utilisé')
    }
    else if (word.includes(letter)) {
      setLetterAlreadyUse([...letterAlreadyUse,letter])
      console.log('bonne lettre');
      setHiddenWord(
        word.map((l,i) => {
          if (l == letter) {
            return `${l}`
          }else{
            return hiddenWord[i]
          }
        })
      );
    
    } else {
      setLetterAlreadyUse([...letterAlreadyUse,letter])
      setLife(`${Number(life) + 1}`);
      console.log('mauvaise lettre');
      if(end(life)){
        
      }
    }
  };

  return (
    <>
      <p>/* mot que l'on doit deviner : {word} */</p>
      <p>{hiddenWord.map((letter)=>letter)}</p>
      <p>{letter}</p>
      <input
        id="choose"
        size={1}
        maxLength={1}
        onChange={(e) => setLetter(e.target.value)}
      />
      <button onClick={() => testLetter(letter)}>to propose</button>
      <img src={`/src/assets/penduPictures/${life}.png`}></img>
    </>
  );
}

export default Pendu;
