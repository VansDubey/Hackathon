import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

   async  function handleSubmit(e){
        e.preventDefault();
        const response = fetch("http://localhost:3000/", {
            method: "POST",
            body: JSON.stringify({ 
                name:name,
                email:email,
                password:password
             }),
            headers:{
                "Content-Type": "application/json"
            } ,
          })
       
        
    }
  return (
    
    <div className="  w-1/2 mx-auto p-1 mt-16 flex flex-col gap-4" >
    <h1 className="text-xl font-bold text-center underline">Sign-Up</h1>
    <form className="flex flex-col items-center gap-7 p-4 border  rounded-xl" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e)=>{setname(e.target.value)}} className="border-1 border-slate-700 rounded-lg bg-white w-full p-1"/>
        <input type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>{setemail(e.target.value)}} className="border-1 border-slate-700 rounded-lg bg-white w-full p-1" />
        <input type="password" placeholder="Password"  value={password} onChange={(e)=>{setpassword(e.target.value)}}className="border-1  border-slate-700  rounded-lg bg-white w-full p-1" />
        <input type="submit"  className=" w-1/2  bg-white rounded-xl  p-1 font-bold " />
    </form>
    <div className="flex mx-auto">
    <p>Already a member?</p><Link to='/Log-in' className="underline">Login!!</Link>
    </div>
</div>


   
    

    
  )
}

export default Signin
