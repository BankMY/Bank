import { FunctionComponent } from "react";
import styles from "./ContentColumn.module.css";

import line331 from "../../assets/svg/AboutUs/line-331.svg";
import exclude from "../../assets/svg/AboutUs/exclude.svg";
import bank from "../../assets/svg/AboutUs/bank.svg";

const ContentColumn: FunctionComponent = () => {
  return (
    <div className={styles.contentColumn}>
      <div className={styles.contentBlock}>
        <div className={styles.introContainer}>
          <h1 className={styles.empoweringYourFinancialContainer}>
            <span>{`Empowering Your `}</span>
            <span className={styles.financialFuture}>Financial Future</span>
          </h1>
          <img
            className={styles.introContainerChild}
            loading="lazy"
            alt=""
            src={line331}
          />
        </div>
        <div className={styles.atVeridionBank}>
          At Veridion Bank, we are dedicated to providing innovative and
          personalized banking solutions to help you achieve your financial
          goals. With a commitment to integrity, customer focus, and community
          support, we strive to be your trusted financial partner every step of
          the way.
        </div>
        <button className={styles.component1}>
          <b className={styles.pickAPlan}>Try Veridion now</b>
        </button>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutWrapper}>
          <div className={styles.aboutContent}>
            <h2 className={styles.aboutUs}>About Us</h2>
            <img className={styles.bankIcon} alt="" src={bank} />
          </div>
          <div className={styles.since2022}>since 2022</div>
          <div className={styles.excludeContainer}>
            <div className={styles.wrapperExclude}>
              <img
                className={styles.excludeIcon}
                loading="lazy"
                alt=""
                src={exclude}
              />
            </div>
            <div className={styles.backgroundShape} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentColumn;
