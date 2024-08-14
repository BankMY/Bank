import { FunctionComponent } from "react";

import InsuranceDescription from "../components/Insurance/InsuranceDescription";
import HeroColumns from "../components/Loans/HeroColumns";

import SavingsAccountsDetails from "../components/Insurance/SavingsAccountsDetails";

import styles from "./InsuranceUpdate.module.css";
import FundContent from "../components/Loans/FundContent";
import FeatureRows from "../components/Loans/FeatureRows";

import flower1 from "../assets/svg/Loans/flower1.svg";
import vector111 from "../assets/svg/Loans/vector-111.svg";
import pension from "../assets/svg/insurance/pension.svg";
import house from "../assets/svg/insurance/house.svg";
import prices from "../assets/svg/insurance/prices.svg";
import cancellation from "../assets/svg/insurance/cancellation.svg";
import star23 from "../assets/svg/insurance/star-23.svg";
import star24 from "../assets/svg/insurance/star-24.svg";
import star23_1 from "../assets/svg/insurance/star-23-1.svg";
import star24_1 from "../assets/svg/insurance/star-24-1.svg";
import protection from "../assets/svg/insurance/protection.svg";
import auto from "../assets/svg/insurance/auto.svg";
import idea1 from "../assets/svg/Loans/idea1.svg";


const InsuranceUpdate: FunctionComponent = () => {


  return (
    <div className={styles.insuranceUpdate}>

      <main className={styles.lifeInsuranceContentWrapper}>
        <section className={styles.lifeInsuranceContent}>
          <InsuranceDescription />
          <HeroColumns
            investment="Life "
            products="Insurance"
            exploreOurRangeOfInvestme="Secure your family's future with our life insurance plans. We offer a range of policies to provide financial protection and peace of mind. Benefit from personalized service and competitive rates tailored to your needs. Contact us today to find the right life insurance plan for you."
            pickAPlan="Get Life Insurance"
            propAlignSelf="unset"
            propWidth="100rem"
          />
          <div className={styles.insuranceOptions}>
            <FundContent
              fundIllustration={vector111}
              plan={flower1}
              mutualFunds="Term Life:"
              diversifiedPortfoliosMana="Affordable coverage for a specific period of life."
              propAlignSelf="unset"
              propWidth="25.313rem"
            />
            <FeatureRows
              house={pension}
              retirementAcc="Whole Life:"
              planForASecureFutureWithO="Permanent protection with cash value accumulation."
              propPadding="24px 31px 45px 32px"
              propGap="11.5px"
              propWidth="25.313rem"
              propFlex="unset"
            />
            <FeatureRows
              house={house}
              retirementAcc="Universal Life: "
              planForASecureFutureWithO="Flexible premiums and investment components."
              propPadding="23px 31px 45px 32px"
              propGap="12.5px"
              propWidth="25.313rem"
              propFlex="unset"
            />
      </div>
          <div className={styles.healthInsuranceContentWrapper}>
          
            <div className={styles.healthInsuranceContent}>
            <HeroColumns
            investment="Health "
            products="Insurance"
            exploreOurRangeOfInvestme="Stay covered with our flexible health insurance options. Our
                  plans offer comprehensive coverage and competitive rates to
                  ensure you and your family get the care you need. Enjoy
                  personalized support from our expert advisors. Reach out to us
                  today to choose the best health insurance plan for your needs."
            pickAPlan="Get Health Insurance"
            propAlignSelf="unset"
            propWidth="100rem"
          />
              <div className={styles.healthInsuranceContentInner}>
                <div className={styles.frameParent}>
                  <SavingsAccountsDetails
                    cancellation={prices}
                    moneyMarketAccounts={`Individual & Family Plans:`}
                    higherYieldsWithLimitedCh="Comprehensive coverage for medical needs."
                    star23={star23}
                    star24={star24}
                    propPadding="var(--padding-base) var(--padding-13xl) 10.687rem"
                    propGap="20px"
                  />
                  <SavingsAccountsDetails
                    cancellation={cancellation}
                    moneyMarketAccounts="Supplemental Insurance:"
                    higherYieldsWithLimitedCh="Additional protection for out-of-pocket expenses."
                    star23={star23_1}
                    star24={star24_1}
                    propPadding="23px 32px 164px"
                    propGap="13px"
                  />
                </div>
              </div>
            </div>
          </div>
          <HeroColumns
            investment="Auto "
            products="Insurance"
            exploreOurRangeOfInvestme="Drive with confidence with our auto insurance plans. We provide coverage options that fit your budget and protect your vehicle. Benefit from competitive rates and personalized service from our knowledgeable advisors. Contact us today to get a quote and secure your auto insurance."
            pickAPlan="Get Auto Insurance"
            propAlignSelf="unset"
            propWidth="100rem"
          />
          <div className={styles.frameGroup}>
          <FundContent
                  fundIllustration={vector111}
                  plan={protection}
                  mutualFunds="Liability Coverage:"
                  diversifiedPortfoliosMana="Protection for bodily injury and property damage."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house={auto}
                  retirementAcc="Comprehensive and Collision:"
                  planForASecureFutureWithO="Coverage for theft, vandalism, and accidents."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house={idea1}
                  retirementAcc="Addition Options:"
                  planForASecureFutureWithO="Uninsured motorist, personal injury protection, and roadside
                assistance."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
            
          </div>
        </section>
      </main>

    </div>
  );
};

export default InsuranceUpdate;
