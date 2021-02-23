import { AppProps } from 'next/app';
import '../styles/globals.css';

//* Import_package_about_redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../modules';

const store = createStore(rootReducer, composeWithDevTools());

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
