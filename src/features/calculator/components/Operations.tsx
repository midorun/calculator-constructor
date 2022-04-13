import React, { FC } from 'react';
import { useAppDispatch } from 'app/hooks';
import { setOperation } from 'features/calculator/calculatorSlice';
import Button from 'features/calculator/components/Button';
import { operations } from 'features/calculator/const';


const Operations: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={ 'component-wrapper' }>
      { operations.map((operation) => {
        return (
          <Button key={ operation } width={ '52px' } text={ operation }
            handleClick={ () => {
              dispatch(setOperation(operation));
            } }/>
        );
      }) }
    </div>
  );
};

export default Operations;
