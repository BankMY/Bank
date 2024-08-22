import { FunctionComponent } from "react";
import styles from "./FieldLabels.module.css";

export interface FieldLabelsType {
  fullName?: string;
  enterYourFullNamePlacehol?: string;
  inputType?: string;
};

const FieldLabels: FunctionComponent<FieldLabelsType> = ({
  fullName,
  enterYourFullNamePlacehol,
  inputType = "text",
}) => {
  return (
    <div className={styles.fieldLabels}>
      <div className={styles.fullNameWrapper}>
        <div className={styles.fullName}>{fullName}</div>
      </div>
      <div className={styles.inputPlaceholders}>
        <input
          className={styles.enterYourFull}
          placeholder={enterYourFullNamePlacehol}
          type={inputType}
        />
      </div>
    </div>
  );
};

export default FieldLabels;
