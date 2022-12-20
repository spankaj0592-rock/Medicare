import './navbar.css';

import { BiUserCircle} from "react-icons/bi";

import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
 <div className='Main-div'>
<nav>
<h1 style={{marginLeft:'30px'}}>
Medicl darpan
</h1>
<div className="rightside">
<ul>
    <li ><a >Home</a></li>
    <li><a>Poducts</a></li>
    <li><a>Distibuters</a></li>
    <li><a>Manufacture</a></li>
    <li><a>About us</a></li>
    <li><a>Blog</a></li>
  
</ul>
</div>
<div className='leftside'>
<ul>
    <li><a>Login</a></li>
    <li><a><BiUserCircle size={'25px'}/></a></li>
</ul>
</div>

</nav>
 </div>
  )
}

export default Navbar
