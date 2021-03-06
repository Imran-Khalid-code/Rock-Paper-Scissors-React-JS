import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';

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
		//setTimeout(() => {
		setCompChoice(random);
		//}, 3000);
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
			<Container>
				<Card className="mb-3" style={{ color: 'black', textAlign: 'center' }}>
					<Card img src="https://picsum.photos/200/100" />
					<Card.Body>
						<Card.Title
							style={{ color: 'red', fontWeight: 'bold', fontSize: '50px' }}
						>
							Rock Paper Scissors
						</Card.Title>
						<Card.Text>
							<div>
								<h1>User Choice : {userChoice} </h1>
								<h1>Computer Choice: {compChoice} </h1>
								<h1>Result: {result} </h1>
							</div>
						</Card.Text>

						<Row>
							<Col className="col-md-12 d-flex justify-content-around">
								{choices.map((choice, index) => (
									<Button
										type="button"
										className="btn btn-success"
										key={index}
										onClick={() => handleClick(choice)}
									>
										{choice}
									</Button>
								))}
							</Col>
						</Row>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default App;
