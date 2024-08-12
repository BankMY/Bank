import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FundContent.module.css";

export interface FundContentType {
  className?: string;
  fundIllustration?: string;
  plan?: string;
  mutualFunds?: string;
  diversifiedPortfoliosMana?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const FundContent: FunctionComponent<FundContentType> = ({
  className = "",
  fundIllustration,
  plan,
  mutualFunds,
  diversifiedPortfoliosMana,
  propAlignSelf,
  propWidth,
}) => {
  const fundContentStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div
      className={[styles.fundContent, className].join(" ")}
      style={fundContentStyle}
    >
      <div className={styles.wrapperFundIllustration}>
        <img
          className={styles.fundIllustrationIcon}
          alt=""
          src={fundIllustration}
        />
      </div>
      <div className={styles.fundDescription}>
        <div className={styles.fundPlan}>
          <img className={styles.planIcon} loading="lazy" alt="" src={plan} />
        </div>
        <div className={styles.fundDetails}>
          <h2 className={styles.mutualFunds}>{mutualFunds}</h2>
          <div className={styles.diversifiedPortfoliosManaged}>
            {diversifiedPortfoliosMana}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundContent;
