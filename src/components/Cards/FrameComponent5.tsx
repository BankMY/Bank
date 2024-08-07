import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

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
              <div className={styles.maximizeYourBusiness}>
                Maximize your business potential with our exclusive rewards
                program. Earn points on every purchase and redeem them for
                travel, merchandise, and more. Our business cards offer valuable
                rewards that can help you save and grow your business
                efficiently.
              </div>
            </div>
            <img
              className={styles.rewardsStarIcon}
              loading="lazy"
              alt=""
              src="/star-9.svg"
            />
          </div>
        </div>
        <div className={styles.rewardsPicker}>
          <button className={styles.component3}>
            <b className={styles.pickAPlan}>Try it now</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
