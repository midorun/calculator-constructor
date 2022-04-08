import React, { FC } from 'react';
import { EColors } from 'const/colors';

export type StickProps = {
  className?: string
}

const Stick: FC<StickProps> = ({ className }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div
        className={`w-[7px] h-[7px] bg-[${EColors.blue}] transform: rotate-45`}/>
      <div className={`w-[244px] h-px bg-[${EColors.blue}]`}/>
      <div
        className={`w-[7px] h-[7px] bg-[${EColors.blue}] transform: rotate-45`}/>
    </div>
  );
};

export default Stick;
