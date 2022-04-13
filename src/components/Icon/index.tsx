import React, {FC} from 'react';

import iconsRoute from 'assets/icons.svg';


type TIconProps = {
  id: string
  className?: string
  stroke: string
}

const Icon: FC<TIconProps> = ({id, className, stroke}) => {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsRoute}#${id}`} stroke={stroke}/>
    </svg>
  );
};

export default Icon;