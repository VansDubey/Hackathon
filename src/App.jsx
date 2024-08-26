import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Login from './components/Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Scrape from './Scrape'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><div class="vid">
      <video autoplay loop muted src="https://videos.pexels.com/video-files/6929604/6929604-hd_1920_1080_30fps.mp4"></video>
  </div><Navbar/> <div class="part-2">
        <h1>ScrapeQ</h1>
        <p>Your everyday query stop, All at one place
          HURRRY!! Just get started by clicking the button below</p>
        <Link to="/scrape"><button>Let's Scrape</button></Link>
    </div> </>
  

    },

    {
      path:'/sign-in',
      element:<Signin />
    },

    {
      path:'/Log-in',
      element:<Login/>
    },
    {
      path:'/scrape',
      element:<Scrape/>
    },


  ])
  



  return (
    
    <div
    style={{
      background: 'linear-gradient(to left bottom, #42b7ff, #163850)',
      height: '100vh',
      border: '2px solid black' // Add the border here
    }}
  >
      

  <RouterProvider router={router}/>
  </div>
  
  )
}


export default App
