import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { backGroundColor } from '../utils/colors';
import { Deck } from '../components';

export default class DecksScreen extends Component {

	handleDeckPress = deckID => () => {
        console.log('changing deck')
	};

	render() {
		const  decks = {"a": {id: "abc", title:"A", cards:[1,2,3]}, "b": {id: "cde", title:"B", cards:[1]}}
		return (
			<ScrollView
				style={styles.scrollStyle}
				contentContainerStyle={styles.scrollContent}
            >
            {
                Object.values(decks)
                    .map(deck => (
                        <Deck 
                            key={deck.id}
                            deck={deck}
                            onPress={this.handleDeckPress(deck.id)}
                        />
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