import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { EColors } from 'src/const/colors';
import {
  activateComponent,
  setAboveComponentIdx
} from 'src/features/constructor/constructorSlice';
import Calculator from 'src/features/calculator';

const dragEnterStyles = `bg-[${EColors.light_blue}]`;
const baseStyles = `h-[480px] w-[243px] border border-dashed border-[${EColors.border_gray_dark}] rounded z-10`;

const Constructor: FC = () => {
  const {
    activeComponents,
    draggingComponent
  } = useAppSelector(state => state._constructor);
  const dispatch = useAppDispatch();

  const [className, setClassName] = useState(baseStyles);

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    // console.log(e);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setClassName([baseStyles, dragEnterStyles].join(' '));
    dispatch(setAboveComponentIdx(activeComponents.length - 1));
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setClassName(baseStyles);
    dispatch(setAboveComponentIdx(-1));
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(activateComponent(draggingComponent!));
    dispatch(setAboveComponentIdx(-2));
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
            <img src={'/add.svg'} alt={'add component icon'}/>
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
