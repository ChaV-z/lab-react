import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
const word = "Hello";
function App() {
  return (
    <div>
      { Array.from(props.value).map((c, i) => <CharacterCard value={c} key={i}/>) }
    </div>
  );
}

export default App;

