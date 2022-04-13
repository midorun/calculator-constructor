import Icon from 'components/Icon';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { EColors } from 'const/colors';
import Calculator from 'features/calculator';
import {
  activateComponent,
  setAboveComponentIdx
} from 'features/constructor/constructorSlice';

const dragEnterStyles = `bg-[${EColors.light_blue}]`;
const baseStyles = `h-[480px] w-[243px] border border-dashed border-[${EColors.border_gray_dark}] rounded z-10`;

const Constructor: FC = () => {
  const {
    activeComponents,
    draggingComponent
  } = useAppSelector(state => state._constructor);
  const dispatch = useAppDispatch();

  const [className, setClassName] = useState(baseStyles);

  const handleDragEnter = () => {
    setClassName([baseStyles, dragEnterStyles].join(' '));
    if (!activeComponents.find(activeComponent => activeComponent === draggingComponent)) {
      dispatch(setAboveComponentIdx(activeComponents.length - 1));
    }
  };

  const handleDragLeave = () => {
    setClassName(baseStyles);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggingComponent) {
      dispatch(activateComponent(draggingComponent));
    }
  };

  return (
    activeComponents.length ?
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Calculator isConstructor components={activeComponents}/>
      </div>
      :
      <div
        className={className}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div
          className={'w-full h-full flex flex-col align-middle justify-center pointer-events-none'}

        >
          <div className={'flex justify-center'}>
            <Icon id={'add'} className={'w-[20px] h-[20px]'} stroke={EColors.black}/>
          </div>
          <div
            className={`text-center text-[14px] leading-[17px] text-[${EColors.blue}] font-medium`}>
            Перетащите сюда
          </div>
          <div
            className={'text-center text-[12px] leading-[15px] text-[#6B7280]'}>
            любой элемент <br/> из левой панели
          </div>
        </div>
      </div>
  );
};

export default Constructor;
