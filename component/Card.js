import { useState, useContext } from "react";
import { CartContext } from '../pages/api/context/CartContext'

function Card(props) {

    let [quantity, setQunatity] = useState(0);
    let found = false;

    const [cart, setCart] = useContext(CartContext);

    const addClickHandler = (e) => {
        let cur_id = e.target.value;


        const product = { id: props.id, name: props.name, price: props.price, qty: 1 };
        let currentState = cart;
        for (var i in currentState) {
            if (currentState[i].id === cur_id) {
                currentState[i].qty = currentState[i].qty + 1;
                setQunatity(currentState[i].qty);
                currentState[i].price = Number((currentState[i].price + props.price).toFixed(2));
                found = true;
                setCart(currentState => [...currentState]);
                break; //Stop this loop, we found it!

            }
        }

        if (!found) {
            setCart(currentState => [...currentState, product]);
            setQunatity(product.qty);

        }


    }
    const removeClickHandler = (e) => {
        let cur_id = e.target.value;
        let currentState = cart;

        for (var i in currentState) {

            if (currentState[i].id === cur_id) {
                if(currentState[i].qty >0) {
                    currentState[i].qty = currentState[i].qty - 1;
                    console.log(currentState[i].price +  "  AND   "+  props.price)
                    currentState[i].price = Number((currentState[i].price - props.price).toFixed(2));
                    setCart(currentState => [...currentState]);
                    if( currentState[i].qty ===0){
                        const filteredCart = currentState.filter((item) => item.id !== cur_id);
                        setCart(filteredCart);

                    }

                }
                else{
                    const filteredCart = currentState.filter((item) => item.id !== cur_id);
                    setCart(filteredCart);
                }
                setQunatity(currentState[i].qty);
                break; //Stop this loop, we found it!

            }


        }



    }
    return (
        <div className='card-wrapper'>
            <div className='card-image'>
                <img src={props.image} alt="" className=''></img>

                <div className='product-info'>

                    <p>{props.name} </p>
                    <p> {'$' + props.price}</p>

                    <div className='product-list' >
                        <button className='add-product' onClick={addClickHandler} value={props.id}>+</button>
                        <span className='amount' >{quantity}</span>
                        <button className='remove-product' onClick={removeClickHandler}  value={props.id}>-</button>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Card;