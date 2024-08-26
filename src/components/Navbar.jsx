 import React from 'react'
 import { Link } from 'react-router-dom';
 
 const Navbar = () => {
   return (
    <div class="nav">
    <div class="name">
        ScrapeQ
    </div>
    <div class="enter flex gap-4 ">
    <Link to ="Log-in"><button>Log-in</button></Link>
    <Link to ="sign-in"><button>Sign-up</button></Link>
    </div>
</div>

   
   )
 }
 
 export default Navbar
 