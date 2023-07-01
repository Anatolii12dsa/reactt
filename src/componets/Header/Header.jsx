import React, { useState } from 'react';
import styles from "./Header.module.css";
import logo from "./Logo.svg";
import search from "./Search.svg";
import cart from "./CartIcon.svg";
import menu from "./menu.svg";
import menu1 from "./menu1.svg";



const Header = () => {
  const[nav, setNav] = useState(false);
  return (
      
    
    
      <div className={styles.header}>
        <div className={styles.header__section}>
          <div className={styles.header__Logo}>
            <img src={logo}/>
          </div>
          <div className={styles.header__itemLogo}> 
            Organick
          </div>
          <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu  ]}>
          <li className={styles.header__item}><a href="#">
            Home</a></li>
            <li className={styles.header__item}><a href="#">
            About</a></li>
            <li className={styles.header__item}><a href="#">
            Pages</a></li>
            <li className={styles.header__item}><a href="#">
            Shop</a></li>
            <li className={styles.header__item}><a href="#">
            Projects</a></li>
            <li className={styles.header__item}><a href="#">
            News</a></li>
            
            </ul>
        </div>
        <div className={styles.header__section2}>
        <div className={styles.d7}>
        <form>
          <input type="text" placeholder="Search..."></input>
          <button type="submit"><img className={styles.loop} src={search}/></button>
        </form>
        </div>
        <div className={styles.header__cart}>
          <div className={styles.header__cartIcon}><img src={cart}/></div>
          <div className={styles.cart}>cart (0) </div>
        </div>   
        {/* <button className={styles.burger}> */}
        <div onClick={() => setNav(!nav)} className={styles.burger}>
        {nav ? <img src={menu1}/> : <img src={menu}/>}
        </div>
        {/* <div className={styles.burger_close}>
        </div> */}
        {/* </button> */}
        {/* <nav className={styles.menu1}>
          <ul>Home</ul>
          <ul>About</ul>
          <ul>Pages</ul>
          <ul>Shop</ul>
        </nav> */}
        {/* <div className={styles.burger}><img src={menu}/></div> */}
        </div>
       
        

      </div>
      
    
  )
};

export default Header;