import {
  configureStore,
  ThunkAction,
  Action,

} from '@reduxjs/toolkit';
import constructorReducer from 'src/features/constructor/constructorSlice';

import counterReducer from 'src/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    _constructor: constructorReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
