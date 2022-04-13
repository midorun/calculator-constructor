import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import {
  deactivateComponent,
  setAboveComponentIdx,
  setDraggingComponent
} from 'features/constructor/constructorSlice';
import { TComponent } from 'features/constructor/types';

export type DraggableProps = {
  component: TComponent
}

const Draggable: FC<DraggableProps> = ({
  children,
  component,

}) => {
  const {activeComponents} = useAppSelector(state => state._constructor);
  const dispatch = useAppDispatch();

  const handleDragStart = () => {
    dispatch(setDraggingComponent(component));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(setAboveComponentIdx(activeComponents
      .findIndex(leavedComponent => leavedComponent === component)));
  };

  const handleDrop = () => {
    dispatch(setDraggingComponent(null));
  };

  const handleDragEnd = () => {
    dispatch(setDraggingComponent(null));
    dispatch(setAboveComponentIdx(-2));
  };

  const handleDoubleClick = () => {
    dispatch(deactivateComponent(component));
  };

  return (
    <div
      draggable={true}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDoubleClick={handleDoubleClick}
      onDrop={handleDrop}
    >
      {children}
    </div>
  );
};

export default Draggable;
