import { createStackNavigator } from 'react-navigation';
import { Tabs } from './Tabs';
import { darkPrimaryColor, textprimaryColor } from '../utils/colors';
import { DeckScreen, AddCardScreen, QuizScreen } from '../scenes'

export const MainNavigator = createStackNavigator(
	{
		Home: {
			screen: Tabs,
			navigationOptions: {
				title: 'Cards'
			}
		},
		AddCard: {
			screen: AddCardScreen,
			navigationOptions: {
				title: 'New Card'
			}
		},
		Deck: {
			screen: DeckScreen,
			navigationOptions: {
				title: 'Deck'
			}
		},
		Quiz: {
			screen: QuizScreen,
			navigationOptions: {
				title: 'Quiz'
			}
		}
	},
	{
		initialRouteName: 'Home',
		navigationOptions: {
			headerBackTitle: null,
			headerStyle: {
				backgroundColor: darkPrimaryColor,
				borderBottomWidth: 0
			},
			headerTintColor: textprimaryColor,
			headerTitleStyle: {
				fontWeight: 'bold'
			}
		}
	}
);
