import React, { FC } from 'react';
import Button from 'src/features/calculator/components/Button';
import { operands } from 'src/features/constructor/const';

const Operands: FC = () => {

  return (
    <div className={'component-wrapper'}>
      {operands.map((row) => {
        return (
          row.map((operand) => {
            return (
              operand === '0' ?
                <Button key={operand} width={'152px'} text={operand}/> :
                <Button key={operand} width={'72px'} text={operand}/>
            );
          })
        );
      })}
    </div>
  );
};

export default Operands;
