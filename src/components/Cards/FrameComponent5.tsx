import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

import ImageComponent from '../ImageComponent';

import star9 from '../../assets/svg/Cards/star-9.svg';

import starIcon from '../../assets/svg/Cards/star-12.svg';
import exclusiveBusinessRewards from '../../assets/svg/Cards/exclusive-business-rewards.svg';
export interface FrameComponent5Type {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.rewardsContentWrapper, className].join(" ")}>
      <div className={styles.rewardsContent}>
        <div className={styles.rewardsDetails}>
          <div className={styles.rewardsTitle}>
            <h1 className={styles.exclusiveBusinessRewardsContainer}>
              <span>{`Exclusive `}</span>
              <span className={styles.businessRewards}>Business Rewards</span>
            </h1>
          </div>
          <div className={styles.rewardsDescription}>
            <div className={styles.maximizeYourBusinessPotentiWrapper}>
            <div className={styles.container}>
              <div className={styles.maximizeYourBusiness}>
                Maximize your business potential with our exclusive rewards
                program. Earn points on every purchase and redeem them for
                travel, merchandise, and more. Our business cards offer valuable
                rewards that can help you save and grow your business
                efficiently.
              </div>
              <div className={styles.rewardsPicker}>
          <button className={styles.component3}>
            <b className={styles.pickAPlan}>Try it now</b>
          </button>
        </div>
              <section className={styles.starSecurityParent}>
            <ImageComponent
            className={styles.starSecurityIcon}
            alt="Star Security Icon"
            src={starIcon}
            />
            <ImageComponent
            className={styles.exclusiveBusinessRewardsIcon}
            alt="Exclusive Business Rewards"
            src={exclusiveBusinessRewards}
            />
        </section>
        </div>
            </div>
            <ImageComponent
              className={styles.rewardsStarIcon}
              loading="lazy"
              alt=""
              src={star9}
            />
          </div>
        </div>
      </div>
    </section>

    
  );
};

export default FrameComponent5;
