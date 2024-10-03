import React from 'react'
import delet from "../assets/svg/delet.svg"
import bag from "../assets/image/bag.png"
import cart from "../assets/svg/cart.svg"
import "./Wishlist.scss"
import { useSelector } from 'react-redux'

function Wishlist() {
    const {items} = useSelector((state) => state.wishlist);

  return (
    <div>
        <div className='bag container'>
        <div  className='w-header'>
            <h3>Wishlist ({items.length})</h3>
            <button>Move All To Bag</button>
        </div>
        <div className='w-product'>
            {
                items.map((data) => (
                    <div className='product-1'>
                    <div className='w-image'>
                    <img src={data.imageUrl} alt="" />
                    <div className='cart'>
                        <img src={cart} alt="" />
                    <button>Add to cart</button>
                    </div>
                    <span>-40%</span>
                    </div>
                    <div className='gucci'>
                    <img className='gucci-img' src={delet} alt="" />
                    <h5>Gucci duffle bag</h5>
                    <div className='price'>
                    <p>$960</p>
                    <span>$1160</span>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
        </div>
        <div className='just'>
        </div>
    </div>
  )
}

export default Wishlist
