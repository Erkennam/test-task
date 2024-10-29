import {combineReducers, configureStore} from '@reduxjs/toolkit';
import slice from './slice';

const rootReducer = combineReducers({
    slice: slice,
})

const Store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof Store.dispatch;
export default Store;