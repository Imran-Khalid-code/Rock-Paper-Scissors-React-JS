import React, { useState, useEffect } from 'react';
const App = () => {
	const [userChoice, setUserChoice] = useState(null);
	const [compChoice, setCompChoice] = useState(null);
	const [result, setResult] = useState(null);
	const choices = ['rock', 'paper', 'scissors'];

	const handleClick = (value) => {
		setUserChoice(value);
		compScore();
	};

	const compScore = () => {
		const random = choices[Math.floor(Math.random() * choices.length)];
		setCompChoice(random);
	};

	useEffect(() => {
		{
			switch (userChoice + compChoice) {
				case 'scissorspaper':
				case 'rockscissors':
				case 'paperrock':
					setResult('You Win!');
					break;
				case 'paperscissors':
				case 'scissorsrock':
				case 'rockpaper':
					setResult('You Loose');
					break;
				case 'paperpaper':
				case 'scissorsscissors':
				case 'rockrock':
					setResult('You Draw');
					break;
			}
		}
	}, [compChoice, userChoice]);

	return (
		<div>
			<h1>User Choice : {userChoice} </h1>
			<h1>Computer Choice: {compChoice} </h1>
			<h1>Result:{result}</h1>

			{/* <button onClick={() => handleClick('rock')}>Rock</button>
			<button onClick={() => handleClick('paper')}>Paper</button>
			<button onClick={() => handleClick('scissors')}>Scissors</button> */}
			{choices.map((choice, index) => (
				<button key={index} onClick={() => handleClick(choice)}>
					{choice}
				</button>
			))}
		</div>
	);
};

export default App;

//extension - add timeout for response.
