import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export interface FrameComponent6Type {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.currencyContentParent, className].join(" ")}>
      <div className={styles.currencyContent}>
        <div className={styles.currencyFeatures}>
          <div className={styles.currencyDescription}>
            <div className={styles.currencyDetails}>
              <div className={styles.currencyHighlight}>
                <div className={styles.currencyTitle}>
                  <img
                    className={styles.currencyTitleChild}
                    loading="lazy"
                    alt=""
                    src="/line-25.svg"
                  />
                  <h1 className={styles.multiCurrencyCapabilities}>
                    <span>Multi-Currency</span>
                    <span className={styles.capabilities}> Capabilities</span>
                  </h1>
                </div>
                <img
                  className={styles.dataCellIcon}
                  loading="lazy"
                  alt=""
                  src="/star-9.svg"
                />
              </div>
            </div>
            <div className={styles.globalReach}>
              <img
                className={styles.reachStarIcon}
                loading="lazy"
                alt=""
                src="/star-12.svg"
              />
              <div className={styles.expandYourGlobal}>
                Expand your global reach with our multi-currency card options.
                Easily manage and transact in multiple currencies without the
                hassle of currency conversion fees. Perfect for businesses
                operating internationally, our cards make global transactions
                seamless and cost-effective.
              </div>
            </div>
          </div>
          <div className={styles.currencyPicker}>
            <button className={styles.component3}>
              <b className={styles.pickAPlan}>Get my Card</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.multiCurrencyCapabilities1}>
        <div className={styles.shadow} />
        <div className={styles.wrapperLine26Parent}>
          <div className={styles.wrapperLine26}>
            <img
              className={styles.wrapperLine26Child}
              alt=""
              src="/line-26.svg"
            />
          </div>
          <div className={styles.wrapperLine27}>
            <img
              className={styles.wrapperLine27Child}
              alt=""
              src="/line-27.svg"
            />
          </div>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/group-241@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
