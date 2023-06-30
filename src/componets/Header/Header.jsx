import React from 'react';
import styles from "./Header.module.css";
import logo from "./Logo.svg";
import search from "./Search.svg";
import cart from "./CartIcon.svg";
import menu from "./menu.svg";



const Header = () => {
  return (
      
    
    
      <div className={styles.header}>
        <div className={styles.header__section}>
          <div className={styles.header__Logo}>
            <img src={logo}/>
          </div>
          <div className={styles.header__itemLogo}> 
            Organick
          </div>
          <ul className={styles.menu}>
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
            <li className={styles.burger}><img src={menu}/></li>
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
        </div>

      </div>
    
  )
};

export default Header;