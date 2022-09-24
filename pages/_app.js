import '../styles/globals.css';
import '../styles/PageLayout.css';
import '../components/carrusel/Carrusel.css';
import '../components/title/Title.css';
import '../components/cards/CardItem.css';
import '../components/form/Form.css';
import '../components/modal/Modal.css';
import '../components/help/Help.css';
import '../components/details/Details.css';
import '../components/phoneDetails/PhoneDetails.css';
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
