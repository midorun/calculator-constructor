/* eslint-disable indent */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { operations } from 'src/features/calculator/const';

export type OperationType = typeof operations[number] | ''

export interface CalculatorState {
  result: string;
  firstOperand: string;
  secondOperand: string;
  operation: OperationType;
  prevOperation: OperationType;
  maxDisplaySymbols?: number;
}

const initialState: CalculatorState = {
  result: '',
  firstOperand: '111111111111111111111111',
  secondOperand: '',
  operation: '',
  prevOperation: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setOperand: (state, action: PayloadAction<string>) => {
      action.payload = action.payload === ',' ? '.' : action.payload;
      if (!state.operation) {
        state.firstOperand = (action.payload === '.' && !state.firstOperand ?
          '0' :
          state.firstOperand) + action.payload;
        state.result = '';
        state.secondOperand = '';
      } else {
        state.secondOperand = (action.payload === '.' && !state.secondOperand ?
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
      state.operation = action.payload;
    },
    calculate: state => {
      const firstOperand = state.firstOperand ? state.firstOperand : state.result;
      const operation = state.operation ? state.operation : state.prevOperation;

      switch (operation) {
        case '+': {
          state.result = (+firstOperand + +state.secondOperand).toString();
          break;
        }
        case '-':
          state.result = (+firstOperand - +state.secondOperand).toString();
          break;
        case 'x':
          state.result = (+firstOperand * +state.secondOperand).toString();
          break;
        case '/':
          state.result = (+firstOperand / +state.secondOperand).toString();
          break;
        default:
          break;
      }

      state.firstOperand = '';
      if (state.operation) state.prevOperation = state.operation;
      state.operation = '';
    },
    setMaxDisplaySymblos: (state, action: PayloadAction<number>) => {
      state.maxDisplaySymbols = action.payload;
    }
  }
});

export const {
  setOperand,
  setOperation,
  calculate,
  setMaxDisplaySymblos
} = calculatorSlice.actions;

export default calculatorSlice.reducer;
