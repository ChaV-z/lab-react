import React, { useState } from 'react';
import _, { attempt } from 'lodash';
import CharacterCard from './CharacterCard';
import DisplayWord from "./displayWord";

const prepareStateFromWord = given_word => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt : 1,
        guess: '',
        completed: false,
        maxWrong: 6
    }
}



export default function WordCard(props){
    const [state, setState] = useState(prepareStateFromWord(props.value))

    const activationHandler = c => { 
        console.log(`${c} has been activated.`)
        let guess = state.guess + c
        let attempt = state.attempt
        setState({...state, guess})
        console.log(guess)

        if(guess.length === state.word.length){
            if(guess === state.word){
                alert('yeah! You won!!')
                setState({...state, guess: '', completed: true})
            }
            else{
                if(attempt<=2){
                    alert("Wrong!");
                    setState({ ...state, guess: "", attempt: state.attempt + 1 });
                    console.log("before", attempt);
                    attempt = state.attempt + 1;
                    console.log("after ", attempt);
                }
                else{
                    alert("noo! You lost!!");
                }
            }
        }
    }

    return (
			<>
				<div>
					{state.chars.map((c, i) => (
						<DisplayWord
							value={c}
							key={i}
							activationHandler={state.guess}
						/>
					))}
				</div>
				<div>
					{state.chars.map((c, i) => (
						<CharacterCard
							value={c}
							key={i}
							activationHandler={activationHandler}
							attempt={state.attempt}
						/>
					))}
				</div>
			</>
		);
}