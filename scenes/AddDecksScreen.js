import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { createDeck } from '../store/actions';
import {
	backGroundColor,
	textSecondColor
} from '../utils/colors';
import { TextInput, Button } from '../components';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backGroundColor,
		justifyContent: 'flex-start'
	},
	text: {
		padding: 25,
		color: textSecondColor,
		fontSize: 35,
		textAlign: 'center'
	}
});


class AddDecksScreen extends Component {
	
	state = {
		deckTitle: ''
	};

	handleTextChange = deckTitle => {
		this.setState({ deckTitle });
	};

	clearName = () => this.setState({ deckTitle: '' })

	handleCreateDeck = () => {
		const { deckTitle } = this.state;
		const { createDeck, navigation, decks } = this.props;
		
		if(decks[deckTitle]) {
			Alert.alert("Ops!", "This Deck Name already exists! Choose a different name");
			return;
		}
		createDeck(deckTitle);
		this.clearName();
		navigation.navigate('Deck');
	};

	render() {
		const { deckTitle } = this.state;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>
					What is your new deck name?
				</Text>
				<TextInput
					onChangeText={this.handleTextChange}
					value={deckTitle}
				/>
				<Button
					onPress={this.handleCreateDeck}
					label="Create Deck"
					disabled={!deckTitle}
					setMargin
				/>
			</View>
		);
	}
}

const mapStateToProps = ({ decks }) => ({
	 decks
	});

export default connect(mapStateToProps, { createDeck })(AddDecksScreen);
