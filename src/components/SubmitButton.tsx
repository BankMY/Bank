import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubmitButton.module.css";
import btnimg from '../assets/svg/auth/vector.svg';

export interface SubmitButtonType {
  singUp?: string;
  propGap?: CSSProperties["gap"];
};

const SubmitButton: FunctionComponent<SubmitButtonType> = ({
  singUp,
  propGap,
}) => {
  const submitButtonStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <button
      className={styles.submitButton}
      style={submitButtonStyle}
    >
      <b className={styles.singUp}>{singUp}</b>
      <div className={styles.buttonIcon}>
        <img className={styles.vectorIcon} alt="" src={btnimg} />
      </div>
    </button>
  );
};

export default SubmitButton;
