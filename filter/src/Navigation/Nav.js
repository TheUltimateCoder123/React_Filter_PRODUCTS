import React from 'react'
import {AiOutlineShoppingCart,AiOutlineUserAdd} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import '../index.css'
import './Nav.css'

function nav() {
  return (
  <nav>
<input type="text" 
className="search-input"
placeholder='Enter The Shoes...'
/>
<div className="Profile-container">

<a href='#'>
<FiHeart className='nav-icons'/>
</a>
<a href='#'>
<AiOutlineShoppingCart className='nav-icons'/>
</a>
<a href='#'>
<AiOutlineUserAdd className='nav-icons'/>
</a>




</div>
  </nav>
  )
}

export default nav