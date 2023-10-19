import { Provider } from 'mobx-react';
import cartStore from './CartStore';



function App({ Component, pageProps }) {
  return (
    <Provider cartStore={cartStore}>
    
      <Component {...pageProps} />
    
    </Provider>
    
  );
}

export default App;
