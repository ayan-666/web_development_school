import React from 'react';
import './Cart.css'



const Cart = (props) => {
    const cart= props.cart;
    const total_price = cart.reduce( (total_price,course)=> total_price+parseFloat(course.price) , 0)
   
    return (
        <div className='cart_part'>
            <h2 className='summary_head'>Order Summary</h2>
            <h5 className='item'>Items Ordered: {cart.length}</h5>
            <h3 className='upper'>Items: {cart.length}</h3>
            <h3>Total Price : {total_price}$</h3>
            <div className='course_summary'>
               
            </div>
        </div>
    );
};

export default Cart;