import React from 'react';
import { useTheme } from './theme-provider';

import light from './lightmode.module.css';
import dark from './darkmode.module.css';

import { SimpleButton } from '../../../lib/components/button/button';

export const MainLayout = (props) => {
  const { theme, setTheme } = useTheme();

  const style = theme === 'light' ? light : dark;

  return (
    <div className={style.container}>
      <header>
        <div>
          Theme:{' '}
          <SimpleButton onClick={() => setTheme('light')}>Light</SimpleButton>
          <SimpleButton onClick={() => setTheme('dark')}>Dark</SimpleButton>
        </div>
        <div>
          <h1>Hello World!</h1>
        </div>
        <hr />
      </header>
      {props.children}
    </div>
  );
};
