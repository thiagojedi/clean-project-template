import { ThemeProvider } from '../modules/application/layouts/theme-provider';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
