import { useContext } from "react"
import { CartContext, ViewContext } from '../pages/api/context/CartContext'

function NavBar(props) {

    const [view, setView ]= useContext(ViewContext);
    const [cart] = useContext(CartContext);

    const totalQty = cart.reduce((acc, curr) => acc + curr.qty, 0);

   function handleClick() {
       let option=view;
       if(option==='slide-in'){
        setView('slide-out')
       }
       else{
        setView('slide-in')
       }


   }

    return (

       <div className='navbar'>
        <div>
         <h3>GOKiS</h3>

        </div>
        <div className ='cart-icon'  onClick={handleClick}>
         🛒    <span> {totalQty} </span>
        </div>
        </div>

    )

}
export default NavBar;