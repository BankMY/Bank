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

const Dashbord: FunctionComponent = () => {

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
                
                <div className={styles.cardContainer}>
                  {/* <img src={card}></img>
                  <p>4312 9578 4206 XXXX</p> */}
                  <img src={card_full}></img>
                </div>
            </div>

            <div className={styles.middleBlock}>
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
            </div>
            
          </div>          
        </div>
      </main>
  );
};

export default Dashbord;
