import { FunctionComponent, useState } from "react";

import styles from "./Dashbord.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";
import welcome_img from "../../assets/svg/CRM/Dashboard/Welkoming_message.svg";
import btn1 from "../../assets/svg/CRM/crm_btn1.svg";

import item1_menu from "../../assets/svg/CRM/Dashboard/Group 109.svg";
import SliderMy from "../../components/CRM/SliderMy";
import dollar from "../../assets/svg/CRM/Dashboard/Group 7073.svg"
import euro from "../../assets/svg/CRM/Dashboard/Group 7074.svg"
import DollarContainer from "../../components/CRM/Dashboard/DollarContainer";
import card from "../../assets/svg/CRM/card_template.svg";
import card_full from "../../assets/svg/CRM/card_full.svg";
import Title_with_btn from "../../components/CRM/Title_with_btn";

import card_usd_black from "../../assets/svg/CRM/Dashboard/Frame 101.svg";
import card_euro_blue from "../../assets/svg/CRM/Dashboard/Frame 102.svg";
import card_pound_green from "../../assets/svg/CRM/Dashboard/Frame 103.svg";
import card_cd_white from "../../assets/svg/CRM/Dashboard/Frame 104.svg";
import map from "../../assets/svg/CRM/Dashboard/Map.svg";
import subs from "../../assets/svg/CRM/Dashboard/subs.svg";
import your from "../../assets/svg/CRM/Dashboard/Your expenses this year.svg";

import img1_item6 from "../../assets/svg/CRM/Dashboard/Component 48.svg";
import img2_item6 from "../../assets/svg/CRM/Dashboard/Component 49.svg";
import img3_item6 from "../../assets/svg/CRM/Dashboard/Component 50.svg";
import img1_item6_color from "../../assets/svg/CRM/Dashboard/48_color.svg";
import img2_item6_color from "../../assets/svg/CRM/Dashboard/49_color.svg";
import img3_item6_color from "../../assets/svg/CRM/Dashboard/50_color.svg";

import playstation from "../../assets/svg/CRM/Dashboard/playstation.svg";
import apple from "../../assets/svg/CRM/Dashboard/apple.svg";
import nike from "../../assets/svg/CRM/Dashboard/nike.svg";
import line from "../../assets/svg/CRM/Dashboard/Line.svg";
import face2 from "../../assets/svg/CRM/Dashboard/Ellipse 96.svg";
import face1 from "../../assets/svg/CRM/Dashboard/Ellipse 97.svg";


import { Link } from "react-router-dom";
import Transaction from "../../components/CRM/Dashboard/Transaction";

const Dashbord: FunctionComponent = () => {

  const [img1Src, setImg1Src] = useState<string>(img1_item6);
  const [img2Src, setImg2Src] = useState<string>(img2_item6);
  const [img3Src, setImg3Src] = useState<string>(img3_item6);
  const [sliderValue, setSliderValue] = useState(20);
  
  return (
      <main className={styles.main}>
        <Menu_mini active="1"></Menu_mini>
        <div className={styles.welcomeContent}>
          <div className={styles.titlemain}>Dashboard</div>
          <div className={styles.welcome_wrapper}>
            <img className={styles.welcome_img} src={welcome_img} alt=""></img>
            <div className={styles.hellomsg}>
              Welcome back, <span className={styles.welcome_name}>Jaxon Redmone</span>
            </div>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.item1}>
                <Title_with_btn text="Total balance" imgbtn={btn1}
                href="/totalbalance"/>

                <div className={styles.totalbalance_t}>$
                  <span className={styles.totalbalance_value}>4.360
                    <span className={styles.totalbalance_value2}>.29</span></span>
                </div>

                <div className={styles.item1_menu}>
                  <img src={item1_menu}></img>
                </div>

                <div className={styles.spendingContainer}>Spending in May
                  <SliderMy 
                    min={0}
                    max={100}
                    step={20}
                    value={sliderValue}
                    onChange={setSliderValue}/>
                  <div className={styles.money_item1_container}>
                    <div className={styles.money_item1}>
                      $260<span className={styles.money_item1_span}>.00</span>
                    </div>
                    <span className={styles.lessmoney_item1}>This is $100.00 less then last month</span>
                  </div>
                </div>
                
                <DollarContainer
                  dollarImage={dollar}
                  value="5.260"
                  spanValue=".00"
                  percentage="1.9%"
                />
                <DollarContainer
                  dollarImage={euro}
                  value="1.260"
                  spanValue=".00"
                  percentage="0.9%"
                />
                
                <nav className={styles.cardContainer}>
                  {/* <img src={card}></img>
                  <p>4312 9578 4206 XXXX</p> */}
                  <Link to="/CRMcards">
                    <img src={card_full}></img>
                  </Link>
                  
                </nav>
            </div>

            <div className={styles.middleBlock}>
              <div className={styles.middle_row}>

                <div className={styles.item2}>
                  <Title_with_btn text="Exchange currency" imgbtn={btn1}
                    href="/exchange"/>                 
                  <div className={styles.cards_item2}>
                    <img src={card_usd_black}></img>
                    <img src={card_euro_blue}></img>
                    <img src={card_pound_green}></img>
                    <img src={card_cd_white}></img>                 
                  </div>                   
                </div>

                <div className={styles.middle_column}>
                  <div className={styles.item4}>
                    <Title_with_btn text="ATMs on the map" imgbtn={btn1}
                    href="/exchange"/>
                    <div className={styles.text_item4}>We found 46 ATM</div>
                    <img className={styles.img_map} src={map}></img>
                  </div>

                  <div className={styles.item5}>
                    <Title_with_btn text="Subscriptions" imgbtn={btn1}
                    href="/exchange"/>
                    <img className={styles.img_subs} src={subs}></img>
                  </div>
                </div>
                
              </div> 

              <img className={styles.img_item3} src={your}></img>
              {/* <div className={styles.item3}>
                <Title_with_btn text="Your expenses this year" imgbtn={btn1}
                href="/exchange"/>
                
              </div> */}
            </div>

            <div className={styles.rightSide}>
              <div className={styles.item6}>
                {/* <Title_with_btn text="6 da" imgbtn={btn1}
                href="/exchange"/> */}
                <img
                className={styles.img_item6}
                src={img1Src}
                alt=""
                onMouseEnter={() => setImg1Src(img1_item6_color)}
                onMouseLeave={() => setImg1Src(img1_item6)}
                />
                <img
                className={styles.img_item6}
                src={img2Src}
                alt=""
                onMouseEnter={() => setImg2Src(img2_item6_color)}
                onMouseLeave={() => setImg2Src(img2_item6)}
                />
                <img
                className={styles.img_item6}
                src={img3Src}
                alt=""
                onMouseEnter={() => setImg3Src(img3_item6_color)}
                onMouseLeave={() => setImg3Src(img3_item6)}
                />
              </div>
              <div className={styles.item7}>
                <Title_with_btn text="Transaction history" imgbtn={btn1}
                href="/exchange"/>
                <div className={styles.text_item4}>Today, 6 july</div>
                <div className={styles.transactions_container}>
                  <Transaction
                    imageSrc={playstation}
                    text1="PlayStation"
                    text2="Second text, left block"
                    text3="-$67.90"
                    text4="10.20 AM"
                  />
                  <Transaction
                    imageSrc={apple}
                    text1="Apple Store"
                    text2="Second text, left block"
                    text3="-$127.90"
                    text4="11.20 AM"
                  />
                  <Transaction
                    imageSrc={nike}
                    text1="Nike Store"
                    text2="Second text, left block"
                    text3="-$47.90"
                    text4="11.50 AM"
                  />
                </div>
                <img className={styles.line} src={line}></img>
                <div className={styles.text_item4}>Yesterday, 5 july</div>
                <div className={styles.transactions_container}>
                  <Transaction
                    imageSrc={face1}
                    text1="Meteo Willams"
                    text2="Purchase"
                    text3="+$347.90"
                    text4="11.50 AM"

                    text3Color="#24C848"
                  />
                  <Transaction
                    imageSrc={face2}
                    text1="Anna Morphy"
                    text2="Purchase"
                    text3="+$547.90"
                    text4="11.50 AM"

                    text3Color="#24C848"
                  />
                </div>
              </div>
              
            </div>
            
            
          </div>          
        </div>
      </main>
  );
};

export default Dashbord;
