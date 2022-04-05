import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  EComponents,
  EMods,
  TComponent,
  TMode
} from 'src/features/constructor/types';

export interface ConstructorState {
  mode: keyof typeof EMods;
  components: TComponent[];
  activeComponents: TComponent[];
  draggingComponent: TComponent | null;
  aboveComponentIdx: number;
}

const initialState: ConstructorState = {
  mode: EMods.Runtime,
  components: Object.values(EComponents),
  activeComponents: Object.values(EComponents),
  draggingComponent: null,
  aboveComponentIdx: -2
};

export const constructorSlice = createSlice({
  name: 'constructor',
  initialState,
  reducers: {
    activateComponent: (state, action: PayloadAction<TComponent>) => {
      if (state.activeComponents.find(activeComponent => activeComponent === action.payload)) {
        state.activeComponents = state.activeComponents.filter(activeComponent => activeComponent !== action.payload);
        state.activeComponents.splice(state.aboveComponentIdx + 1, 0, action.payload);
        return;
      }

      if (action.payload === EComponents.display) {
        state.activeComponents = [EComponents.display, ...state.activeComponents];
        return;
      }

      state.activeComponents.splice(state.aboveComponentIdx + 1, 0, action.payload);
    },
    deactivateComponent: (state, action: PayloadAction<TComponent>) => {
      state.activeComponents = state.activeComponents.filter(component => component !== action.payload);
    },
    setMode: (state, action: PayloadAction<TMode>) => {
      state.mode = action.payload;
    },
    setDraggingComponent: (state, action: PayloadAction<TComponent | null>) => {
      state.draggingComponent = action.payload;
    },
    setAboveComponentIdx: (state, action: PayloadAction<number>) => {
      state.aboveComponentIdx = action.payload;
    }
  }
});

export const {
  activateComponent,
  deactivateComponent,
  setMode,
  setDraggingComponent,
  setAboveComponentIdx
} = constructorSlice.actions;

export default constructorSlice.reducer;
