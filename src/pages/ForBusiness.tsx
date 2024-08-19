import { FunctionComponent } from "react";
import ContentColumns1 from "../components/For-business/ContentColumns1";
import ContentColumns from "../components/For-business/ContentColumns";
import styles from "./ForBusiness.module.css";

import cards_head from "../assets/svg/For-business/cards-head-business.svg";

import line21 from "../assets/svg/For-business/line-21.svg";
import line32 from "../assets/svg/For-business/line-32.svg";
import bills from "../assets/svg/For-business/bills-collage.svg";
import cards from "../assets/svg/For-business/card-collage.svg";
import safe from "../assets/svg/For-business/safe-collage.svg"
import Droplist from "../components/FAQ/Droplist";

const ForBusiness: FunctionComponent = () => {
  return (
    <div className={styles.forBusiness}>
     
      <div className={styles.mainTaglineHeaderForBusineWrapper}>
        <div className={styles.mainTaglineHeaderForBusine}>
          <h1 className={styles.onePlatformForContainer}>
            <p className={styles.onePlatformFor}>{`One Platform for All `}</p>
            <p className={styles.yourBusinessNeeds}>Your Business Needs</p>
          </h1>
          <div className={styles.projectDescription}>
            <div className={styles.affordAllYour}>
              Afford all your projects seamlessly with our integrated financial
              solutions. Manage multicurrency accounts effortlessly and keep
              your business thriving, all in one place
            </div>
          </div>
          <div className={styles.wrapperCardsHeadBusiness}>
            <img
              className={styles.cardsHeadBusinessIcon}
              loading="lazy"
              alt=""
              src={cards_head}
            />
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>Join now</b>
            </button>
          </div>
        </div>       
      </div>
      
      


      <main className={styles.forBusinessInner}>
        <section className={styles.frameParent}>
          <div className={styles.solutionsContentParent}>
            <div className={styles.solutionsContent}>
              <div className={styles.solutionsHeaderParent}>
                <div className={styles.solutionsHeader}>
                  <h1 className={styles.comprehensiveFinancialSolutiContainer}>
                    <span>{`Comprehensive `}</span>
                    <span className={styles.financialSolutions}>
                      Financial Solutions
                    </span>
                  </h1>
                  <div className={styles.solutionsHeaderInner}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src={line32}
                    />
                  </div>
                </div>
                <div className={styles.discoverOurRange}>
                  Discover our range of comprehensive financial solutions
                  designed to support your business at every stage. From
                  start-up funding to expansion capital, we provide the
                  resources and expertise to help your business thrive. Our
                  tailored financial services ensure you have the support you
                  need to achieve your goals.
                </div>
              </div>
            </div>
            <img
              className={styles.billsCollageIcon}
              loading="lazy"
              alt=""
              src={bills}
            />
          </div>
          <div className={styles.contentColumns}>
            <img
              className={styles.cardCollageIcon}
              loading="lazy"
              alt=""
              src={cards}
            />
            <div className={styles.financingSecurity}>
              <div className={styles.financingSecurityDetails}>
                <h1 className={styles.allInOneProjectFinancingContainer}>
                  <p className={styles.allInOne}>{`All-in-One `}</p>
                  <p className={styles.projectFinancing}>Project Financing</p>
                </h1>
                <div className={styles.manageAllYour}>
                  Manage all your projects efficiently with our all-in-one
                  platform. Our flexible financing options allow you to fund
                  multiple projects seamlessly, ensuring you have the capital to
                  grow and innovate. Whether it's new equipment or operational
                  costs, we've got you covered.
                </div>
              </div>
            </div>
          </div>
          <ContentColumns1 />
          <div className={styles.contentColumns1}>
            <img
              className={styles.safeCollageIcon}
              loading="lazy"
              alt=""
              src={safe}
            />
            <div className={styles.contentColumnsInner}>
              <div className={styles.advancedSecurityAndComplianParent}>
                <h1 className={styles.advancedSecurityAndContainer}>
                  <span>{`Advanced Security `}</span>
                  <span className={styles.andCompliance}>and Compliance</span>
                </h1>
                <div className={styles.safeguardYourBusiness}>
                  Safeguard your business with our advanced security measures
                  and compliance solutions. We prioritize the protection of your
                  financial data with state-of-the-art encryption and fraud
                  prevention technologies. Stay compliant with industry
                  regulations and focus on your business with confidence.
                </div>
              </div>
            </div>
          </div>
          <ContentColumns />


          <div className={styles.fAQContentWrapper}>
            <div className={styles.fAQContent}>
              <div className={styles.fAQHeader}>
                <div className={styles.fAQTitle}>
                  <img
                    className={styles.fAQTitleChild}
                    alt=""
                    src={line32}
                  />
                  <h1 className={styles.veridionBusinessFaqsContainer}>
                    <span>{`Veridion `}</span>
                    <span className={styles.businessFaqs}>Business FAQS</span>
                  </h1>
                </div>
              </div>

              <div className={styles.fAQItems}>
              <Droplist 
              question="What types of financial solutions do you offer for
                      businesses?"
              answer="We offer a range of financial solutions including business
                    loans, lines of credit, equipment financing, and
                    project-specific funding.Our services are designed to
                    provide flexible options that cater to your business’s
                    unique needs"/>
                <img
                  className={styles.fAQItemsChild}
                  loading="lazy"
                  alt=""
                  src={line21}
                />
              <Droplist 
              question="What are the benefits of having a multi-currency account?"
              answer="Multi-currency accounts allow you to manage and transact in
                    multiple currencies without incurring conversion fees. This
                    is particularly beneficial for businesses operating
                    internationally, as it simplifies financial management and
                    reduces costs associated with currency exchange."/>
                  <img
                  className={styles.fAQItemsItem}
                  alt=""
                  src={line21}
                />
                
                <Droplist 
              question="How do you ensure the security of my business’s financial
                      information?"
              answer="We use advanced encryption and fraud detection technologies
                    to protect your financial information. Our systems are
                    designed to safeguard against unauthorized access and ensure
                    that your data is secure at all times."/>

                <img
                  className={styles.fAQItemsItem}
                  alt=""
                  src={line21}
                />

              <Droplist 
              question="Can I get personalized financial advice for my business?"
              answer="Absolutely! Our dedicated business advisors provide
                    personalized financial advice tailored to your business’s
                    specific needs. Whether you need help with cash flow
                    management, strategic planning, or growth strategies, our
                    experts are ready to assist you."/>

                <img
                  className={styles.fAQItemsItem}
                  alt=""
                  src={line21}
                />
                
                <Droplist 
              question="How do I open a multi-currency account?"
              answer="Opening a multi-currency account is straightforward. Contact
                    our customer service team or visit our website to fill out
                    an application. Once your application is approved, you’ll be
                    able to start managing and transacting in multiple
                    currencies with ease."/>

              </div>
            </div>
          </div>

        </section>
      </main>
    </div>
  );
};

export default ForBusiness;
