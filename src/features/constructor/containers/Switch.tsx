import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { EColors } from 'src/const/colors';
import { setMode } from 'src/features/constructor/constructorSlice';
import Tab from 'src/features/constructor/components/Tab';
import { EMods, TTab } from 'src/features/constructor/types';


export const tabs: TTab[] = [{
  mode: EMods.Runtime,
  iconId: 'eye',
}, {
  mode: EMods.Constructor,
  iconId: 'parentheses',
}];

const Switch: FC = () => {
  const {mode} = useAppSelector(state => state._constructor);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`p-px h-[36px] flex bg-[${EColors.gray_blue}] rounded`}>
      {tabs.map(tab => {
        return (
          <Tab
            key={tab.mode}
            {...tab}
            isActive={tab.mode === mode}
            onClick={() => dispatch(setMode(tab.mode))}
          />
        );
      })}
    </div>
  );
};
export default Switch;
