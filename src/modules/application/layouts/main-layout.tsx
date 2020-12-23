import React from 'react';
import { useTheme } from './theme-provider';

import light from './lightmode.module.css';
import dark from './darkmode.module.css';

export const MainLayout = (props) => {
  const { theme, setTheme } = useTheme();

  const style = theme === 'light' ? light : dark;

  return (
    <div className={style.container}>
      <div>
        Theme: <button onClick={() => setTheme('light')}>Light</button>
        <button onClick={() => setTheme('dark')}>Dark</button>
      </div>
      {props.children}
    </div>
  );
};
