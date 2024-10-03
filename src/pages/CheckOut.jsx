import React from 'react'
import "./chekOut.scss"
import play from "../assets/image/play.png"
import empty from "../assets/svg/empty.svg"
import full from "../assets/svg/full.svg"
import kash from '../assets/image/kash.png'
import visa from '../assets/image/visa.png'
import masterCart from '../assets/image/masterCart.png'
import china from '../assets/image/china.png'

import { useSelector } from 'react-redux'


function CheckOut() {
    const {list} = useSelector((state) => state.cart);
  return (
    <div className='container'>
        <div className='account'>
            <p>Account / My Account / Product / View Cart / <span>Check Out</span></p>
        </div>
        <div className='details'>
            <div className='detail-1'>
                <h1>Billing Details</h1>
                <div className='inputs'>
                    <span>First Name*</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Company Name</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Street Address*</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Apartment, floor, etc. (optional)</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Town/City*</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Phone Number*</span>
                    <input type="text" />
                </div>
                <div className='inputs'>
                    <span>Email Address*</span>
                    <input type="text" />
                </div>
            </div>
            <div className='detail-2'>
                <div className='item'>
                    <div className='item-title'>
                    <img src={play} alt="" />
                    <h4>LCD Monitor</h4>
                    </div>
                    <p>$650</p>
                </div>
                <div className='subtotal'>
                    <div className='sub'>
                        <p>Subtotal:</p>
                        <span>$1750</span>
                    </div>
                    <div className='sub'>
                        <p>Shipping:</p>
                        <span>$1750</span>
                    </div>
                    <div className='sub2'>
                        <p>Total:</p>
                        <span>$1750</span>
                    </div>
                </div>

                <div className='icon'>
                    <div className='icons'>
                        <div className='bank'>
                            <img src={empty} alt="" />
                            <p>Bank</p>
                        </div>
                        <div className='visa'>
                        <img src={kash} alt="" />
                        <img src={visa} alt="" />
                        <img src={masterCart} alt="" />
                        <img src={china} alt="" />
                        </div>
                    </div>
                    <div className='icons'>
                        <div className='bank'>
                            <img src={full} alt="" />
                            <p>Cash on delivery</p>
                        </div>
                    </div>
                </div>
                <div className='btns'>
                    <div className='btn1'>
                        
                        <button>Coupon Code</button>
                        <button>Apply Coupon</button>
                    </div>
                    <div className='btn2'>

                    <button>Place Order</button>
                    </div>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default CheckOut
