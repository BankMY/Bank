import { FunctionComponent } from "react";

import HeroColumns from "../components/Deposits/HeroColumns";
import FundContent from "../components/Deposits/FundContent";
import FeatureRows from "../components/Deposits/FeatureRows";
import SavingsAccountsDetails from "../components/Deposits/SavingsAccountsDetails";
import styles from "./Deposits.module.css";

import DEPOSITS from "../assets/svg/Deposits/DEPOSITS.svg";
import vector111 from "../assets/svg/Loans/vector-111.svg";
import extrudegroup from "../assets/svg/Loans/extrudegroup.svg";
import extrudegroup1 from "../assets/svg/Loans/extrudegroup-1.svg";
import flower1 from "../assets/svg/Loans/flower1.svg";
import vector13 from "../assets/svg/Loans/vector-13.svg";
import document1 from "../assets/svg/Loans/document1.svg";
import time from "../assets/svg/Loans/time.svg";
import speed from "../assets/svg/Loans/speed.svg";
import prot1 from "../assets/svg/Loans/protection1.svg";
import idea1 from "../assets/svg/Loans/idea1.svg";
import expert from "../assets/svg/Loans/expert.svg";

import { Link } from "react-router-dom";

const Deposits: FunctionComponent = () => {
  

  return (
    <div className={styles.loansUpdate}>
      <main className={styles.headerFinalParent}>
 
        <section className={styles.mainContent}>
          <div className={styles.loanTypesParent}>
            <div className={styles.loanTypes}>
              <div className={styles.loanCards}>
                <div className={styles.cardDetails}>
                  <div className={styles.loanOptions}>
                    <h1 className={styles.loans}>Deposits</h1>
                  </div>
                  <Link to="/sign-up" className={styles.component1}>
                    <b className={styles.pickAPlan}>Get Deposit</b>
                  </Link>
                </div>
              </div>
              <div className={styles.bankLoans}>
                <div className={styles.bankLoanContent}>
                  <img
                    className={styles.loansIcon}
                    loading="lazy"
                    alt=""
                    src={DEPOSITS}
                  />
                  <div className={styles.veridionBankOffers}>
                  Secure your funds and watch them grow with Veridion Bank’s 
                  range of deposit accounts. We provide safe and convenient 
                  options for managing your money effectively."
                  </div>
                </div>
              </div>
            </div>
            <HeroColumns
              investment="SHORT-TERM"
              products=" Deposits"
              exploreOurRangeOfInvestme="Need quick access to your savings? Our short-term deposit accounts offer competitive rates and flexible terms to meet your immediate financial needs. Enjoy easy account management and personalized support from our financial experts. Choose from options like savings accounts and short-term CDs. Contact us today to start growing your savings!"
                pickAPlan="Get Short-Term Deposit"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
            <FundContent
                  fundIllustration={vector13}
                  plan={expert}
                  mutualFunds="SAVINGS ACCOUNTS:"
                  diversifiedPortfoliosMana="Earn interest with easy access to your found"
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                  
                />
                 <FeatureRows
                  house={extrudegroup1}
                  retirementAcc="MONEY MARKET ACCOUNTS:"
                  planForASecureFutureWithO="Higher yields with limited check-writing privileges."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="35.313rem"
                  propFlex="unset"
                />
               
                
              </div>
            </div>
            <div className={styles.loanTypes1}>
              <div className={styles.frameParent}>
                <FundContent
                  fundIllustration={vector111}
                  plan={extrudegroup}
                  mutualFunds="Competitive Rates:"
                  diversifiedPortfoliosMana="Benefit from low-interest rates to make homeownership affordable."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house={extrudegroup1}
                  retirementAcc="Flexible Terms:"
                  planForASecureFutureWithO="Choose from fixed-rate or adjustable-rate mortgages."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={expert}
                  retirementAcc="Expert Guidance:"
                  planForASecureFutureWithO="Our mortgage specialists are here to assist you every step of the way."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                
              </div>
            </div>
            <HeroColumns
              investment="Personal"
              products=" Loans"
              exploreOurRangeOfInvestme="Need funds for an important expense? Our personalized personal loans offer flexible terms and competitive rates to fit your financial needs. Enjoy a quick and easy application process with support from our experienced advisors. Whether for debt consolidation, home improvement, or unexpected expenses, we’re here to help. Contact us today to explore your options and get started!"
              pickAPlan="Get Personal Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
                
                <FeatureRows
                  house={speed}
                  retirementAcc="Unsecured Loans:"
                  planForASecureFutureWithO="No collateral required for quick 
                  and easy funding."
                  propPadding="25px 31px 45px 32px"
                  propGap="11.5px"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={prot1}
                  retirementAcc="Fixed Rates:"
                  planForASecureFutureWithO="Enjoy predictable monthly payments. Live with best rates."
                  propPadding="25px 31px 45px 32px"
                  propGap="11.5px"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={idea1}
                  retirementAcc="Fast Approval:"
                  planForASecureFutureWithO="Receive your funds quickly to cover immediate needs."
                  propPadding="24px 31px 45px 32px"
                  propGap="11.5px"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
              </div>
            </div>
            <div className={styles.autoLoanContentWrapper}>
              <div className={styles.autoLoanContent}>
              <HeroColumns
              investment="Auto"
              products=" Loans"
              exploreOurRangeOfInvestme="Dreaming of a new car? Our auto loans provide competitive rates and flexible terms to make your vehicle purchase simple and affordable. Benefit from a straightforward application process and personalized service from our knowledgeable advisors. Whether you’re buying new or used, we’re here to help you drive away in your dream car. Reach out to us today to start your auto loan application!"
              pickAPlan="Get Auto Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />

              </div>
            </div>

            

          </div>
        </section>
      </main>

    </div>
  );
};

export default Deposits;
