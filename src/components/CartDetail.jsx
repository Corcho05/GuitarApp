import React from 'react'

const CartDetail = ({guitar, removeToCart, decreaseQuantity, increaseQuantity}) => {
    const {name, image, price, description, quantity} = guitar;

  return (
    <>
    
        <tr>
            <td>
                <img className="img-fluid" src={`/img/${image}.jpg`} alt={name}/>
            </td>
            <td>{name}</td>
            <td className="fw-bold">
                    {price*quantity}
            </td>
            <td className="flex align-items-start gap-4">
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={()=>{decreaseQuantity(guitar.id)}}
                >
                    -
                </button>
                    {quantity}
                <button
                    type="button"
                    className="btn btn-dark"
                    onClick={()=>{increaseQuantity(guitar.id)}}
                >
                    +
                </button>
            </td>
            <td>
                <button
                    className="btn btn-danger"
                    type="button"
                    onClick={()=>{removeToCart(guitar.id)}}
                >
                    X
                </button>
            </td>
        </tr>
</>
  )
}

export default CartDetail