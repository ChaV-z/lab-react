import React from 'react';
import './App.css';
import WordCard from './WordCard';
import Header from './Header';

const word = "Hello";
function App() {
  return (
		<div>
			<Header />
			<WordCard value={word}/>
		</div>
	);
}

export default App;

