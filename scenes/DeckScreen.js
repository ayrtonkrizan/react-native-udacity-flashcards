import React, { Component, Fragment } from 'react';
import { StyleSheet, View, Alert, Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Deck, Button } from '../components';
import { backGroundColor, textprimaryColor, white } from '../utils/colors';
import { removeDeck } from '../store/actions';

const styles = StyleSheet.create({
	container: {
		backgroundColor: backGroundColor,
	},
	btnContainer: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	startLabel: {
		color: textprimaryColor,
		fontSize: 23,
		textAlign: 'center',
		padding: 10
	},
	startContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

class DeckScreen extends Component {
	navigateTo = route => () => this.props.navigation.navigate(route);
	
	removeDeck = () => {
		const { removeDeck, navigation, deck: { title } } = this.props;
		removeDeck(title);
		navigation.goBack();
	}

	handleQuiz = () => {
		const { deck } = this.props;
		if (!deck.cards.length) {
			Alert.alert("There are no cards!", "Add new cards to start a quiz !");
			return;
		}
		this.navigateTo('Quiz')();
	}

	render() {
		const { deck } = this.props;
		return (
			<ScrollView style={styles.container}
				contentContainerStyle={styles.container}
			>
				{deck &&
					<Fragment>
						<Deck
							deck={deck}
							deckStyle={{ minHeight: 400 }}
							onPress={this.handleQuiz}
						>
							<View style={styles.startContainer}>
								<Text style={styles.startLabel}>
									Start Quiz
								</Text>
								<MaterialCommunityIcons
									name='cards-outline'
									size={45}
									color={white}
								/>
							</View>
						</Deck>
						<Button label="Add Card" onPress={this.navigateTo('AddCard')} />
						<Button label="Remove Deck" onPress={this.removeDeck} />
					</Fragment>}
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ decks, currentDeck }) => ({ deck: decks[currentDeck] });

export default connect(mapStateToProps, { removeDeck })(DeckScreen);
