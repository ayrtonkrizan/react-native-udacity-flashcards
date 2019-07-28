import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { defaultPrimaryColor, textprimaryColor, textSecondColor, white, black } from '../utils/colors';

const styles = StyleSheet.create({
	deckCard: {
		alignItems: 'stretch',
		justifyContent: 'space-evenly',
		margin: 10,
		minHeight: 120,
	},
	deckTitle: {
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
		maxHeight:40,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: black,
		shadowOpacity: 0.4,
		elevation: 5,
		flex:1,
		zIndex:5
	} ,
	deckContainer: {
		alignItems: 'center',
		backgroundColor: white,
		justifyContent: 'space-evenly',
		flex:2
	},
	title: {
		color: textprimaryColor,
		fontSize: 30
	},
	cardsNumber: {
		color: textSecondColor,
		fontSize: 15
	}
});

export const Deck = ({ deck, onPress, deckStyle, children }) => (
	<TouchableOpacity onPress={onPress}>
		<View style={[styles.deckCard, deckStyle]}>
			<View style={styles.deckTitle}>
				<Text style={styles.title}>
					{deck.title}
				</Text>
			</View>
			<View style={styles.deckContainer}>
				<Text style={styles.cardsNumber}>
					{`${deck.cards.length} card${deck.cards.length !==1?'s':''}`}
				</Text>
				<Text style={styles.cardsNumber}>
					{deck.quiz && `Last result: ${deck.quiz.score} of ${deck.quiz.cardsTotal}`}
				</Text>
				{children}
			</View>
		</View>
	</TouchableOpacity>
);
