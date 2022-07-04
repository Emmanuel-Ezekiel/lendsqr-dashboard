import React, { useState } from 'react'
import './Login.scss'
import Lendsqr from '../../assets/lendsqr.png'
import Union from '../../assets/Union.png'
import Pablo from '../../assets/pablo-sign-in 1.svg'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Login = () => {
    const [ users, setUsers ] = useState({ email: "", password: ""});
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate();
    // const router = Navigate();
   
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    const submitHandler = e => {
        e.preventDefault();
    }


  return (
    <div className='login' onSubmit={submitHandler}>
        <div className="loginContainer">
            <div className="login-inner">
                <div className="Image">
                    <img src={Union} alt="" className='img1' />
                    <img src={Lendsqr} alt=""  className='img2' />
                </div>
                <div className="loginImage">
                    <img src={Pablo} alt="" />
                </div>
            </div>
            
            <div className="loginForm">
                <div className="form-inner">
                 <h2>Welcome!</h2>
                 <p>Enter details to login.</p>
                <form action="" className='form'>
                    <div className="form-group">
                       <input type="text" name='email' id="email" placeholder='Email' onChange={e => setUsers({...users, email: e.target.value})} value={users.email} />
                    </div>
                    <div className="form-group">
                       <input type={passwordShown ? "text" : "password"} name='password' id="password" placeholder='Password' onChange={e => setUsers({...users, password: e.target.value})} value={users.password} />
                       <h3 onClick={togglePasswordVisiblity}>show</h3>
                    </div>
                    <p>forgot password?</p>
                    <div class="centerTest">
                        <Link to="/home">
                            <span>LOG IN</span>
                        </Link>
                        
                    </div>
                </form>
                </div>               
            </div>
        </div>
    </div>
  )
}

export default Login