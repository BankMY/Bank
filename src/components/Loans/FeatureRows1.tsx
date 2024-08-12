import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeatureRows1.module.css";

export interface FeatureRows1Type {
  className?: string;
  group?: string;
  group1?: string;
  vector?: string;
  vector1?: string;
  group2?: string;
  group3?: string;
  group4?: string;
  vector2?: string;
  vector3?: string;
  vector4?: string;
  group5?: string;
  stocksAndBonds?: string;
  equityAndFixedIncomeOptio?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const FeatureRows1: FunctionComponent<FeatureRows1Type> = ({
  className = "",
  group,
  group1,
  vector,
  vector1,
  group2,
  group3,
  group4,
  vector2,
  vector3,
  vector4,
  group5,
  stocksAndBonds,
  equityAndFixedIncomeOptio,
  propPadding,
  propGap,
}) => {
  const featureRowsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={[styles.featureRows, className].join(" ")}
      style={featureRowsStyle}
    >
      <div className={styles.featureItems}>
        <div className={styles.group}>
          <div className={styles.houseIllustration}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src={group}
            />
            <img className={styles.groupIcon1} alt="" src={group1} />
            <img className={styles.vectorIcon} alt="" src={vector} />
            <img className={styles.vectorIcon1} alt="" src={vector1} />
            <img className={styles.groupIcon2} alt="" src={group2} />
            <img className={styles.groupIcon3} alt="" src={group3} />
            <img className={styles.groupIcon4} alt="" src={group4} />
            <img className={styles.vectorIcon2} alt="" src={vector2} />
            <img className={styles.vectorIcon3} alt="" src={vector3} />
            <img className={styles.vectorIcon4} alt="" src={vector4} />
            <img className={styles.groupIcon5} alt="" src={group5} />
          </div>
        </div>
      </div>
      <div className={styles.retirementFeature}>
        <h2 className={styles.stocksAndBonds}>{stocksAndBonds}</h2>
        <div className={styles.equityAndFixed}>{equityAndFixedIncomeOptio}</div>
      </div>
    </div>
  );
};

export default FeatureRows1;
