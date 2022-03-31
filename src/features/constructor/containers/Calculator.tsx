import React, { FC } from 'react';
import { useAppSelector } from 'src/app/hooks';
import Display from 'src/features/constructor/components/Display';
import Stick from 'src/features/constructor/components/Stick';
import Draggable from 'src/features/constructor/containers/Draggable';
import EqualButton from 'src/features/constructor/containers/EqualButton';
import Operands from 'src/features/constructor/containers/Operands';
import Operations from 'src/features/constructor/containers/Operations';
import {
  EComponents,
  TComponent,
  TComponentMatcher
} from 'src/features/constructor/types';

export type TCalculator = {
  components: TComponent[]
  isConstructor?: boolean
}

const Calculator: FC<TCalculator> = ({components, isConstructor}) => {

  const {
    activeComponents,
    aboveComponentIdx,
    draggingComponent
  } = useAppSelector(state => state._constructor);

  const matcher: TComponentMatcher = {
    [EComponents.display]: <Display value={'0'}/>,
    [EComponents.operations]: <Operations/>,
    [EComponents.operands]: <Operands/>,
    [EComponents.equalBtn]: <EqualButton/>,
  };

  console.log(aboveComponentIdx);
  
  return (
    <div className={'w-[240px] flex flex-col gap-y-[12px]'}>
      {components.map((component) => {

        return (
          <>
            {
              isConstructor &&
              draggingComponent === EComponents.display &&
              activeComponents.findIndex(activeComponent => activeComponent === component) === 0
                ?
                <Stick/> : null
            }
            <Draggable key={component} component={component}>
              {matcher[component]}
            </Draggable>
            {
              (activeComponents.findIndex(activeComponent => activeComponent === component) === aboveComponentIdx) &&
              isConstructor &&
              draggingComponent !== EComponents.display
                ?
                <Stick/> : null
            }
          </>
        );
      })}
    </div>
  );
};

export default Calculator;
