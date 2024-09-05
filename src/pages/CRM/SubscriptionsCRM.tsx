import { FunctionComponent, useState } from "react";


import Menu_mini from "../../components/CRM/Menu_mini";
import styles from "../../pages/CRM/SubscriptionsCRM.module.css";
import First from "../../assets/svg/CRM/Accounts/extrude-group.svg"
import Second from "../../assets/svg/CRM/Accounts/certificate1.svg";
import Third from "../../assets/svg/CRM/Accounts/cancellation1.svg";
import Fourth from "../../assets/svg/CRM/Accounts/plan1.svg";

import Sub from "../../components/CRM/SubscriptionsCRM/Sub";




const SubscriptionsCRM: FunctionComponent = () => {
    return(
        <main className={styles.main}>
            
        <Menu_mini active="3"></Menu_mini>
        <div className={styles.styleColumn}>
            <div className={styles.styleCardWord}>Subscriptions</div>
            <div className={styles.styleROWs}>
            <Sub 
                DepositsIMG={First}
                DepositsTXT="My Balance"
                DepositsBalance="$15.700"
            ></Sub>
            <Sub 
                DepositsIMG={Second}
                DepositsTXT="Income"
                DepositsBalance="$7.000"
            ></Sub>
            <Sub 
                DepositsIMG={Third}
                DepositsTXT="Exspense"
                DepositsBalance="$3.568"
            ></Sub>
            <Sub 
                DepositsIMG={Fourth}
                DepositsTXT="Total Saving"
                DepositsBalance="$8.800"
            ></Sub>
            </div>
            
            
        </div>
        </main>
        
      
    );
};

export default SubscriptionsCRM;