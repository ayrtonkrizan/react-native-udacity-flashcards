import { STORE_DECK, STORE_CARD, SET_CURRENT_DECK, DELETE_DECK, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
	decks: {},
	currentDeck: ''
};

export default (state = INITIAL_STATE, action) => {
	const { payload } = action;
	console.log(action.type);
	switch (action.type) {
		case STORE_DECK:
			return {
				...state,
				decks: {
					...state.decks,
					[payload]: {
						title: payload,
						cards: []
					}
				},
				currentDeck: payload
			};
		case STORE_CARD:
			return {
				...state,
				decks: {
					...state.decks,
					[payload.deckID]: {
						...state.decks[payload.deckID],
						cards: [...state.decks[payload.deckID].cards, payload.card]
					}
				}
			};
		case SAVE_SCORE:
			return{
				...state,
				decks:{
					...state.decks,
					[payload.deckID]:{
						...state.decks[payload.deckID],
						quiz: payload.quiz
					}
				}
			}
		case SET_CURRENT_DECK:
			return {
				...state,
				currentDeck: payload
			};
		case DELETE_DECK: {
			const { [payload]: deletedDeck, ...updatedDecks } = state.decks;
			return {
				...state, decks: updatedDecks, currentDeck: ''
			};
		}
		default:
			return state;
	}
};
