import { FunctionComponent } from "react";

import HeroColumns from "../components/Investments/HeroColumns";
import FundContent from "../components/Investments/FundContent";
import FeatureRows from "../components/Investments/FeatureRows";
import styles from "./Investments.module.css";


import vector111 from "../assets/svg/Loans/vector-111.svg";

import inv from "../assets/svg/Investments/INVESTMENTS.svg";
import plan from "../assets/svg/Investments/plan.svg";
import baks from "../assets/svg/Investments/baks.svg";
import house from "../assets/svg/Investments/house.svg";

import idea from "../assets/svg/Investments/idea.svg";
import graph from "../assets/svg/Investments/graph.svg";
import flower from "../assets/svg/Investments/flower.svg";
import vector from "../assets/svg/Investments/Vector.svg";

import { Link } from "react-router-dom";

const Investments: FunctionComponent = () => {
  

  return (
    <div className={styles.loansUpdate}>
      <main className={styles.headerFinalParent}>
 
        <section className={styles.mainContent}>
          <div className={styles.loanTypesParent}>
            <div className={styles.loanTypes}>
              <div className={styles.loanCards}>
                <div className={styles.cardDetails}>
                  <div className={styles.loanOptions}>
                    <h1 className={styles.loans}>investments</h1>
                  </div>
                  <Link to="/sign-up" className={styles.component1}>
                    <b className={styles.pickAPlan}>Get Started</b>
                  </Link>
                </div>
              </div>
              <div className={styles.bankLoans}>
                <div className={styles.bankLoanContent}>
                  <img
                    className={styles.loansIcon}
                    loading="lazy"
                    alt=""
                    src={inv}
                  />
                  <div className={styles.veridionBankOffers}>
                  Veridion Bank offers a variety of loan products to help you finance your dreams and manage your expenses. 
                  Our competitive rates and flexible terms make borrowing simple and stress-free.
              
                  </div>
                </div>
              </div>
            </div>
            <HeroColumns
              investment="investment"
              products=" products"
              exploreOurRangeOfInvestme="Explore our range of investment products designed to meet your financial objectives. From stocks and bonds to mutual funds and ETFs, we offer diverse options with competitive returns. Our knowledgeable advisors provide personalized support to help you make informed decisions. Reach out to us today to discover the right investment products for you!"
              pickAPlan="Get Mortgage Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.loanTypes1}>
              <div className={styles.frameParent}>
                <FundContent
                  fundIllustration={vector111}
                  plan={plan}
                  mutualFunds="Mutual Funds:"
                  diversifiedPortfoliosMana="Diversified portfolios managed by experienced professionals."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house={baks}
                  retirementAcc="Stocks and Bonds:"
                  planForASecureFutureWithO="Equity and fixed income options for various risk tolerances."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={house}
                  retirementAcc="Retirement Acc:"
                  planForASecureFutureWithO="Plan for a secure future with our IRAs and 401(k) plans."
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
              investment="Advice and Consultations"
              products=""
              exploreOurRangeOfInvestme="Looking for expert financial guidance? Our personalized
                    investment advice and consultations help you make informed
                    decisions and achieve your financial goals. Benefit from
                    tailored strategies based on your unique needs and risk
                    tolerance. Our professional advisors are here to assist you
                    every step of the way. Contact us today to schedule your
                    consultation and start building a secure financial future!"
                
                pickAPlan="Get Consultation"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />

              </div>
            </div>

            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
            <FundContent
                  fundIllustration={vector}
                  plan={idea}
                  mutualFunds="Strategies:"
                  diversifiedPortfoliosMana="Tailored investment strategies based on your financial goals."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house={graph}
                  retirementAcc="Finance Planning:"
                  planForASecureFutureWithO="Comprehensive analysis and goal setting for long-term
                    success."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={flower}
                  retirementAcc="Regular Reviews:"
                  planForASecureFutureWithO="Periodic portfolio reviews to adjust and optimize your investments."
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

export default Investments;
