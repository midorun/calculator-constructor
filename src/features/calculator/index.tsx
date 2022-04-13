import React, { FC } from 'react';
import { useAppSelector } from 'app/hooks';
import Display from 'features/calculator/components/Display';
import EqualButton from 'features/calculator/components/EqualButton';
import Operands from 'features/calculator/components/Operands';
import Operations from 'features/calculator/components/Operations';
import Stick from 'features/constructor/components/Stick';
import Draggable from 'features/constructor/containers/Draggable';
import {
  EComponents,
  EMods,
  TComponent,
  TComponentMatcher
} from 'features/constructor/types';

export type TCalculator = {
  components: TComponent[]
  isConstructor?: boolean
}

const Calculator: FC<TCalculator> = ({components, isConstructor}) => {

  const {
    mode,
    activeComponents,
    aboveComponentIdx,
    draggingComponent
  } = useAppSelector(state => state._constructor);

  const matcher: TComponentMatcher = {
    [EComponents.display]: <Display isConstructor={isConstructor}/>,
    [EComponents.operations]: <Operations/>,
    [EComponents.operands]: <Operands/>,
    [EComponents.equalBtn]: <EqualButton/>,
  };

  const showStick = isConstructor && draggingComponent;

  const showStickTop = (component: TComponent) =>
    showStick &&
    draggingComponent === EComponents.display &&
    activeComponents.findIndex(activeComponent =>
      activeComponent === component) === 0;

  const showStickBottom = (component: TComponent) =>
    showStick &&
    draggingComponent !== EComponents.display &&
    activeComponents.findIndex(activeComponent =>
      activeComponent === component) === aboveComponentIdx &&
    component !== draggingComponent;

  const isComponentDisabled = (component: TComponent) =>
    !isConstructor &&
    activeComponents.find(activeComponent => activeComponent === component);

  return (
    <div className={'w-[240px] flex flex-col gap-y-[12px]'}>
      {components.map((component) => {

        return (
          <div key={component}>
            {
              showStickTop(component) ?
                <Stick/> :
                null
            }
            <div
              className={`${isComponentDisabled(component) ? 'opacity-50 pointer-events-none' : ''}`}>
              {
                mode === EMods.Constructor ?
                  <Draggable component={component}>
                    {matcher[component]}
                  </Draggable> :
                  matcher[component]
              }
            </div>
            {
              showStickBottom(component) ?
                <Stick/> :
                null
            }
          </div>
        );
      })}
    </div>
  );
};

export default Calculator;
