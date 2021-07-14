import React from "react";
import './App.css';
import WordCard from './WordCard';
import Header from './Header';

const words = ["Hello", "React", "JavaScript", "html", "json"];
let selectedWord = words[Math.floor(Math.random()*words.length)];
const reset = () => {
	document.location.reload();
}
function App() {
  	return (
			<>
				<Header />
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

