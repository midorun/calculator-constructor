import React from 'react';
import { useAppSelector } from 'src/app/hooks';
import Constructor from 'src/features/constructor';
import Calculator from 'src/features/constructor/containers/Calculator';
import Switch from 'src/features/constructor/containers/Switch';
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
