import React from 'react';
import { useAppSelector } from 'app/hooks';
import Constructor from 'features/constructor';
import Calculator from 'features/calculator';
import Switch from 'features/constructor/containers/Switch';
import './App.css';

function App() {
  const {
    components,
  } = useAppSelector(state => state._constructor);

  return (

    <div className={'w-fit mx-auto flex flex-col gap-[30px] mt-[38px]'}>
      <div className={'flex justify-end'}>
        <Switch/>
      </div>
      <div className={'flex gap-[56px]'}>
        <Calculator components={components}/>
        <Constructor/>
      </div>
    </div>
  );
}

export default App;
