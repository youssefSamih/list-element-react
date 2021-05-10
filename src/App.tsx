import Main from 'Components/Main';
import { Provider } from 'react-redux';
import store from 'redux/store';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/config';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider {...{ store }}>
        <Main />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
