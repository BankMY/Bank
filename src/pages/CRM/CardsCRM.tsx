import { FunctionComponent, useState } from "react";





import Menu_mini from "../../components/CRM/Menu_mini";
import styles from "../../pages/CRM/CardsCRM.module.css";
import DigitalCards from "../../components/CRM/CardsCRM/DigitalCard"
import FreeButton from "../../assets/svg/CRM/CardsCRM/Component 9.svg"


const CardsCRM: FunctionComponent = () => {
    return(
        <main className={styles.main}>
            
        <Menu_mini active="3"></Menu_mini>
        <div className={styles.styleColumn}>
        <div className={styles.styleCardWord}>Cards</div>
        <DigitalCards
             DigitalCard="Digital Card"
             buttonFree="Free"
             TextDigital="A card that exists only online, but works everywhere. Easy, safe and always at hand."

        ></DigitalCards>
        </div>
        </main>
        
      
    );
};

export default CardsCRM;