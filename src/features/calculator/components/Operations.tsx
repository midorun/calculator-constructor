import React, { FC } from 'react';
import { useAppDispatch } from 'src/app/hooks';
import { setOperation } from 'src/features/calculator/calculatorSclise';
import Button from 'src/features/calculator/components/Button';
import { operations } from 'src/features/calculator/const';


const Operations: FC = () => {

  const dispatch = useAppDispatch();

  return (
    <div className={'component-wrapper'}>
      {operations.map((operation) => {
        return (
          <Button key={operation} width={'52px'} text={operation}
            handleClick={() => {
              dispatch(setOperation(operation));
            }}/>
        );
      })}
    </div>
  );
};

export default Operations;
