import React, { FC } from 'react';
import Icon from 'components/Icon';
import { EColors } from 'const/colors';
import { TTab } from 'features/constructor/types';

export type TTabProps = TTab & {
  iconId: string
  isActive: boolean
  onClick: () => void
}

const Tab: FC<TTabProps> = ({iconId, isActive, mode, onClick}) => {
  const className = 'px-[12px] py-[8px] flex gap-[8px] items-center rounded cursor-pointer' +
    (isActive ? ` border border-solid border-[${ EColors.border_gray }] bg-[white]` : '');

  return (
    <div
      onClick={ onClick }
      className={ className }>
      <Icon id={ iconId } stroke={ isActive ? EColors.blue : EColors.gray }
        className={ 'w-[20px] h-[20px]' }/>
      { mode }
    </div>
  );
};

export default Tab;
 