import React from 'react';
import styles from './Main.module.css';
import banner from './Group.png';
import aerrow from './Aerrow.svg';
import pict from './pict.png';
import pict2 from './pict2.png';
import orange from './GroupOrange.png';
import icon from './Icon.svg';
import icon1 from './Icon1.svg';
import veg from './Veg.svg';
import stars from './Star.svg';
import fresh from './Fresh.svg';
import mill from './mill.svg';
import veg1 from './veg1.svg';
import hel from './hel.svg';
import nuts from './Nuts.svg';
import fresh1 from './Fresh1.svg';
import fresh2 from './Fresh2.svg';
import orange1 from './Orange1.svg';
// import medImg from './medImg.png'


const Main = () => {
  return (
    
    <div className={styles.main__conteiner}>
      
      <div className={styles.content}>
        
          <div className={styles.main__content}>100% Natural Food</div>
          <div className={styles.main__content1}>Choose the best healthier way of life</div>
          <div className={styles.main__content__button1}>
            <button className={styles.main__content__button}> Explore Now <img src={aerrow}/></button>    
          </div>
       
        
      </div>
      <div>
            <img className={styles.banner} src={banner}/>
      </div>  
      
      {/* <div className={styles.banner1}>
      <img className={styles.banner11} src={medImg}/>
      </div> */}
      <div className={styles.main__conteiner1}>
        <img className={styles.mainPict} src={pict}/>
        <img className={styles.mainPict2} src={pict2}/>
      </div>
      <div className={styles.main__conteiner2}>
        <div className={styles.content2}>
          <div className={styles.main__content2}>About Us</div>
          <div className={styles.main__content3}>We Believe in Working
Accredited Farmers</div>
          <div className={styles.main__content4}>Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</div>
          <div className={styles.main__content5}>Organic Foods Only</div>
          <div className={styles.main__content6}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
          <div className={styles.main__content7}>Quality Standards</div>
          <div className={styles.main__content8}>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
          <div className={styles.main__content1__button1}>
           <button className={styles.main__content1__button}> Shop Now <img src={aerrow}/></button> 
          </div>
      </div>
        <img className={styles.main__orange1} src={orange}/>
      </div>
      <div className={styles.grid}>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Vegetable</div>
          <div className={styles.grid__img}><img src={veg}/></div>
          <div className={styles.name}>Calabrese Broccoli</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>13.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Fresh</div>
          <div className={styles.grid__img}><img src={fresh}/></div>
          <div className={styles.name}>Fresh Banana Fruites</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>14.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Millets</div>
          <div className={styles.grid__img}><img src={mill}/></div>
          <div className={styles.name}>Fresh Banana Fruites</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>14.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Vegetable</div>
          <div className={styles.grid__img}><img src={veg1}/></div>
          <div className={styles.name}>Vegan Red Tomato</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>17.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
          <div className={styles.grid__itm}>
          <div className={styles.veg}>Health</div>
          <div className={styles.grid__img}><img src={hel}/></div>
          <div className={styles.name}>Mung Bean</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>11.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Nuts</div>
          <div className={styles.grid__img}><img src={nuts}/></div>
          <div className={styles.name}>Brown Hazelnut</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>12.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Fresh</div>
          <div className={styles.grid__img}><img src={fresh1}/></div>
          <div className={styles.name}>Eggs</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>17.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
        <div className={styles.grid__itm}>
          <div className={styles.veg}>Fresh</div>
          <div className={styles.grid__img}><img src={fresh2}/></div>
          <div className={styles.name}>Zelco Suji Elaichi Rusk</div>
          <div className={styles.cost}>
            <div className={styles.grid__cost}>15.00$</div>
            <div className={styles.grid__stars}><img src={stars}/></div>
          </div>
          
        </div>
      </div>  
      <div className={styles.main__orange}>
        <div className={styles.main__orangeImg}>
          <div className={styles.main__oangeText}>
          Subscribe to
our Newsletter
          </div>
          <div className={styles.main__orangeContent}>
            <input type="text" placeholder="Your Email Address"></input>
            <button>Subscribe</button>
          </div>
          <img src={orange1}/>
          
        </div>
      </div>
    </div>
    

  )
}

export default Main