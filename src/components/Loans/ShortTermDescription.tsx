import { FunctionComponent } from "react";
import styles from "./ShortTermDescription.module.css";

export interface ShortTermDescriptionType {
  className?: string;
  shortTerm?: string;
  deposits?: string;
  needQuickAccessToYourSavi?: string;
};

const ShortTermDescription: FunctionComponent<ShortTermDescriptionType> = ({
  className = "",
  shortTerm,
  deposits,
  needQuickAccessToYourSavi,
}) => {
  return (
    <div className={[styles.shortTermDescription, className].join(" ")}>
      <div className={styles.shortTermDeposits}>
        <h1 className={styles.shortTermDeposits1}>
          <span>{shortTerm}</span>
          <span className={styles.deposits}>{deposits}</span>
        </h1>
      </div>
      <div className={styles.needQuickAccess}>{needQuickAccessToYourSavi}</div>
    </div>
  );
};

export default ShortTermDescription;
