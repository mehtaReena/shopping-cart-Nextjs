import { useState } from 'react';
import '../styles/globals.css'
import  {ViewContext ,CartContext} from './api/context/CartContext';

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState([]);

  const [view, setView ]= useState("slide-in");
  return (
    <ViewContext.Provider value={[view, setView ]}>
    <CartContext.Provider value={[cart, setCart]}>

       <Component {...pageProps} />
       </CartContext.Provider>
    </ViewContext.Provider>


  )
}

export default MyApp
