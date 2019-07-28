import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from '../components';
import { backGroundColor, warningColor, white } from '../utils/colors';
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';

class QuizScreen extends Component {

	state = {
		flipped: false,
		cardIndex: 0,
		score: 0
	};

	componentDidMount = async () => {
		await clearLocalNotification();
		setLocalNotification();
	}

	initializeQuiz = () => {
		this.setState({
			flipped: false,
			cardIndex: 0,
			score: 0
		});
	}
	getCardNumber = () => this.state.cardIndex + 1;

	showScore = () => {
		const { score } = this.state;
		Alert.alert('Oww!', score, [
			{ text: 'Try Again', onPress: this.initializeQuiz },
			{ text: 'Go Home', onPress: () => this.props.navigation.navigate('Home') }
		]);
	}

	handleScore = (point) => {
		this.setState(prev => ({
			score: prev.score + point
		}), this.showScore
		);
	};

	handleFlip = () => {
		this.setState(prev => ({ flipped: !prev.flipped }));
	};

	handleAnswer = (type) => {
		const { cardsTotal } = this.props;
		const cardNumber = this.getCardNumber();
		const point = type ? 1 : 0;

		if (cardsTotal === cardNumber) {
			this.handleScore(point);
			return;
		}
		this.setState(prev => ({
			cardIndex: prev.cardIndex + 1,
			flipped: false,
			score: prev.score + point
		}));
	};

	render() {
		const { cards, cardsTotal } = this.props;
		const { cardIndex } = this.state;
		const card = cards[cardIndex];
		const cardNumber = this.getCardNumber();

		return (
			<View style={styles.container}>
				<View style={styles.cardContainer}>
					<Card
						text={this.state.flipped ? card.answer : card.question}
						onPress={this.handleFlip}
						cardsTotal={cardsTotal}
						cardNumber={cardNumber}
						nextCardType={this.state.flipped ? "Card" : "Answer"}
					>
						{this.state.flipped && 
							<View>
								<Button
									label="Yeah, Got it!"
									onPress={() => this.handleAnswer(true)}
									styleBtn={{ backgroundColor: white, borderColor: backGroundColor, border: 2 }}
									styleLabel={{ color: backGroundColor }}
								/>
								<Button
									label="Oops!"
									onPress={() => this.handleAnswer(false)}
									styleBtn={{ backgroundColor: warningColor }}
								/>
							</View>
						}
					</Card>
				</View>
			</View>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => {
	const { cards } = decks[currentDeck];
	return {
		cards,
		cardsTotal: cards.length
	};
};

export default connect(mapStateToProps)(QuizScreen);


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backGroundColor,
		justifyContent: 'center'
	},
	btnContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	cardContainer: {
		flex: 1,
		margin: 10
	}
});