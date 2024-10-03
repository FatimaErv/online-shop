import React from "react";
import search from "../../assets/svg/search.svg";
import wishlist from "../../assets/svg/heart.svg";
import cart from "../../assets/svg/karzin.svg";
import "./header.scss";
import { Link } from "react-router-dom";
import {useTranslation} from "react-i18next"
import { useSelector } from "react-redux";




function Header() {
  const {t, i18n } = useTranslation()
  
  const {items} = useSelector((state) => state.wishlist)
  const {list} = useSelector((state) => state.cart)
  
  
  const {valueCart} = useSelector((state) => state.counter)
  function handleChangeLng(event) {
    const lng = event.target.value;
    i18n.changeLanguage(lng)

  }

 
  return (
    <div>
      <div className="top-header">
        <div className="container flex">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <select onChange={handleChangeLng}>
            <option value="kg">KGZ</option>
            <option value="en">ENG</option>
            <option value="ru">RUS</option>
          </select>
        </div>
      </div>
      <header className="header container">
        <div className="header-left">
          <h1>{t("logo")}</h1>
          <ul>
            <li>
              <Link to="/">{t("home")}</Link>
            </li>
            <li>
              <Link to="/about">{t("about")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
            <li>
              <Link to="/register">{t("signup")}</Link>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <input type="text" placeholder="What are you looking for?" />
            <img src={search} alt="" />
          </div>
          <div className="icons">
            <div className="icon">
            <Link to="/wishlist">
            <img src={wishlist} alt="" />
            </Link>
            <div className="count">{items.length}</div>
            </div>
            <Link to="/cart" className="cart-new">
            <img src={cart} alt="" />
            <div className="cart-count">{list.length}</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

// import React from 'react'
// // import "./header.css"
// import "./header.scss"
// import { Link } from 'react-router-dom'
// import search from '../../assets/svg/search.svg'
// import heart from '../../assets/svg/heart.svg'
// import karzin from '../../assets/svg/karzin.svg'

// function Header() {
//   return (
//     <div className='header container'>
//         <div className='header-black'>
//             <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
//             <select>
//               <option value="kg">KG</option>
//               <option value="en">ENG</option>
//               <option value="ru">RUS</option>
//             </select>
//         </div>
//       <div className='header-2'>
         
//         <h1>Exclusive</h1>
//         <div className='header-a'>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/register">Sign Up</Link>
//         </div>
       
//         <div className='header-3'>
//         <input placeholder='What are you looking for?' type="text" />
//         <img src={search} alt="" />
//         <img src={heart} alt="" />
//         <img src={karzin} alt="" />
//         </div>
     
//       </div>
//       <hr className='header-hr' /> 
//     </div>
//   )
// }

// export default Header
