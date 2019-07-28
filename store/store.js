import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const persistConfig = {
	key: 'root',
	storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
	persistedReducer,
	applyMiddleware(thunk)
);
const persistor = persistStore(store);

export { store, persistor };
