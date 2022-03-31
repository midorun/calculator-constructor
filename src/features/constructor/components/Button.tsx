import React, { FC } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { EColors } from 'src/const/colors';
import { EMods } from 'src/features/constructor/types';

export type TButton = {
  width: string
  text: string
  disabled?: boolean
}

const Button: FC<TButton> = ({
  width,
  text,
}) => {
  const {mode} = useAppSelector(state => state._constructor);


  return (
    <button
      className={`h-[48px] border border-solid border-[${EColors.border_gray}] text-[14px] leading-[15px] font-medium rounded-md hover:border-[${EColors.blue}] hover:border-[2px] ${mode === EMods.Constructor ? 'pointer-events-none' : ''}`}
      style={{width}}
      disabled={mode === EMods.Constructor}
    >{text}</button>
  );
};

export default Button;
