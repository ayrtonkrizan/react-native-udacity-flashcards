import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import { backGroundColor, textSecondColor } from '../utils/colors';
import { Deck } from '../components';
import { setCurrentDeck } from '../store/actions';



const NoDeckView = ()=>{
	return(
		<View style={[styles.scrollStyle, {flex:1, alignItems:'center', justifyContent:'center', padding:15}]}>
			<Text style={{fontSize:30, textAlign:'center', color:textSecondColor}}>There are no decks, yet!</Text>
		</View>
	)
}

class DecksScreen extends Component {

	handleDeckPress = deckID => () => {
        const { setCurrentDeck, navigation } = this.props;
        setCurrentDeck(deckID);
		navigation.navigate('Deck');
	};
	
	render() {
		const { decks } = this.props;
		if(!decks)
			return <NoDeckView />
		if(!Object.keys(decks).length)
			return <NoDeckView />
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