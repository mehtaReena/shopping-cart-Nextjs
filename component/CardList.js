import Card from './Card';
import data from './products.json';

function CardList(props) {

    /* const [cart, setCart] = useContext(CartContext);

    const [view, setView ]= useContext(ViewContext);
 */

    return (
            <div className='product-container'>
                {data.map((item,idx) =>

                <Card name={item.title}
                 price={item.price}
                   key={idx}
                  image={item.images[0]}
                 id={item._id}

                />)

                }
            </div>


    )


}
export default CardList;
