import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { admin_login,messageClear  } from '../../store/Reducers/authReducer';
import { PropagateLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loader,errorMessage,successMessage} = useSelector(state=>state.auth)

  const [state, setState] = useState({ 
    email: "",
    password: ""
})

const inputHandle = (e) => {
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
}

const submit = (e) => {
    e.preventDefault()
    dispatch(admin_login(state))
    // console.log(state)
}
const overrideStyle = {
  display : 'flex',
  margin : '0 auto',
  height: '24px',
  justifyContent : 'center',
  alignItems : 'center'
}
useEffect(() => {
  if (errorMessage) {
     alert("Wrong Password")
     toast.error(errorMessage);
    dispatch(messageClear())
  } if (successMessage) {
    alert("Login Success")
    toast.success(successMessage)
    dispatch(messageClear())  
    navigate('/')          
}
},[errorMessage,successMessage])

  return (
    <>
  <div className="min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center">
        <div className="w-[350px] text-[#ffffff] p-2">
          <div className="bg-[#6f68d1] p-4 rounded-md">
            <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
            <p className="text-sm mb-3 font-medium">
              Please Login your account
            </p>

            <form onSubmit={submit}>
              <div className="flex flex-col w-full gap-1 mb-3">
               
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={inputHandle}
                    value={state.email}
                    className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                    type="email"
                    name="email"
                    placeholder="Email"
                    id="email"
                    required
                  />
                </div>

                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    onChange={inputHandle}
                    value={state.password}
                    className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                  />
                </div>

               
                <button disabled={loader ? true : false}  className='bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
               loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Login'
            } 
            </button>

        
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLogin
