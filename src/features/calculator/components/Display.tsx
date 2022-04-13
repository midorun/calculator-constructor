import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { EColors } from 'const/colors';
import { setIsDisplayLimitReached } from 'features/calculator/calculatorSlice';

export type DisplayProps = {
  isConstructor?: boolean
}

const Display: FC<DisplayProps> = ({isConstructor}) => {
  const {
    firstOperand,
    secondOperand,
    result,
  } = useAppSelector(state => state.calculator);
  const dispatch = useAppDispatch();

  const [output, setOutput] = useState('');
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outputEl = outputRef.current;
    if (outputEl && outputEl.scrollWidth > outputEl.clientWidth) {
      dispatch(setIsDisplayLimitReached(
        true
      ));
    }
  }, [output]);

  useEffect(() => {
    if (result) {
      setOutput(result);
      return;
    }
    if (secondOperand && firstOperand) {
      setOutput(secondOperand);
      return;
    }
    setOutput(firstOperand);
  }, [firstOperand, secondOperand, result]);

  const minimizeTextSize = firstOperand || secondOperand || result;

  return (
    <div className={'component-wrapper'}>
      <div
        className={`
          w-full px-[8px]  h-[52px] bg-[${EColors.gray_blue}] rounded select-none flex flex-col justify-end items-end
        `}>
        <div
          ref={outputRef}
          className={`
            w-[95%] text-[${minimizeTextSize ? 19 : 36}px] leading-[${minimizeTextSize ? 23 : 44}px] font-extrabold 
            text-right
          `}>
          {isConstructor ? output : ''}
        </div>
      </div>
    </div>
  );
};

export default Display;
