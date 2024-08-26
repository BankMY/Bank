import { FunctionComponent, ChangeEvent } from "react";
import styles from "./FieldLabels.module.css";

export interface FieldLabelsType {
  fullName?: string;
  enterYourFullNamePlacehol?: string;
  inputType?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FieldLabels: FunctionComponent<FieldLabelsType> = ({
  fullName,
  enterYourFullNamePlacehol,
  inputType = "text",
  value,
  onChange,
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
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default FieldLabels;
