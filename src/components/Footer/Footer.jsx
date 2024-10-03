import React from 'react'
import "./footer.css"

function Footer() {
  return (
    <div>
      <div className='main-footer container'>
        <div>
            <h6>Exclusive</h6>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <input type="text" placeholder='Enter you email' />
        </div>
        <div>
            <h6>Support</h6>
            <p>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
        </div>
        <div>
            <h6>Account</h6>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
        </div>
        <div>
            <h6>Shop</h6>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
        </div>
        <div>
            <h6>Contact</h6>
            <p>Save $3 with App New User Only</p>
            <div className='img-logo'>
                <div className='image'>
                    <img src="https://user-images.githubusercontent.com/25679721/114888298-b9ea0680-9e26-11eb-8b90-cd2a61a4cfbf.png" alt="" />
                </div>
                <div className='img-store'>
                    <img src="https://www.enervent.com/wp-content/uploads/2018/11/google-play-badge-logo-png-transparent.png" alt="" />
                    <img src="https://www.pngall.com/wp-content/uploads/15/App-Store-Logo-PNG-Free-Image.png" alt="" />
                </div>
            </div>
            <div className='logo'>
                <img src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Twitter_logo.png" alt="" />
                <img src="https://cdn.icon-icons.com/icons2/3042/PNG/512/instagram_logo_icon_189247.png" alt="" />
                <p>in</p>
            </div>
        </div>
    </div>
       
      
    </div>
  )
}

export default Footer
