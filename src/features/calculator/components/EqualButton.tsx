import React, { FC } from 'react';
import { useAppDispatch } from 'app/hooks';
import { calculate } from 'features/calculator/calculatorSlise';

const EqualButton: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={'component-wrapper'}>
      <button
        className={'w-full h-[72px] bg-[#5D5FEF] text-white rounded'}
        onClick={() => dispatch(calculate())}
      >
        =
      </button>
    </div>
  );
};

export default EqualButton;
