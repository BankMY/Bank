import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FeatureRows.module.css";

export interface FeatureRowsType {
  className?: string;
  house?: string;
  retirementAcc?: string;
  planForASecureFutureWithO?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const FeatureRows: FunctionComponent<FeatureRowsType> = ({
  className = "",
  house,
  retirementAcc,
  planForASecureFutureWithO,
  propPadding,
  propGap,
  propWidth,
  propFlex,
}) => {
  const featureRows1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
      width: propWidth,
      flex: propFlex,
    };
  }, [propPadding, propGap, propWidth, propFlex]);

  return (
    <div
      className={[styles.featureRows, className].join(" ")}
      style={featureRows1Style}
    >
      <div className={styles.houseWrapper}>
        <img className={styles.houseIcon} loading="lazy" alt="" src={house} />
      </div>
      <h2 className={styles.retirementAcc}>{retirementAcc}</h2>
      <div className={styles.planForA}>{planForASecureFutureWithO}</div>
    </div>
  );
};

export default FeatureRows;
