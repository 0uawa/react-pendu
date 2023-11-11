import { useState } from 'react'
import './App.css'

function Pendu() {
  const word : String = "voiture"
  const [foundLetter,setFoundLetter] = useState()
  const validLetter = (letter) =>letter in word?true:false
  return (
    <>
      <p>/* mot que l'on doit deviner : {word} */</p>
      <p>{}</p>
      <input size={1} maxLength={1}/>
      <button>to propose</button>
    </>
  )
}

export default Pendu
