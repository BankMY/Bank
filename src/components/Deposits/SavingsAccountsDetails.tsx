import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SavingsAccountsDetails.module.css";

export interface SavingsAccountsDetailsType {
  className?: string;
  cancellation?: string;
  moneyMarketAccounts?: string;
  higherYieldsWithLimitedCh?: string;
  star23?: string;
  star24?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const SavingsAccountsDetails: FunctionComponent<SavingsAccountsDetailsType> = ({
  className = "",
  cancellation,
  moneyMarketAccounts,
  higherYieldsWithLimitedCh,
  star23,
  star24,
  propPadding,
  propGap,
}) => {
  const savingsAccountsDetailsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={[styles.savingsAccountsDetails, className].join(" ")}
      style={savingsAccountsDetailsStyle}
    >
      <div className={styles.cancellationWrapper}>
        <img
          className={styles.cancellationIcon}
          loading="lazy"
          alt=""
          src={cancellation}
        />
      </div>
      <div className={styles.moneyMarketAccountsParent}>
        <h2 className={styles.moneyMarketAccounts}>{moneyMarketAccounts}</h2>
        <div className={styles.frameParent}>
          <div className={styles.higherYieldsWithLimitedCheWrapper}>
            <div className={styles.higherYieldsWith}>
              {higherYieldsWithLimitedCh}
            </div>
          </div>
          <div className={styles.starParent}>
            <img className={styles.frameChild} alt="" src={star23} />
            <img className={styles.frameItem} alt="" src={star24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsAccountsDetails;
