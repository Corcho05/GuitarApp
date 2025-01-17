//import {  useState, useEffect} from "react";
import Header from "./components/Header";
import Guitar from "./components/Guitar";
//import { db } from "./data/db.js";
import useCart  from './hooks/useCart.js'

function App() {

 
  const{  
    cartIsEmpty,
    cartTotal,
    addToCart,
    removeToCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cart, 
    data } = useCart()
 
  return ( 
    
    <>
    <Header
    cart={cart}
    removeToCart={removeToCart}
    increaseQuantity={increaseQuantity}
    decreaseQuantity={decreaseQuantity}
    clearCart={clearCart}
    cartIsEmpty={cartIsEmpty}
    cartTotal={cartTotal}
    />
       <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((d)=> (
              <Guitar
                key={d.id}
                guitar={d}
                cart={cart}
                addToCart={addToCart}
               
              />
            )
          )}
                
            
        </div>
    </main>

    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
