import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { textprimaryColor, textSecondColor, defaultPrimaryColor, white, black } from '../utils/colors';

const styles = StyleSheet.create({
	container: {
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		margin: 10,
		minHeight: 500,
	},
	title: {
		color: textprimaryColor,
		fontSize: 30
	},
	titleContainer: {
		backgroundColor: defaultPrimaryColor,
		alignItems: 'center',
		borderTopRightRadius: 5,
		borderTopLeftRadius: 5,
		maxHeight: 40,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: black,
		shadowOpacity: 0.4,
		elevation: 5,
		flex: 1,
		zIndex: 5
	},
	turnLabel: {
		color: textSecondColor,
		fontSize: 23
	},
	turnContainer: {
		alignItems: 'center',
		backgroundColor: white,
		justifyContent: 'space-between',
		minHeight: 300,
		flex: 2,
		paddingTop: 25,
		paddingBottom: 25,
		paddingLeft: 15,
		paddingRight: 15,
	}
});

export const Card = ({
	text,
	onPress,
	children,
	cardNumber,
	cardsTotal,
	nextCardType
}) => (
		<TouchableOpacity style={{flex:1}}onPress={onPress}>
			<View style={[styles.container]}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>{cardNumber} | {cardsTotal}</Text>
				</View>
				<View style={styles.turnContainer}>
					<Text style={styles.turnLabel}>{text}</Text>
					{children}
					<View style={{flexDirection:"row"}}>
						<Feather
							name='refresh-ccw'
							size={30}
							color={defaultPrimaryColor}
						/>
						<Text style={styles.turnLabel}>Show {nextCardType}</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
