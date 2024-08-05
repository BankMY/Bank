import { FunctionComponent } from "react";
import styles from "./TestimonialRowOne.module.css";

import star10 from "../../assets/svg/Home/star-10.svg";
import star11 from "../../assets/svg/Home/star-11.svg";

export interface TestimonialRowOneType {
  loveTheQuickResponseTimes?: string;
  change?: string;
  sarahJohnson?: string;
  happyCust01?: string;
  theMobileAppIsFantasticAn?: string;
  label1?: string;
  michaelSmith?: string;
  techSavvy?: string;
};

const TestimonialRowOne: FunctionComponent<TestimonialRowOneType> = ({
  loveTheQuickResponseTimes,
  change,
  sarahJohnson,
  happyCust01,
  theMobileAppIsFantasticAn,
  label1,
  michaelSmith,
  techSavvy,
}) => {
  return (
    <div className={styles.testimonialRowOne}>
      <div className={styles.bar}>
        <div className={styles.barChild} />
        <div className={styles.responseContent}>
          <div className={styles.responseStars}>
            <img className={styles.barIcon} alt="" src={star10} />
            <img className={styles.titleIcon} alt="" src={star11}/>
          </div>
          <div className={styles.loveTheQuick}>{loveTheQuickResponseTimes}</div>
        </div>
        <div className={styles.userOne}>
          <div className={styles.userOneImage}>
            <img
              className={styles.changeIcon}
              loading="lazy"
              alt=""
              src={change}
            />
            <div className={styles.userOneDetails}>
              <div className={styles.sarahJohnson}>{sarahJohnson}</div>
              <div className={styles.happyCust01}>{happyCust01}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.appUser}>
        <div className={styles.label}>
          <div className={styles.labelChild} />
          <div className={styles.appUserContent}>
            <div className={styles.appUserStars}>
              <img
                className={styles.websitenetIcon}
                alt=""
                src={star10}
              />
              <img className={styles.labelIcon} alt="" src={star11} />
            </div>
            <div className={styles.theMobileApp}>
              {theMobileAppIsFantasticAn}
            </div>
          </div>
          <div className={styles.userTwo}>
            <div className={styles.userTwoImage}>
              <img className={styles.labelIcon1} alt="" src={label1} />
              <div className={styles.userTwoDetails}>
                <div className={styles.michaelSmith}>{michaelSmith}</div>
                <div className={styles.techSavvy}>{techSavvy}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialRowOne;
