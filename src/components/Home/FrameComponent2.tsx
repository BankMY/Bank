import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";
import { Link } from "react-router-dom";

const FrameComponent2: FunctionComponent = () => {
  return (
    <div className={styles.featureOneContainerParent}>
      <div className={styles.featureOneContainer}>
        <div className={styles.featureOneContent}>
          <FrameComponent3
            unlockLifesJoy="Unlock Life’s Joy "
            withYour="with your "
          />
          <div className={styles.withEverySwipe}>
            With every swipe, you’re not just making a transaction – you’re
            enhancing your lifestyle. Discover the freedom, security, and
            benefits that come with using our card. Live your best life today!
          </div>
        </div>
        
          <div className={styles.pricingContent}>
            <Link className={styles.component1} to="/sign-in">
              <b className={styles.pickAPlan}>Get Started</b>
            </Link>
            <div className={styles.pricingSubheading}>
              <b className={styles.howItWorks}>How it works</b>
              <div className={styles.pricingSubheadingIcon}>
                <img
                  className={styles.pricingSubheadingIconImage}
                  alt=""
                  src="/pricing-subheading-icon-image.svg"
                />
              </div>
            </div>
          </div>

      </div>
    </div>
  );
};

export default FrameComponent2;
