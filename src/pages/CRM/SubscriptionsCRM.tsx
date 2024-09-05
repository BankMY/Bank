import { FunctionComponent, useState } from "react";


import Menu_mini from "../../components/CRM/Menu_mini";
import styles from "../../pages/CRM/SubscriptionsCRM.module.css";
import First from "../../assets/svg/CRM/SubSVG/image 17.svg"
import Second from "../../assets/svg/CRM/SubSVG/image 15.svg";
import Third from "../../assets/svg/CRM/SubSVG/image 16.svg";
import Fourth from "../../assets/svg/CRM/SubSVG/image 18.svg";

import Fifth from "../../assets/svg/CRM/SubSVG/image 19.svg"
import Sixth from "../../assets/svg/CRM/SubSVG/image 20.svg";
import Seventh from "../../assets/svg/CRM/SubSVG/image 21.svg";
import Eigth from "../../assets/svg/CRM/SubSVG/image 24.svg";

import Sub from "../../components/CRM/SubscriptionsCRM/Sub";




const SubscriptionsCRM: FunctionComponent = () => {
    return(
        <main className={styles.main}>
            
        <Menu_mini active="9"></Menu_mini>
        <div className={styles.styleColumn}>
            <div className={styles.styleCardWord}>Subscriptions</div>
            <div className={styles.styleROWs}>
            <Sub 
                DepositsIMG={First}
                DepositsTXT="Stream your favorite shows and movies in HD
                            for your family and friends."
                DepositsBalance="Amount: $9.99/month"
            ></Sub>
            <Sub 
                DepositsIMG={Second}
                DepositsTXT="Enjoy ad-free music, offline playback, and more with your family and friends."
                DepositsBalance="Amount: $9.99/month"
            ></Sub>
            <Sub 
                DepositsIMG={Third}
                DepositsTXT="Free shipping, Prime Video, and more. for your family and friends."
                DepositsBalance="Amount: $14.99/month"
            ></Sub>
            <Sub 
                DepositsIMG={Fourth}
                DepositsTXT="Access all Adobe creative apps."
                DepositsBalance="Amount: $54.99/month"
            ></Sub>
            </div>
            <div className={styles.styleROWs}>
            <Sub 
                DepositsIMG={Fifth}
                DepositsTXT="Apple Music, Apple TV+, Apple Arcade, and more for your family and friends."
                DepositsBalance="Amount: $19.95/month"
            ></Sub>
            <Sub 
                DepositsIMG={Sixth}
                DepositsTXT="Office apps, 1 TB cloud storage, and more for your family and friends."
                DepositsBalance="Amount: $69.99/year"
            ></Sub>
            <Sub 
                DepositsIMG={Seventh}
                DepositsTXT="Disney+, Hulu, and ESPN+ for your family and friends and more."
                DepositsBalance="Amount: $13.99/month"
            ></Sub>
            <Sub 
                DepositsIMG={Eigth}
                DepositsTXT="Access live and on-demand fitness classes for all family and friends."
                DepositsBalance="Amount: $12.99/month"
            ></Sub>
            </div>
            
        </div>
        </main>
        
      
    );
};

export default SubscriptionsCRM;