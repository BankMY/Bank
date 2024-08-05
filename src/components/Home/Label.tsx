import { FunctionComponent } from "react";
import styles from "./Label.module.css";

export interface LabelType {
  className?: string;
  websitenet?: string;
  label?: string;
  hadAGreatExperienceWithYo?: string;
  title?: string;
  emilyDavis?: string;
  loanWiz?: string;
};

const Label: FunctionComponent<LabelType> = ({
  className = "",
  websitenet,
  label,
  hadAGreatExperienceWithYo,
  title,
  emilyDavis,
  loanWiz,
}) => {
  return (
    <div className={[styles.label, className].join(" ")}>
      <div className={styles.labelChild} />
      <div className={styles.loanContent}>
        <div className={styles.loanStars}>
          <img className={styles.websitenetIcon} alt="" src={websitenet} />
          <img className={styles.labelIcon} alt="" src={label} />
        </div>
        <div className={styles.hadAGreat}>{hadAGreatExperienceWithYo}</div>
      </div>
      <div className={styles.userThree}>
        <div className={styles.userThreeImage}>
          <img className={styles.titleIcon} alt="" src={title} />
          <div className={styles.userThreeDetails}>
            <div className={styles.emilyDavis}>{emilyDavis}</div>
            <div className={styles.loanWiz}>{loanWiz}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Label;
