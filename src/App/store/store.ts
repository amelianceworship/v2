import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	persistStore,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { APP } from '~constants/APP';

import { appSlice } from './app/appSlice';
import { musicPlayerSlice } from './musicPlayer/musicPlayerSlice';
import { songsListSlice } from './songsList/songsListSlice';
import { userSlice } from './user/userSlice';
import { userInfoSlice } from './userInfo/userInfoSlice';
import { usersSlice } from './users/usersSlice';

const rootReducers = combineReducers({
	appReducer: appSlice.reducer,
	songsListReducer: songsListSlice.reducer,
	userReducer: userSlice.reducer,
	usersReducer: usersSlice.reducer,
	userInfoReducer: userInfoSlice.reducer,
	musicPlayerReducer: musicPlayerSlice.reducer,
});

const persistConfig = {
	key: APP.name,
	storage,
	whitelist: ['appReducer', 'songsListReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});

export const persistor = persistStore(store);
