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
import vector12 from "../assets/svg/Deposits/Vector 12.svg";
import vector11 from "../assets/svg/Deposits/Vector 11.svg";
import expert from "../assets/svg/Loans/expert.svg";
import star23 from "../assets/svg/Deposits/Star 23.svg";
import star24 from "../assets/svg/Deposits/Star 24.svg";
import star21 from "../assets/svg/Deposits/Star21.svg";
import star22 from "../assets/svg/Deposits/Star22.svg";

import cancellation from "../assets/svg/Deposits/cancellation.svg";
import certificate from "../assets/svg/Deposits/certificate.svg";
import document from "../assets/svg/Deposits/document.svg";
import Group from "../assets/svg/Deposits/Group.svg";
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
              <div className={styles.certificateOptionsWrapper}>
                <div className={styles.certificateOptions}>
                  <div className={styles.certificateTypes}>
                    <div className={styles.certificatesIcon}>
                      <img
                        className={styles.documentIcon}
                        loading="lazy"
                        alt=""
                        src={certificate}
                      />
                    </div>
                    <div className={styles.certificateDetails}>
                      <div className={styles.certificateTerms}>
                        <h2 className={styles.certificatesCds}>
                          Savings Accounts:
                        </h2>
                        <div className={styles.fixedInterestRates}>
                        Earn interest with easy access to your funds.
                        </div>
                      </div>
                      <div className={styles.retirementOptions}>
                        <div className={styles.retirementAccounts}>
                          <img
                            className={styles.savingsYieldIcon}
                            loading="lazy"
                            alt=""
                            src={star23}
                          />
                          <img
                            className={styles.marketYieldIcon}
                            alt=""
                            src={star24}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.certificateTypes1}>
                    <img
                      className={styles.certificateTypesChild}
                      alt=""
                      src={vector11}
                    />
                    <div className={styles.frameParent}>
                      <div className={styles.pensionWrapper}>
                        <img
                          className={styles.documentIcon}
                          loading="lazy"
                          alt=""
                          src={cancellation}
                        />
                      </div>
                      <div className={styles.retirementAccIrasParent}>
                        <h2 className={styles.savingsAccounts}>
                          money market accounts:
                        </h2>
                        <div className={styles.retirementDescription}>
                          <div
                            className={styles.taxAdvantagedSavingsForContainer}
                          >
                            <p
                              className={styles.earnInterestWith}
                            >{`Tax-advantaged savings for `}</p>
                            <p className={styles.earnInterestWith}>
                              your retirement.
                            </p>
                          </div>
                          <div className={styles.taxRatingParent}>
                            <img
                              className={styles.savingsYieldIcon}
                              loading="lazy"
                              alt=""
                              src={star21}
                            />
                            <img
                              className={styles.marketYieldIcon}
                              alt=""
                              src={star22}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               
                
              </div>
            </div>
            <HeroColumns
              investment="LONG-TERM"
              products=" Deposits"
              exploreOurRangeOfInvestme=" Planning for the future? Our long-term deposit accounts
                    provide higher interest rates and secure growth for your
                    financial goals. Benefit from options like long-term CDs and
                    money market accounts, with expert support from our team.
                    Enjoy peace of mind with guaranteed returns over extended
                    periods. Reach out to us today to secure your financial
                    future!"
              pickAPlan="Get Long-Term Deposit"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
              <div className={styles.certificateOptionsWrapper}>
                <div className={styles.certificateOptions}>
                  <div className={styles.certificateTypes}>
                    <div className={styles.certificatesIcon}>
                      <img
                        className={styles.documentIcon}
                        loading="lazy"
                        alt=""
                        src={document}
                      />
                    </div>
                    <div className={styles.certificateDetails}>
                      <div className={styles.certificateTerms}>
                        <h2 className={styles.certificatesCds}>
                          Certificates (CDs):
                        </h2>
                        <div className={styles.fixedInterestRates}>
                          Fixed interest rates for terms ranging from 6 months
                          to 5 years.
                        </div>
                      </div>
                      <div className={styles.retirementOptions}>
                        <div className={styles.retirementAccounts}>
                          <img
                            className={styles.savingsYieldIcon}
                            loading="lazy"
                            alt=""
                            src={star21}
                          />
                          <img
                            className={styles.marketYieldIcon}
                            alt=""
                            src={star22}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.certificateTypes1}>
                    <img
                      className={styles.certificateTypesChild}
                      alt=""
                      src={vector11}
                    />
                    <div className={styles.frameParent}>
                      <div className={styles.pensionWrapper}>
                        <img
                          className={styles.documentIcon}
                          loading="lazy"
                          alt=""
                          src={Group}
                        />
                      </div>
                      <div className={styles.retirementAccIrasParent}>
                        <h2 className={styles.savingsAccounts}>
                          Retirement Acc. (IRAs):
                        </h2>
                        <div className={styles.retirementDescription}>
                          <div
                            className={styles.taxAdvantagedSavingsForContainer}
                          >
                            <p
                              className={styles.earnInterestWith}
                            >{`Tax-advantaged savings for `}</p>
                            <p className={styles.earnInterestWith}>
                              your retirement.
                            </p>
                          </div>
                          <div className={styles.taxRatingParent}>
                            <img
                              className={styles.savingsYieldIcon}
                              loading="lazy"
                              alt=""
                              src={star23}
                            />
                            <img
                              className={styles.marketYieldIcon}
                              alt=""
                              src={star24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               
                
              </div>
            </div>
            

            

          </div>
        </section>
      </main>

    </div>
  );
};

export default Deposits;
