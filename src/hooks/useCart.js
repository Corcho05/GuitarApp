import {  useState, useEffect} from "react";
import { db } from "../data/db";
const useCart = ()=>{
    
    const initialCart = ()=>{
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart):[]
      }

      const [data] = useState(db)
      const [cart, setCart]=useState(initialCart);
      
      const MAX_ITEMS=5
      const MIN_ITEMS=1
      
      useEffect(()=>{
    
        localStorage.setItem('cart',JSON.stringify(cart))
      },[cart])
    
      const cartIsEmpty =()=> cart.length === 0 
      const cartTotal = () => cart.reduce( (total, item) =>  total + (item.quantity*item.price),0 )

      const addToCart = (item)=>{
        //Agregamos validaciones para que no se carguen cosas duplicadas. 
        const itemExists = cart.findIndex(guitar=> guitar.id === item.id)
        
        if(itemExists>=0){
          //ya existe en el carrito
          if(cart[itemExists].quantity >= MAX_ITEMS) return
          const updateCart =[...cart]
          updateCart[itemExists].quantity++   
          setCart(updateCart);
        }else{
          //no existe en el carrito
          item.quantity = 1
      
          setCart([...cart, item])
        }
        
        } 
        const removeToCart = (id)=>{
            const newCart = cart.filter(guitar => guitar.id !== id)
            setCart(newCart);
        }
      
      
        function increaseQuantity(id){
          
          //console.log(MAX_ITEMS);
          //console.log(id);
         const updateCart = cart.map(item =>{
          if(item.id ===id && item.quantity < MAX_ITEMS ){
            
            return({
              ...item,
              quantity: item.quantity + 1
            })
          }
          return item;
         })
         setCart(updateCart);
        }
      
        function decreaseQuantity(id){
          const updateCart = cart.map(item =>{
            if(item.id===id && item.quantity > MIN_ITEMS ){
              return({
                ...item,
                quantity: item.quantity - 1
              })
            }
            return item;
          })
          setCart(updateCart);
        }
        const clearCart =()=>{
        
          setCart([]);
        }
      

      return{
        cartIsEmpty,
        cartTotal,
        addToCart,
        removeToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart, 
        cart,
        data
      }
}

export default useCart;