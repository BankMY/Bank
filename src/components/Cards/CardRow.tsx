import { FunctionComponent } from "react";
import styles from "./CardRow.module.css";
import ImageComponent from '../ImageComponent';

import line28 from '../../assets/svg/Cards/line-28.svg';
import star9 from '../../assets/svg/Cards/star-9.svg';

export interface CardRowType {
  className?: string;
};

const CardRow: FunctionComponent<CardRowType> = ({ className = "" }) => {
  return (
    <div className={[styles.cardRow, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.vectorParent}>
                <ImageComponent
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src={line28}
                />
                <h1 className={styles.enhancedSecurityFeaturesContainer}>
                  <span>Enhanced</span>
                  <span className={styles.securityFeatures}>
                    {" "}
                    Security Features
                  </span>
                </h1>
              </div>
              <ImageComponent
                className={styles.accordionHeaderIcon}
                loading="lazy"
                alt=""
                src={star9}
              />
            </div>
          </div>
          <div className={styles.protectYourBusiness}>
            Protect your business with our advanced security features. Our cards
            are equipped with state-of-the-art encryption and fraud detection
            technologies to ensure your transactions are safe and secure. Focus
            on your business goals with peace of mind, knowing your finances are
            well-guarded.
          </div>
        </div>
        <div className={styles.component3Wrapper}>
          <button className={styles.component3}>
            <b className={styles.pickAPlan}>Join now</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRow;
