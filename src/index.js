import React from 'react';
import ReactDOM from 'react-dom';

/**
 * react-router-dom => DOM Bindings for react-router
 * history => exports createsBrowserhistory()
 * Provider => Provider is the HOC by React Redux that lets you bind Redux to React
 * getStore => Redux Globle store which contains all Reducers combined
 */
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import history from './router/history';
import { getStore } from './store/configureStore';
import 'typeface-source-sans-pro';
import theme from './styles/theme';

/** Entry File of the Application */
import Routes from './router/Routes';


/** Root Component Bind with Redux Provider and React Dom Router */
const AppReduxRouter = () => {
  const myStore = getStore();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={myStore}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <AppReduxRouter />,
  document.getElementById('root')
);
