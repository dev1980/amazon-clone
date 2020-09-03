import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      {/*logo on the left -> img*/}
      <Link to="/">
      <img 
  className = "header__logo" 
  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
  alt="amazon logo"/>
  </Link>
        {/*search box*/}
<div className = "header__search">
<input type="text" className="header__searchInput"/>
  <SearchIcon className="header__searchIcon" />
</div>
    
      {/*3 links*/}
      <div className="header__nav">
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span>Hello</span>
          <span>Sign In</span>
        </div>
      </Link>
      <Link to="/" className="header__link">
        <div className="header__option">
          <span>Returns</span>
          <span>& Orders</span>
        </div>
      </Link> 

      <Link to="/" className="header__link">
        <div className="header__option">
          <span>Hello</span>
          <span>Sign In</span>
        </div>
      </Link>

      </div>

      {/*Basket icons with number*/}


    </nav>
  )
}

export default Header
