import { FunctionComponent } from "react";
import ContentColumn from "../components/AboutUs/ContentColumn";
import BankHistory from "../components/AboutUs/BankHistory";
import styles from "./AboutUs.module.css";

import careers from "../assets/png/AboutUs/careers@2x.png";
import line34 from "../assets/svg/AboutUs/line-34.svg";
import grp511 from "../assets/svg/AboutUs/group-511.svg";
import grp521 from "../assets/svg/AboutUs/group-521.svg";
import comminity1 from "../assets/svg/AboutUs/community-01.svg";
import idea1 from "../assets/svg/AboutUs/idea.svg";
import line35 from "../assets/svg/AboutUs/line-35.svg";


const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      
      <main>
      <section className={styles.contentWrapperWrapper}>
        <div className={styles.contentWrapper}>
          <ContentColumn />
          <BankHistory />
        </div>
      </section>
      <section className={styles.valuesWrapperWrapper}>
        <div className={styles.valuesWrapper}>
          <div className={styles.valuesContent}>
            <div className={styles.valuesBlock}>
              <div className={styles.missionContainer}>
                <div className={styles.missionStatement}>
                  <img
                    className={styles.missionStatementChild}
                    alt=""
                    src={line34}
                  />
                  <h1 className={styles.missionAndValuesContainer}>
                    <span>Mission</span>
                    <span className={styles.andValues}> and Values</span>
                  </h1>
                </div>
              </div>
              <div className={styles.atVeridionBankContainer}>
                <p
                  className={styles.atVeridionBank}
                >{`At Veridion Bank, our mission is to empower individuals and businesses to achieve their financial goals through personalized, innovative, and reliable banking solutions. We are guided by a set of core values that `}</p>
                <p className={styles.defineOurApproach}>
                  define our approach and commitment to our clients
                </p>
              </div>
            </div>
          </div>
          <div className={styles.coreValues}>
            <div className={styles.valueItemsParent}>
              <div className={styles.valueItems}>
                <img className={styles.groupIcon} alt="" src={grp511} />
              </div>
              <div className={styles.valueDescriptions}>
                <h2 className={styles.integrity}>Integrity</h2>
                <div className={styles.weUpholdThe}>
                  We uphold the highest standards of honesty and transparency in
                  all our dealings.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.groupIcon1}
                  alt=""
                  src={grp521}
                />
              </div>
              <h2 className={styles.customerFocus}>Customer Focus</h2>
              <div className={styles.weStriveTo}>
                We strive to understand customers needs and provide tailored
                solutions.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.ideaWrapper}>
                <img
                  className={styles.ideaIcon}
                  loading="lazy"
                  alt=""
                  src={idea1}
                />
              </div>
              <h2 className={styles.innovation}>Innovation</h2>
              <div className={styles.weEmbraceChange}>
                We embrace change and continually seek new ways to enhance our
                services and deliver exceptional value.
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.communityParent}>
                <h2 className={styles.community}>Community</h2>
                <img
                  className={styles.community01Icon}
                  loading="lazy"
                  alt=""
                  src={comminity1}
                />
              </div>
              <div className={styles.wePositivelyImpact}>
                We positively impact communities through responsible banking and
                active involvement.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.careersSectionWrapper}>
        <div className={styles.careersSection} style={{backgroundImage: `url(${careers})`}}>
          <img className={styles.careersIcon} alt="" src={careers} />
          <div className={styles.careersContent}>
            <h1 className={styles.careers}>Careers</h1>
            <div className={styles.careersDivider}>
              <img
                className={styles.careersDividerChild}
                loading="lazy"
                alt=""
                src={line35}
              />
            </div>
          </div>
          <div className={styles.joinTheVeridionBankFamilyWrapper}>
            <div className={styles.joinTheVeridion}>
              Join the Veridion Bank family and be a part of a dynamic,
              forward-thinking team. We offer a supportive and inclusive work
              environment where your growth and development are prioritized. At
              Veridion Bank, we believe that our employees are our greatest
              asset. We provide extensive training programs, career advancement
              opportunities, and a culture that encourages innovation and
              collaboration. If you are passionate about making a difference and
              looking for a rewarding career in the financial industry, explore
              our current openings and start your journey with us today.
            </div>
          </div>
          <button className={styles.component2}>
            <b className={styles.pickAPlan}>Join now</b>
          </button>
        </div>
      </section>
      </main>
      
    </div>
  );
};

export default AboutUs;
