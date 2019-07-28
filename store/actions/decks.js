export const  STORE_DECK = 'STORE_DECK';
export const  STORE_CARD  = 'STORE_CARD';
export const  DELETE_DECK  = 'DELETE_DECK';
export const  SET_CURRENT_DECK  = 'SET_CURRENT_DECK';
export const SAVE_SCORE = 'SAVE_SCORE';

export const createDeck = deckID => dispatch =>
	dispatch({
		type: STORE_DECK,
		payload: deckID
	});

export const createCard = card => dispatch =>
	dispatch({
		type: STORE_CARD,
		payload: { ...card }
	});

export const setCurrentDeck = deckID => dispatch =>
	dispatch({
		type: SET_CURRENT_DECK,
		payload: deckID
	});

export const removeDeck = deckID => dispatch =>
	dispatch({
		type: DELETE_DECK,
		payload: deckID
	});

export const saveScore = quiz => dispatch =>{
	dispatch({
		type: SAVE_SCORE,
		payload: {...quiz}
	})
}