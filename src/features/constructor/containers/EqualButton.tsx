import React, { FC } from 'react';

const EqualButton: FC = () => {
  return (
    <div className={'component-wrapper'}>
      <button
        className={'w-full h-[72px] bg-[#5D5FEF] text-white rounded'}
      >
        =
      </button>
    </div>
  );
};

export default EqualButton;
