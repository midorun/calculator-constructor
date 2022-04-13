import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { operations } from 'features/calculator/const';
import roundNumberWithExp from 'utils/roundNumberWithExp';

export type OperationType = typeof operations[number] | ''

export interface CalculatorState {
  result: string;
  firstOperand: string;
  secondOperand: string;
  operation: OperationType;
  prevOperation: OperationType;
  isDisplayLimitReached: boolean;
}

const initialState: CalculatorState = {
  result: '',
  firstOperand: '',
  secondOperand: '',
  operation: '',
  prevOperation: '',
  isDisplayLimitReached: false
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setOperand: (state, action: PayloadAction<string>) => {
      if (state.isDisplayLimitReached) return;
      if (!state.operation) {
        state.firstOperand = (action.payload === ',' && !state.firstOperand ?
          '0' :
          state.firstOperand) + action.payload;
        state.result = '';
        state.secondOperand = '';
      } else {
        state.secondOperand = (action.payload === ',' && !state.secondOperand ?
          '0' :
          state.secondOperand) + action.payload;
      }
    },
    setOperation: (state, action: PayloadAction<OperationType>) => {
      if (state.result) {
        state.firstOperand = state.result;
        state.secondOperand = '';
        state.result = '';
      }
      state.isDisplayLimitReached = false;
      state.operation = action.payload;
    },
    calculate: state => {
      const firstOperand = +(state.firstOperand || state.result).replace(',', '.');
      const secondOperand = +state.secondOperand.replace(',', '.');
      const operation = state.operation || state.prevOperation;

      let result;

      switch (operation) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case 'x':
        result = firstOperand * secondOperand;
        break;
      case '/':
        if (secondOperand === 0) {
          result = 'Не определено';
          break;
        }
        result = firstOperand / secondOperand;
        break;
      default:
        result = firstOperand;
        break;
      }

      const resultAsString = result.toString();

      if (resultAsString.includes('e')) {
        result = roundNumberWithExp(resultAsString);
      }

      state.result = result.toString().replace('.', ',');
      state.firstOperand = '';
      if (state.operation) state.prevOperation = state.operation;
      state.operation = '';
    },
    setIsDisplayLimitReached: (state, action: PayloadAction<boolean>) => {
      state.isDisplayLimitReached = action.payload;
    }
  }
});

export const {
  setOperand,
  setOperation,
  calculate,
  setIsDisplayLimitReached
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
