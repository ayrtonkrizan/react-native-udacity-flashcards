import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text } from 'react-native';
import { backGroundColor } from '../utils/colors';
import { Deck } from '../components';
import { setCurrentDeck } from '../store/actions';

class DecksScreen extends Component {

	handleDeckPress = deckID => () => {
        const { setCurrentDeck, navigation } = this.props;
        setCurrentDeck(deckID);
		navigation.navigate('Deck');
	};

	render() {
		const { decks } = this.props;
		return (
			<ScrollView
				style={styles.scrollStyle}
				contentContainerStyle={styles.scrollContent}
            >
            {
                Object.values(decks)
                    .map(deck => (
                        <Deck 
                            key={deck.title}
                            deck={deck}
                            onPress={this.handleDeckPress(deck.title)}
                        />
                        )
                    )
            }
			</ScrollView>
		);
	}
}

const mapStateToProps = ({ decks }) => ({ decks });
export default connect(mapStateToProps, {setCurrentDeck})(DecksScreen);

const styles = StyleSheet.create({
	scrollStyle: {
		backgroundColor: backGroundColor
	},
	scrollContent: {
		justifyContent: 'space-around',
		backgroundColor: backGroundColor,
		paddingTop: 15
	}
});