import React, {useState, useEffect} from 'react'
import "./Product.scss"
import left from "../../assets/svg/left.svg"
import right from "../../assets/svg/right.svg"
import play from "../../assets/image/play.png"
import star from "../../assets/svg/fivestar.svg"
import heart2 from "../../assets/svg/heart2.svg"
import eye from "../../assets/svg/eye.svg"
import axios from 'axios'
import Star from '../../assets/svg/Star'
import { Link } from 'react-router-dom'


import { useDispatch } from 'react-redux'
import { addCount } from '../../redux/counter/countSlice'
import { minusCount } from '../../redux/counter/countSlice'

import { minusCart } from '../../redux/counter/countSlice'
import { addWish } from '../../redux/wishlist/wishSlice'
import { addCart } from '../../redux/cart/cartSlice'

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"

function Product() {
    const [products, setProducts] = useState([])
    const [time, setTime] = useState({days:0, hours:0, minutes:0, seconds:0});

    const dispatch = useDispatch()

    useEffect(() => {
        const targetTime = new Date().getTime() + 3 * 24 * 60 * 60*1000
 
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const difference = targetTime - now
            

            const days = Math.floor(difference/(1000*60*60*24))
            const hours=Math.floor((difference % (1000*60*60*24))/(1000*60*60)) 
            const minutes=Math.floor((difference % (1000*60*60))/(1000*60)) 

            const seconds = Math.floor((difference % (1000*60)/1000)) 
            if(difference<0){
                clearInterval(interval)
            }else{
                setTime({days,hours,minutes, seconds})
            }
        }, 1000)
        return () => clearInterval(interval)
        
    },[])

    // console.log(new Date().getTime());
    

    async function getProduct() {
        try {
            const res = await axios.get(API)
            
            setProducts(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {getProduct()}, [])
  
    function checkPrice(p, d) {
      return  p-(p*(d/100)).toFixed(0)
    }
   


  return (
    <div className='sales container'>
        <div className='flash'>
        <div className='flash-left'>
            <div className='today'>
                <div className='text'>
                    <div className='red-line'>
                    </div>
                        <p> Today’s</p>
                    </div>
                <h3>Flash Sales</h3>
            </div>
            <div className='group'>
                <div className='count'>
                    <p>Days</p>
                    <h4>{time.days}</h4>
                </div> 
                <span>:</span>
                <div className='count'>
                    <p>Hours</p>
                    <h4>{time.hours}</h4>
                </div> 
                <span>:</span>
                <div className='count'>
                    <p>Minutes</p>
                <h4>{time.minutes}</h4>
                </div>
                 <span>:</span>
                <div className='count'>
                    <p>Seconds</p>
                    <h4>{time.seconds}</h4>
                </div>
            </div>
        </div>
        <div className='flash-icons'>
           <img src={left} alt="" />
           <img src={right} alt="" />
        </div>
        {/* <button onClick={()=> dispatch(addCount())}>ADD</button> */}
        <button onClick={()=> dispatch(minusCount())}>-ADD</button>
        <button onClick={()=> dispatch(minusCart())}>-add</button>
        </div>
        <div className='products'>
                {
                    products.map((item) => (
                        <div key={item.id}>
                             <div className='product'>
                                {
                                    item.discount && (<span>-{item.discount}%</span>)
                                }
                <Link to={`/product/${item.id}`}>
                <img src={item.imageUrl} alt="" />
                </Link>
            <div className='fivestar'>
                { [1,2,3,4,5].map((x) => (
                        <Star key={x} fill={item.star >= x ?"#FFAD33" : "grey"}/>
                    ))
                }           
            </div>
            <div className='heart'>
            <img onClick={()=> dispatch(addWish(item))} src={heart2} alt="" />
            </div>
            <button onClick={()=> dispatch(addCart(item))}>Add To Card</button>

             <h1>{item.title}</h1>
            <p>{checkPrice(item.price, item.discount)}</p> 
            {
                 item.discount && ( <div className='discount'>{item.price}</div>)
             }
            </div>
        </div>
                    ))
                }
        </div>
    </div>
  )
}
export default Product