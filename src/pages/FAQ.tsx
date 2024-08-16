import { FunctionComponent } from "react";

import styles from "./FAQ.module.css";
import Droplist from "../components/FAQ/Droplist";

import star1 from "../assets/svg/FAQ/star-1.svg";
import star2 from "../assets/svg/FAQ/star-2.svg";
import line21 from "../assets/svg/FAQ/line-21.svg";

const FAQ: FunctionComponent = () => {
  return (
      <main className={styles.headerFinalParent}>
       
        <section className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentInner}>
              <div className={styles.frameParent}>
                <div className={styles.starIconWrapper}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src={star1}
                  />
                </div>
                <div className={styles.sideContentDetails}>
                  <div className={styles.fAQContent}>
                    <h1 className={styles.faq1}>FAQ</h1>
                    <img
                      className={styles.fAQStar}
                      loading="lazy"
                      alt=""
                      src={star2}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.generalInformationParent}>
              <h3 className={styles.generalInformation}>General Information</h3>
                  <Droplist 
              question="What is Veridion?"
              answer=" Veridion is a comprehensive online banking platform offering a
                  range of financial services, including checking and savings
                  accounts, loans, investment opportunities, and more."/>
                  <Droplist 
              question="How do I sign up for a Veridion account?"
              answer="You can sign up for a Veridion account by visiting our
                  website, clicking on the 'Sign Up' button, and following the
                  registration instructions."/>
                  <Droplist 
              question="How do I update my personal information?"
              answer="To update your personal information, log in to your Veridion
                  account, go to the 'Profile' section, and make the necessary
                  changes"/>

              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src={line21}
              />

              <h3 className={styles.generalInformation}>Account Management</h3>
              <Droplist 
              question="How do I reset my password?"
              answer="To reset your password, go to the login page and click on the
                  'Forgot Password' link. Follow the instructions to reset your
                  password."/>
                  <Droplist 
              question="Can I access my Veridion account on my mobile device?"
              answer=" Yes, Veridion has a mobile app available for both iOS and
                  Android devices, allowing you to manage your account on the
                  go."/>
                  <Droplist 
              question="How do I update my personal information?"
              answer="To update your personal information, log in to your Veridion
                  account, go to the 'Profile' section, and make the necessary
                  changes"/>

              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src={line21}
              />

            <h3 className={styles.generalInformation}>Banking Plans</h3>
            <Droplist 
              question="What are the different plans offered by Veridion?"
              answer=" Veridion offers several banking plans: Standard, Plus,
                  Premium, Metal, and Ultra. Each plan comes with its own set of
                  features and benefits."/>
                  <Droplist 
              question="How do I upgrade my plan?"
              answer="To upgrade your plan, log in to your Veridion account, go to
                  the 'Account Settings' section, and select the plan you wish
                  to upgrade to."/>
                  <Droplist 
              question="What are the fees associated with each plan?"
              answer="The fees vary depending on the plan. Detailed information
                  about fees can be found on our website under the 'Pricing'
                  section"/>

              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src={line21}
              />

              <h3 className={styles.generalInformation}>
                Transactions and Payments
              </h3>
              <Droplist 
              question="How do I transfer money between accounts?"
              answer="You can transfer money between accounts by logging in to your
                  Veridion account, selecting the 'Transfer' option, and
                  following the prompts."/>
                  <Droplist 
              question="Are there limits on transactions?"
              answer="Yes, transaction limits vary based on your plan. Please refer
                  to the plan details on our website for specific information."/>
                  <Droplist 
              question="How do I pay my bills through Veridion?"
              answer="To pay bills, log in to your Veridion account, select the
                  'Bill Pay' option, and follow the instructions to set up and
                  make payments"/>

              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src={line21}
              />

            <h3 className={styles.generalInformation}>Customer Support</h3>
            <Droplist 
              question="How do I contact Veridion customer support?"
              answer="To pay bills, log in to your Veridion account, select the
                  'Bill Pay' option, and follow the instructions to set up and
                  make payments"/>
                  <Droplist 
              question="What are the customer support hours?"
              answer="Veridion customer support is available 24/7 to assist you with
                  any inquiries or issues."/>
                  <Droplist 
              question="How do I report a lost or stolen card??"
              answer="To report a lost or stolen card, log in to your Veridion
                  account, go to the 'Support' section, and follow the
                  instructions to report your card."/>

              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src={line21}
              />
              <h3 className={styles.generalInformation}>Additional Services</h3>
              <Droplist 
              question="Does Veridion offer loans?"
              answer="Yes, Veridion offers a variety of loan products, including
                  personal loans, home loans, and auto loans. Detailed
                  information can be found on our website under the 'Loans'
                  section."/>
                  <Droplist 
              question="Can I invest through Veridion?"
              answer="Yes, Veridion provides investment opportunities, including
                  stocks, bonds, and mutual funds. Visit the 'Investments'
                  section on our website for more details."/>
                  <Droplist 
              question="How do I apply for a loan?"
              answer="To apply for a loan, log in to your Veridion account, navigate
                  to the 'Loans' section, and follow the application process."/>
            </div>

          </div>
        </section>
      </main>
  );
};

export default FAQ;
