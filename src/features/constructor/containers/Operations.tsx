import React, { FC } from 'react';
import Button from 'src/features/constructor/components/Button';
import { operations } from 'src/features/constructor/const';


const Operations: FC = () => {
  return (
    <div className={'component-wrapper'}>
      {operations.map((operation) => {
        return (
          <Button key={operation} width={'52px'} text={operation}/>
        );
      })}
    </div>
  );
};

export default Operations;
