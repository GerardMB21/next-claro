import '../styles/globals.css';
import '../styles/PageLayout.css';
import '../components/carrusel/Carrusel.css';
import '../components/title/Title.css';
import '../components/cards/CardItem.css';
import store from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp;
