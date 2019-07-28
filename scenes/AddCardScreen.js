import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { connect } from 'react-redux';
import { black, backGroundColor, textprimaryColor } from '../utils/colors';
import { TextInput, Button } from '../components';

const INPUT_FONT_SIZE = 20;
const QUESTION = 'question';
const ANSWER = 'answer';


class AddCardScreen extends Component {
    state = {
        question:'',
        answer:''
    }
    handleSubmit = () => {
        console.log('here')
    }

    handleTextChange = field => text => {
        console.log()
    }

    render(){
        const { question, answer } = this.state;
        return(
            <View style={styles.container}>
				<Text style={styles.text}>Enter a question:</Text>
				<TextInput
					onChangeText={this.handleTextChange(QUESTION)}
					value={question}
					multiline
					fontSize={INPUT_FONT_SIZE}
				/>
				<Text style={styles.text}>What is the answer?</Text>
				<TextInput
					onChangeText={this.handleTextChange(ANSWER)}
					value={answer}
					multiline
					fontSize={INPUT_FONT_SIZE}
					autoFocus={false}
				/>
				<Button
					onPress={this.handleSubmit}
					label="Submit"
					disabled={!question || !answer}
					setMargin
				/>
			</View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: backGroundColor
	},
	text: {
		paddingTop: 20,
		paddingLeft: 25,
		color: black,
		fontSize: 30,
		textAlign: 'left'
	}
});

const mapStateToPros = ({decks}) => ({decks});

export default connect(mapStateToPros)(AddCardScreen);