

function CartItem(props) {

        return (
            <div className='cart-item'>
                <p>{props.name}</p>
                <p>{props.qty}</p>

            </div>
        );

}

export default CartItem;