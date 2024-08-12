import { FunctionComponent } from "react";
import styles from "./CardRow1.module.css";

import ImageComponent from '../ImageComponent';

import star6 from '../../assets/svg/Cards/star-6.svg';
import line24 from '../../assets/svg/Cards/line-24.svg';
import star7 from '../../assets/svg/Cards/star-7.svg';

export interface CardRow1Type {
  className?: string;
};

const CardRow1: FunctionComponent<CardRow1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cardRow, className].join(" ")}>
      <div className={styles.cardPair}>
        <div className={styles.cardContainer}>
          <div className={styles.cardContent}>
            <div className={styles.cardFeature}>
              <ImageComponent
                className={styles.securityFeatureIcon}
                loading="lazy"
                alt=""
                src={star6}
              />
              <div className={styles.solutionDescription}>
                <div className={styles.versatileCardSolutionsWrapper}>
                  <h1 className={styles.versatileCardSolutionsContainer}>
                    <span>Versatile</span>
                    <span className={styles.cardSolutions}>
                      {" "}
                      Card Solutions
                    </span>
                  </h1>
                </div>
                <ImageComponent
                  className={styles.solutionDescriptionChild}
                  loading="lazy"
                  alt=""
                  src={line24}
                />
              </div>
            </div>
          </div>
          <div className={styles.financialPossibilities}>
            <div className={styles.unlockAWorld}>
              Unlock a world of financial possibilities with our versatile card
              solutions tailored to meet your business needs. Whether you need a
              card for everyday transactions or managing large-scale projects,
              our options are designed to provide convenience, security, and
              control.
            </div>
            <ImageComponent
              className={styles.financialStarIcon}
              loading="lazy"
              alt=""
              src={star7}
            />
          </div>
        </div>
        <div className={styles.planPickers}>
          <button className={styles.component2}>
            <b className={styles.pickAPlan}>Pick a plan</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardRow1;
