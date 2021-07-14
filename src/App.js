import React from "react";
import './App.css';
import WordCard from './WordCard';

const words = ["Hello", "React", "JavaScript", "html", "json"];
let selectedWord = words[Math.floor(Math.random()*words.length)];
const reset = () => {
	document.location.reload();
}
function App() {
  	return (
			<>
				<h1>What's the word?</h1>
            	<p className="dotted">Your mission : Sort the words correctly!</p>
				<div className='frame'>
					<WordCard value={selectedWord} />
				</div>
				<div>
					<button className="reset" onClick={reset}>
						RESET
					</button>
				</div>
			</>
		);
}

export default App;

