
import styles from '../styles/Home.module.css'
import MyApp from '../component/ItemsList'


 export default function Home() {
  return (

    <div className={styles.container}>
     <MyApp/>
    </div>
  )
}

/* function Home() {

  const [cart, setCart] = useState([]);

  const [view, setView] = useState();

  return (
    <div className={styles.container}>
      <ViewContext.Provider value={[view, setView]}>
        <CartContext.Provider value={[cart, setCart]}>
          <div className="App">
            <NavBar> </NavBar>
            <div className='wrapper'>
              <CardList></CardList>
              <Cart> </Cart>
            </div>
          </div>
        </CartContext.Provider>
      </ViewContext.Provider>
    </div>
  );

}
 */

// export default Home;
