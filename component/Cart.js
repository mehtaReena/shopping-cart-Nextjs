import React from 'react'
import { useContext } from "react";
import { CartContext, ViewContext } from '../pages/api/context/CartContext';
import CartItem  from "./CartItem";
import Link from 'next/link';
import Router from 'next/router';

const Cart = (props) => {
    // console.log(props)
    const [cart] = useContext(CartContext);

    const [view] = useContext(ViewContext);
    console.log(view)

    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);



    return (
        <div className={view} id="slideDiv"  >
            <h4> Items: </h4>
            {
                cart.map((item , idx) =>
                 <CartItem
                         key={idx}
                        name={item.name}
                        qty={item.qty}
                   />)

            }

            <div>Cart Total:{Number(totalPrice).toFixed(2)} </div>


            <div><button onClick={()=>Router.push('/checkout')

            }> Click me ! </button></div>

        </div>
    )
}
export default Cart;