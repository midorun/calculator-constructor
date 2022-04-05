import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import {
  deactivateComponent,
  setAboveComponentIdx,
  setDraggingComponent
} from 'src/features/constructor/constructorSlice';
import { TComponent } from 'src/features/constructor/types';

export type DraggableProps = {
  component: TComponent
}

const Draggable: FC<DraggableProps> = ({
  children,
  component,

}) => {
  const { activeComponents } = useAppSelector(state => state._constructor);
  const dispatch = useAppDispatch();

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    dispatch(setDraggingComponent(component));
  };

  const handleDragEnter = () => {
    console.log();
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(setAboveComponentIdx(activeComponents
      .findIndex(leavedComponent => leavedComponent === component)));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(setDraggingComponent(null));
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(setDraggingComponent(null));
    dispatch(setAboveComponentIdx(-2));
  };

  const handleDoubleClick = () => {
    dispatch(deactivateComponent(component));
  };

  return (
    <div
      draggable={true}
      onDragEnter={handleDragEnter}
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
