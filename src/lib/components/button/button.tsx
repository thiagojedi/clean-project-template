import React, { FC } from 'react';

import style from './style.module.css';

type SimpleButtonProps = {
  onClick: () => void;
};

export const SimpleButton: FC<SimpleButtonProps> = (props) => {
  return (
    <button className={style.activeButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
