import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit';
import calculatorReducer from 'features/calculator/calculatorSlise';
import constructorReducer from 'features/constructor/constructorSlice';

export const store = configureStore({
  reducer: {
    _constructor: constructorReducer,
    calculator: calculatorReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
