import React from 'react';
import './App.css';
import WordCard from './WordCard';
import Header from './Header';

const words = ["Hello", "React", "JavaScript", "html", "json"];
let selectedWord = words[Math.floor(Math.random()*words.length)];
function App() {
  return (
		<div>
			<Header />
			<WordCard value={selectedWord}/>
		</div>
	);
}

export default App;

