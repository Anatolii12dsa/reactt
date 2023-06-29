import React from 'react'
import styles from "./Footer.module.css";
import logo from './Logo.svg';
import soc1 from './soc1.svg';
import soc2 from './soc2.svg';
import soc3 from './soc3.svg';
import soc4 from './soc4.svg';

const Footer = () => {
  return (
    <div className={styles.conteiner}>
       <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.content1_1}>Contact Us</div>
          <div className={styles.content1_2}>Email</div>
          <div className={styles.content1_3}>needhelp@Organia.com</div>
          <div className={styles.content1_4}>Phone</div>
          <div className={styles.content1_5}>666 666 666</div>
          <div className={styles.content1_6}>Address</div>
          <div className={styles.content1_7}>88 road, borklyn street, USA</div>
        </div>
        <div className={styles.content2}>
          <div className={styles.content2_1}><img src={logo}/></div>
          <div className={styles.content2_2}>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </div>
          <div className={styles.content2_3}><img src={soc1}/><img src={soc2}/><img src={soc3}/><img src={soc4}/></div>
        </div>
        <div className={styles.content3}>
          <div className={styles.content3_1}>Utility Pages</div>
          <div className={styles.content3_2}>
            <div>Style Guide</div>
            <div>404 Not Found</div>
            <div>Password Protected</div>
            <div>Licences</div>
            <div>Changelog</div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer