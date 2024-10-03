import React from 'react'
import play from "../assets/image/play.png"
import "./Cart.scss"
import app from "../assets/svg/app.svg"
import down from "../assets/svg/down.svg"
import { Link } from 'react-router-dom'

import { incQuantity } from '../redux/cart/cartSlice'
import { addQuantity } from '../redux/cart/cartSlice'

import { useSelector, useDispatch } from 'react-redux'


function Cart() {
    const {list} = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    let a = [11, 34, 54,6, 5]
    let b = a.reduce((sub, item) => sub+item,0)
    console.log(b);

  
    let my2 = list.reduce((sub, item) => sub + item.price * item.quantity, 0)

    
    

  return (
    <div className='container'>
        <div className='product'>
           <p>Product</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Subtotal</p>
        </div>
        {
            list.map((data) =>(
                <div className='prices'>
                    <div className='title'>
                <img src={data.imageUrl} alt="" />
                <p>{data.title}</p>
                    </div>
                    
                <p>{data.price}$</p>
                <div className='count'> 
                <h5>{data.quantity}</h5> 
                <div className='icons'> 
                    <img onClick={() => dispatch(incQuantity(data.id))} src={app} alt="" /> 
                    <img onClick={() => dispatch(addQuantity(data.id))} src={down} alt="" /> 
                </div> 
               </div> 
               
                <p>{data.price * data.quantity}</p>
            </div>


            ))
        }
        <div className='btns'>
            <button>Return To Shop</button>
            <button>Update Cart</button>
        </div>
        <div className='footer-cart'>
            <div className='input'>
                <input placeholder='Coupon Code' type="text" />
                <button>Apply Coupon</button>
            </div>
            <div className='total'>
                <h4>Cart Total</h4>
                <p>Subtotal: <span>{my2}$</span></p>
                <p>Shipping: <span>500$</span> </p>
                <p>Total: <span>{my2 + 500}$</span></p>
               <Link to="/check-out">
                <button>Procees to checkout</button>
               </Link>
            </div>
        </div>
    </div>
  )
}


export default Cart