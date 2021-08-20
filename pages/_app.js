
import { IconName } from "react-icons/io";
import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { Provider } from "react-redux";
import { store } from "../store";
import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  
  return (
    
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    
  );
}

export default MyApp;
