import React, {useState, useEffect} from 'react'
import "./Item.scss"
import { useParams } from 'react-router-dom'
import play from "../../assets/image/play.png"
import axios from 'axios'


const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/advertisement"



function ItemProduct() {
    const {id} = useParams()
    const [data, setData] = useState({})
    const [image, setImage] =useState("")

    async function getProductById(params) {
        try {
            const res = await axios.get(`${API}/${id}`)

            console.log(res);
            setData(res.data)
            setImage(res.data.imageUrl)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {getProductById()}, [])
  return (
    <div className='item container'>

        <div className='images'>
        {
            data.imagesUrl?.map((item) => (
                <img onClick={() => setImage(item)} className='i' src={item} alt="" />
            ))
        }
              
            </div>
      
      <div className='image'>
        <img src={image} alt="" />
      </div>
      <div className='text'>
        <h1>Havic HV G-92 Gamepad</h1>
        <h3>$192.00</h3>
        <p>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
        <div className='size'>
        
            <p>Size:</p>
            {
                data.size?.map((x, index) => (
                    <span key={index}>{x}</span>
                ))
            }
            

        </div>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default ItemProduct
