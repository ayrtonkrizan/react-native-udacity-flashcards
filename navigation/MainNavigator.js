import { createStackNavigator } from 'react-navigation';
import { Tabs } from './Tabs';
import { darkPrimaryColor, textprimaryColor } from '../utils/colors';
import { DeckScreen, AddCardScreen } from '../scenes'

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
