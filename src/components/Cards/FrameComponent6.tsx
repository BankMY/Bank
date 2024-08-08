import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";
import ImageComponent from '../ImageComponent';

import line25 from '../../assets/svg/Cards/line-25.svg';
import star9 from '../../assets/svg/Cards/star-9.svg';
import star12 from '../../assets/svg/Cards/star-12.svg';
import line26 from '../../assets/svg/Cards/line-26.svg';
import line27 from '../../assets/svg/Cards/line-27.svg';
import group2412x from '../../assets/png/Cards/group-241@2x.png';
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
                  <ImageComponent
                    className={styles.currencyTitleChild}
                    loading="lazy"
                    alt=""
                    src={line25}
                  />
                  <h1 className={styles.multiCurrencyCapabilities}>
                    <span>Multi-Currency</span>
                    <span className={styles.capabilities}> Capabilities</span>
                  </h1>
                </div>
                <ImageComponent
                  className={styles.dataCellIcon}
                  loading="lazy"
                  alt=""
                  src={star9}
                />
              </div>
            </div>
            <div className={styles.globalReach}>
              <ImageComponent
                className={styles.reachStarIcon}
                loading="lazy"
                alt=""
                src={star12}
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
            <ImageComponent
              className={styles.wrapperLine26Child}
              alt=""
              src={line26}
            />
          </div>
          <div className={styles.wrapperLine27}>
            <ImageComponent
              className={styles.wrapperLine27Child}
              alt=""
              src={line27}
            />
          </div>
          <ImageComponent
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={group2412x}
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
