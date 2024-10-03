import React, {useState} from 'react'
import phone from '../assets/image/phone.png'

import "./login.scss"

import {auth} from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";


function Login() {
    const [user, setUser] = useState({email:"", password:""})
    const [activ, setActiv] = useState(false)

    function handler(event){
        const {value, name} = event.target;
        setUser({ ...user, [name]: value });
    }

    async function createUser() {
        try {
            const res = await signInWithEmailAndPassword(
                auth, user.email , user.password
            );
            if(res){
                toast.success("user was success createt");
            }
        } catch (error) {
            console.log(error);
            
            toast.error("user already in use");
        }
    }

  return (
    <div>
       <div className='signup container'>
      <div className='image'>
        <img src={phone} alt="" />
      </div>
      <div className='create'>
        <h1>Create an account</h1>
        <p>Enter your details below</p>
     
        <input placeholder='Email or Phone Number' type="email" value={user.email} name='email' onChange={handler} /><br />
        <input placeholder='Password'   type={activ ? "text" : "password"} value={user.password} name='password' onChange={handler}/><br />
       
        {activ ? <FaEyeSlash onClick={() => setActiv(false)} /> : <FaEye onClick={() => setActiv(true)}/> }


        <div className='bottons-1'>
        <button onClick={() => createUser()}>Login</button>
        <div className='btn2'>
        <button>Forget Password</button>
        </div>
        </div>
        
        
        <div className='log'>
        <span>Already have account?</span>
        <a href="">Log in</a>

        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Login
