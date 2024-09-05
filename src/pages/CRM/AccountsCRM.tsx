import { FunctionComponent, useState } from "react";





import Menu_mini from "../../components/CRM/Menu_mini";
import styles from "../../pages/CRM/AccountsCRM.module.css";
import First from "../../assets/svg/CRM/Accounts/extrude-group.svg"
import Second from "../../assets/svg/CRM/Accounts/certificate1.svg";
import Third from "../../assets/svg/CRM/Accounts/cancellation1.svg";
import Fourth from "../../assets/svg/CRM/Accounts/plan1.svg";
import CashBack from "../../components/CRM/CardsCRM/CashBack";
import DepositsForROW from "../../components/CRM/AccountsCRM/DepositsForROW";
import RecentTransaction from "../../components/CRM/AccountsCRM/RecentTransaction";
import MyCard from "../../components/CRM/AccountsCRM/MyCard";
import Debit from "../../components/CRM/AccountsCRM/Debit";
import Payments from "../../components/CRM/AccountsCRM/Payments";


const AccountsCRM: FunctionComponent = () => {
    return(
        <main className={styles.main}>
            
        <Menu_mini active="3"></Menu_mini>
        <div className={styles.styleColumn}>
            <div className={styles.styleCardWord}>Accounts</div>
            <div className={styles.styleROWs}>
            <DepositsForROW 
                DepositsIMG={First}
                DepositsTXT="My Balance"
                DepositsBalance="$15.700"
            ></DepositsForROW>
            <DepositsForROW 
                DepositsIMG={Second}
                DepositsTXT="Income"
                DepositsBalance="$7.000"
            ></DepositsForROW>
            <DepositsForROW 
                DepositsIMG={Third}
                DepositsTXT="Exspense"
                DepositsBalance="$3.568"
            ></DepositsForROW>
            <DepositsForROW 
                DepositsIMG={Fourth}
                DepositsTXT="Total Saving"
                DepositsBalance="$8.800"
            ></DepositsForROW>
            </div>
            <div className={styles.styleROWs}>
                <RecentTransaction></RecentTransaction>
                <MyCard></MyCard>
            </div>
            <div className={styles.styleROWs}>
                <Debit></Debit>
                <Payments></Payments>
            </div>
            
        </div>
        </main>
        
      
    );
};

export default AccountsCRM;