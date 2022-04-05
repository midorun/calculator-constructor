import { Action, configureStore, ThunkAction, } from '@reduxjs/toolkit';
import calculatorReducer from 'src/features/calculator/calculatorSclise';
import constructorReducer from 'src/features/constructor/constructorSlice';
import counterReducer from 'src/features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
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
