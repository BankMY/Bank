import { FunctionComponent } from "react";
import styles from "./Menu_mini.module.css";
import { Link } from "react-router-dom";

import item1 from "../../assets/svg/CRM/Menu_mini/Frame1.svg";
import item1_blue from "../../assets/svg/CRM/Menu_mini/Frame1_blue.svg";
import item2 from "../../assets/svg/CRM/Menu_mini/Frame2.svg";
import item2_blue from "../../assets/svg/CRM/Menu_mini/Frame2_blue.svg";
import item3 from "../../assets/svg/CRM/Menu_mini/Frame3.svg";
import item3_blue from "../../assets/svg/CRM/Menu_mini/Frame3_blue.svg";
import item4 from "../../assets/svg/CRM/Menu_mini/Frame4.svg";
import item4_blue from "../../assets/svg/CRM/Menu_mini/Frame4_blue.svg";
import item5 from "../../assets/svg/CRM/Menu_mini/Frame5.svg";
import item5_blue from "../../assets/svg/CRM/Menu_mini/Frame5_blue.svg";
import item6 from "../../assets/svg/CRM/Menu_mini/Frame6.svg";
import item6_blue from "../../assets/svg/CRM/Menu_mini/Frame6_blue.svg";
import item7 from "../../assets/svg/CRM/Menu_mini/Frame7.svg";
import item7_blue from "../../assets/svg/CRM/Menu_mini/Frame7_blue.svg";
import item8 from "../../assets/svg/CRM/Menu_mini/Frame8.svg";
import item8_blue from "../../assets/svg/CRM/Menu_mini/Frame8_blue.svg";
import item9 from "../../assets/svg/CRM/Menu_mini/Frame9.svg";
import item9_blue from "../../assets/svg/CRM/Menu_mini/Frame9_blue.svg";
import item10 from "../../assets/svg/CRM/Menu_mini/Frame10.svg";
import item10_blue from "../../assets/svg/CRM/Menu_mini/Frame10_blue.svg";


export interface Menu_miniType {
    active?: string,
  };

const Menu_mini: FunctionComponent<Menu_miniType> = ({ active = '' }) => {
 

  return (
    <nav className={styles.main}>
        <div className={styles.wrapper}>
        <Link to="/dashbord">
            <img src={active === '1' ? item1_blue : item1} alt=""/>
        </Link>
        <Link to="/AccountsCRM">
            <img src={active === '2' ? item2_blue : item2} alt=""/>
        </Link>
        <Link to="/CardsCRM">
            <img src={active === '3' ? item3_blue : item3} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '4' ? item4_blue : item4} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '5' ? item5_blue : item5} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '6' ? item6_blue : item6} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '7' ? item7_blue : item7} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '8' ? item8_blue : item8} alt=""/>
        </Link>
        <Link to="/SubscriptionsCRM">
            <img src={active === '9' ? item9_blue : item9} alt=""/>
        </Link>
        <Link to="*">
            <img src={active === '10' ? item10_blue : item10} alt=""/>
        </Link>
      </div>
    </nav>
  );
};




export default Menu_mini;
