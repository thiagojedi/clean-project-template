import React, {
  createContext,
  FunctionComponent,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type Mode = 'light' | 'dark';

const themeContext = createContext<{
  theme: Mode;
  setTheme: React.Dispatch<SetStateAction<Mode>>;
}>({} as any);

export const ThemeProvider: FunctionComponent = (props) => {
  const [theme, setTheme] = useState<Mode>('light');
  return (
    <themeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {props.children}
    </themeContext.Provider>
  );
};

export const useTheme = () => useContext(themeContext);
