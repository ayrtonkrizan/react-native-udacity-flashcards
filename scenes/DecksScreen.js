import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { backGroundColor } from '../utils/colors';
// import { Deck } from '../components';

export default class DecksScreen extends Component {

	handleDeckPress = deckID => () => {
        console.log('changing deck')
	};

	render() {
		const  decks = {"a": {title:"A"}, "b": {title:"B"}}
		return (
			<ScrollView
				style={styles.scrollStyle}
				contentContainerStyle={styles.scrollContent}
            >
            {
                Object.values(decks)
                    .map(deck => (
                        <Text key={deck.title}>{deck.title}</Text>
                        )
                    )
            }
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	scrollStyle: {
		backgroundColor: backGroundColor
	},
	scrollContent: {
		justifyContent: 'space-around',
		backgroundColor: backGroundColor,
		paddingTop: 5
	}
});