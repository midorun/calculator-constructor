import React, { FC } from 'react';
import { useAppDispatch } from 'app/hooks';
import { setOperand } from 'features/calculator/calculatorSlice';
import Button from 'features/calculator/components/Button';
import { operands } from 'features/calculator/const';

const Operands: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={ 'component-wrapper' }>
      { operands.map((row) => {
        return (
          row.map((operand) => {
            return (
              operand === '0' ?
                <Button
                  key={ operand }
                  width={ '152px' }
                  text={ operand }
                  handleClick={ () => dispatch(setOperand(operand)) }/> :
                <Button
                  key={ operand }
                  width={ '72px' }
                  text={ operand }
                  handleClick={ () => dispatch(setOperand(operand)) }/>
            );
          })
        );
      }) }
    </div>
  );
};

export default Operands;
