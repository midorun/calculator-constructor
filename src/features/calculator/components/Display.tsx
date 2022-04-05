import React, { FC, useEffect, useRef, useState } from 'react';
import { useAppSelector } from 'src/app/hooks';
import { EColors } from 'src/const/colors';


const Display: FC = () => {
  const {
    firstOperand,
    secondOperand,
    result,
    operation
  } = useAppSelector(state => state.calculator);

  const [output, setOutput] = useState('0');
  const outputRef = useRef<HTMLDivElement>(null);

  const setOutputCustom = (value: string) => {
    setOutput(value.replace('.', ','));
  };

  useEffect(() => {
    const outputEl = outputRef.current;

    if (outputEl && outputEl.scrollWidth > outputEl.clientWidth) {
      const output = outputEl.innerText.replace(',', '.');
      if (output.includes('.')) {
        const [sign, frac] = output.split('.');

        if (frac.length) {
          Number(output).toFixed(frac.length - 1);
        } else {
          Number(output).
        }
      }

    }

  }, [outputRef.current]);

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
        className={`w-full  h-[52px] bg-[${EColors.gray_blue}] rounded select-none flex flex-col justify-end`}>
        <div
          ref={outputRef}
          className={`inline px-[8px] text-[${minimizeTextSize ? 19 : 36}px] leading-[${minimizeTextSize ? 23 : 44}px] font-extrabold text-right`}>{output}</div>
      </div>
    </div>
  );
};

export default Display;
