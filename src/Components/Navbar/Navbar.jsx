import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" />
    </div>
  )
}

export default Navbar
