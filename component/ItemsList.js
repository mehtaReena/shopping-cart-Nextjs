import CardList from './CardList';
import NavBar from './NavBar';
import Cart from './Cart';
import {CartContext , ViewContext} from '../pages/api/context/CartContext'
import React, {useState} from 'react';



function ItemsList() {

  const [cart, setCart] = useState([]);

  const [view, setView ]= useState();

  return (
    <div className="App">
      <NavBar> </NavBar>
      <div className='wrapper'>
        <CardList></CardList>
        <Cart> </Cart>
      </div>
    </div>

  );
}

export default ItemsList;
