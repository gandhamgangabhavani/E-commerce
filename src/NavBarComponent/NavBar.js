import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import style from './nav.module.css'; // Assuming you have some custom styles

const NavBar = ({ cart }) => {
  return (
    <>
      <div className={` px-5 mb-5 ${style.navbar}`}>
       
            <nav className={` py-2 ${style.navbarIcon}`}>
              <img src={logo} alt="icon" width="60" height="60" />
            </nav>
            <div className={`text-center`}>
             <h5><Link to='/' className="nav-link">Products</Link></h5> 
            </div>
            <div className={`${style.navbarRight} position-relative text-end`}>
              <Link to='/cart' className="position-relative">
                <i className={`bi bi-cart3 fs-1 ${style.cartIcon}` }></i>
                <p className={style.cartCount}>({cart.length})</p>
              </Link>
            </div>
         
          </div>
    </>
  );
};

export default NavBar;