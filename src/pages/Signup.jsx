import React, { useState } from "react";
import phone from "../assets/image/phone.png";
import "./signup.scss";
import my from "../assets/svg/log.svg";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";








function Signup() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [activ, setActiv] = useState(false)

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  }

  async function createUser() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      if (res) {
        toast.success("user was success createt");
      }
    } catch (error) {
      console.log(error);
      toast.error("user already in use");
    }
  }

  return (
    <div className="signup container">
      <div className="image">
        <img src={phone} alt="" />
      </div>
      <div className="create">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <input placeholder="Name" type="text" /> <br />
        <input
          placeholder="Email or Phone Number"
          type="email"
          value={user.email}
          name="email"
          onChange={handler}
        />
        <br />
        <div className="inputs">
        <input
          placeholder="Password"
          type={activ ? "text" : "password"}
          value={user.password}
          name="password"
          onChange={handler}
        /> 
        {activ ? <FaEyeSlash onClick={() => setActiv(false)} /> : <FaEye onClick={() => setActiv(true)}/> }

        </div>
       

        <br />
        <div className="btnn">
          <button onClick={() => createUser()}>Create Account</button>
          <div className="google">
            <img src={my} alt="" />
            <button>Sign up with Google</button>
          </div>
        </div>
        <div className="log">
          <span>Already have account?</span>
          <Link to="/login">Log in</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
