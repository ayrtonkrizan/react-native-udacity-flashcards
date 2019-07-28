import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { defaultPrimaryColor, textprimaryColor } from '../utils/colors';

const styles = StyleSheet.create({
	deckContainer: {
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		justifyContent: 'space-evenly',
		borderRadius: 5,
		margin: 10,
		minHeight: 120,
	},
	title: {
		color: textprimaryColor,
		fontSize: 30
	},
	cardsNumber: {
		color: textprimaryColor,
		fontSize: 15
	}
});

export const Deck = ({ deck, onPress, deckStyle }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={[styles.deckContainer, deckStyle]}>
			<Text style={styles.title}>
				{deck.title}
			</Text>
			<Text style={styles.cardsNumber}>
				3 cards
			</Text>
		</View>
	</TouchableOpacity>
);
