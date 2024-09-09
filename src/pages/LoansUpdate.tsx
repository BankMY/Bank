import { FunctionComponent } from "react";

import HeroColumns from "../components/Loans/HeroColumns";
import FundContent from "../components/Loans/FundContent";
import FeatureRows from "../components/Loans/FeatureRows";
import styles from "./LoansUpdate.module.css";

import loans from "../assets/svg/Loans/loans.svg";
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
import vectorMiddle from "../assets/svg/Loans/VectorLoansMiddle.svg"

import { Link } from "react-router-dom";

const LoansUpdate: FunctionComponent = () => {
  

  return (
    <div className={styles.loansUpdate}>
      <main className={styles.headerFinalParent}>
 
        <section className={styles.mainContent}>
          <div className={styles.loanTypesParent}>
            <div className={styles.loanTypes}>
              <div className={styles.loanCards}>
                <div className={styles.cardDetails}>
                  <div className={styles.loanOptions}>
                    <h1 className={styles.loans}>Loans</h1>
                  </div>
                  <Link to="/sign-up" className={styles.component1}>
                    <b className={styles.pickAPlan}>Get Loan</b>
                  </Link>
                </div>
              </div>
              <div className={styles.bankLoans}>
                <div className={styles.bankLoanContent}>
                  <img
                    className={styles.loansIcon}
                    loading="lazy"
                    alt=""
                    src={loans}
                  />
                  <div className={styles.veridionBankOffers}>
                    Veridion Bank offers a variety of loan products to help you
                    finance your dreams and manage your expenses. Our
                    competitive rates and flexible terms make borrowing simple
                    and stress-free.
                  </div>
                </div>
              </div>
            </div>
            <HeroColumns
              investment="Mortgage"
              products=" Loans"
              exploreOurRangeOfInvestme="Looking to buy or refinance a home? Our expert mortgage advisors offer personalized guidance to help you secure the best rates and terms tailored to your needs. Choose from a variety of loan options, including fixed-rate, adjustable-rate, FHA, VA, and jumbo loans. Enjoy a simplified application process and competitive interest rates. Contact us today to start your journey towards homeownership!"
              pickAPlan="Get Mortgage Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
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
            
            
            <div className={styles.autoLoanContentWrapper}>
              <div className={styles.autoLoanContent}>
              <HeroColumns
              investment="Personal"
              products=" Loans"
              exploreOurRangeOfInvestme="Need funds for an important expense? Our personalized personal loans offer flexible terms and competitive rates to fit your financial needs. Enjoy a quick and easy application process with support from our experienced advisors. Whether for debt consolidation, home improvement, or unexpected expenses, we’re here to help. Contact us today to explore your options and get started!"
              pickAPlan="Get Personal Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />

              </div>
            </div>

            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
            <FundContent
                  fundIllustration={vectorMiddle}
                  plan={speed}
                  mutualFunds="Unsecured Loans:"
                  diversifiedPortfoliosMana="No collateral required for quick 
                  and easy funding."
                  propAlignSelf="unset"
                  propWidth="25.313rem"

                />
                <FeatureRows
                  house={prot1}
                  retirementAcc="Fixed Rates:"
                  planForASecureFutureWithO="Enjoy predictable monthly payments. Live with best rates."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={idea1}
                  retirementAcc="Fast Approval:"
                  planForASecureFutureWithO="Receive your funds quickly to cover immediate needs."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
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

            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
            <FundContent
                  fundIllustration={vector13}
                  plan={flower1}
                  mutualFunds="Affordable:"
                  diversifiedPortfoliosMana="Competitive rates for new and used vehicles."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house={document1}
                  retirementAcc="Flexible repayment:"
                  planForASecureFutureWithO="Terms tailored to fit your budget."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={time}
                  retirementAcc="Quick Process:"
                  planForASecureFutureWithO="Efficient approval process to get you on the road sooner."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
              </div>
            </div>


          </div>
        </section>
      </main>

    </div>
  );
};

export default LoansUpdate;
