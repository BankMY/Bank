import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Dashbord.module.css";
import Menu_mini from "../../components/CRM/Menu_mini";
import welcome_img from "../../assets/svg/CRM/Dashboard/Welkoming_message.svg";
import btn1 from "../../assets/svg/CRM/crm_btn1.svg";

import item1_menu from "../../assets/svg/CRM/Dashboard/Group 109.svg";
import SliderMy from "../../components/CRM/SliderMy";

const Dashbord: FunctionComponent = () => {

  const [sliderValue, setSliderValue] = useState(30);
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
                <div className={styles.totalbalance_text}>Total balance
                  <nav>
                    <Link to="/totalbalance">
                      <img className={styles.btn_1} src={btn1} alt=''/>
                    </Link>
                  </nav>             
                </div>

                <div className={styles.totalbalance_t}>$
                  <span className={styles.totalbalance_value}>4.360
                    <span className={styles.totalbalance_value2}>.29</span></span>
                </div>

                <div className={styles.item1_menu}>
                  <img src={item1_menu}></img>
                </div>
                <SliderMy 
                  min={0}
                  max={100}
                  value={sliderValue}
                  onChange={setSliderValue}></SliderMy>
            </div>

          </div>
          
        </div>
      </main>
  );
};

export default Dashbord;
