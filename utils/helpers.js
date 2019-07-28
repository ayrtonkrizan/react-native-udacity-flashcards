import { AsyncStorage } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions'

const NOTIFICATION_KEY = 'FlashCards:notifications';

export const clearLocalNotification = async () => {
	await AsyncStorage.removeItem(NOTIFICATION_KEY);
	Notifications.cancelAllScheduledNotificationsAsync();
};

const createNotification = () => ({
	title: 'Hello!!',
	body: " Let's study today?",
	ios: {
		sound: true,
	},
	android: {
		sound: true,
		priority: 'high',
		sticky: false,
		vibrate: true,
	}
}
);

export const setLocalNotification = async () => {
	const data = await AsyncStorage.getItem(NOTIFICATION_KEY);
	const parsedData = JSON.parse(data);
	if (parsedData === null) {
		const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
		if (status === 'granted') {

			Notifications.cancelAllScheduledNotificationsAsync();

			let tomorrow = new Date();
			tomorrow.setDate(tomorrow.getDate() + 1);
			Notifications.scheduleLocalNotificationAsync(
				/// TODO: Refactor because this will be deprecated in next iOS sdk. 
				createNotification(),
				{
					time: tomorrow,
					repeat: 'day',
				}
			);

			AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
		}
	}
};
