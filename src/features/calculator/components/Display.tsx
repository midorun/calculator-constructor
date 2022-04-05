import React, { FC } from 'react';
import { EColors } from 'src/const/colors';

export type TDisplay = {
  value: string;
}

const Display: FC<TDisplay> = ({value}) => {
  return (
    <div className={'component-wrapper'}>
      <div
        className={`w-full h-[52px] bg-[${EColors.gray_blue}] rounded select-none`}>
        <div
          className={'w-full px-[8px] text-[36px] leading-[44px] font-extrabold text-right'}>{value}</div>
      </div>
    </div>
  );
};

export default Display;
