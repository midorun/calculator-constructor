import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/hooks';
import { EColors } from 'src/const/colors';
import { setMaxDisplaySymblos } from 'src/features/calculator/calculatorSlise';


const Display: FC = () => {
  const {
    firstOperand,
    secondOperand,
    result,
    maxDisplaySymbols
  } = useAppSelector(state => state.calculator);
  const dispatch = useAppDispatch();

  const [output, setOutput] = useState('0');
  const outputRef = useRef<HTMLDivElement>(null);

  const setOutputCustom = (value: string) => {
    const formattedValue = value.replace('.', ',');
    setOutput(formattedValue.substr(0, maxDisplaySymbols || formattedValue.length));
  };

  useEffect(() => {
    const outputEl = outputRef.current;
    console.dir(outputEl);
    if (outputEl && outputEl.scrollWidth > outputEl.clientWidth) {
      if (!maxDisplaySymbols) dispatch(setMaxDisplaySymblos(output.length - 1));
    }

  }, [output]);

  useEffect(() => {
    if (result) {
      setOutputCustom(result);
      return;
    }
    if (secondOperand && firstOperand) {
      setOutputCustom(secondOperand);
      return;
    }

    setOutputCustom(firstOperand);
  }, [firstOperand, secondOperand, result]);

  const minimizeTextSize = firstOperand || secondOperand || result;

  return (
    <div className={'component-wrapper'}>
      <div
        className={`w-full px-[8px]  h-[52px] bg-[${EColors.gray_blue}] rounded select-none flex flex-col justify-end items-end`}>
        <div
          ref={outputRef}
          className={`w-[95%] text-[${minimizeTextSize ? 19 : 36}px] leading-[${minimizeTextSize ? 23 : 44}px] font-extrabold text-right`}>{output}</div>
      </div>
    </div>
  );
};

export default Display;
