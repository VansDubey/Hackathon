import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');


    async function handleSubmit(e){
        e.preventDefault();
        const response = await fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({ 
                email : email,
                password:password
             }),
             headers: {
                "Content-Type": "application/json",
              },
          });
          setuser = {email,password};
        
    }
    return (

          
 <div className=" w-1/2 mx-auto p-1 mt-16 flex flex-col gap-4 " >
            <h1 className="text-xl font-bold text-center underline">Login</h1>
            <form onSubmit={handleSubmit}className="flex flex-col items-center gap-7 p-4 border  rounded-xl">
                <input type="text"  value={email} onChange={(e)=>{setemail(e.target.value)}}placeholder="Enter Your Email" className="border-1 border-slate-700 rounded-lg bg-white w-full p-1" />
                <input type="password" placeholder="Password" onChange={(e)=>{setpassword(e.target.value)}} className="border-1  border-slate-700  rounded-lg bg-white w-full p-1" />
                <input type="submit" className=" w-1/2 bg-white rounded-xl p-1 font-bold " />
            </form>
            <div className="flex mx-auto">
            <p>Don't have an account yet?</p><Link to='/sign-in' className="underline">Register Now!!</Link>
            </div>
        </div>
        
       
       
    )


}

export default Login
