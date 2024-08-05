import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";
import picture from "../../assets/svg/group-191@2x.png"

export interface FrameComponent3Type {
  unlockLifesJoy?: string;
  withYour?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  unlockLifesJoy,
  withYour,
}) => {
  return (
    <div className={styles.unlockLifesJoyWithYourParent}>
      <h1 className={styles.unlockLifesJoyContainer}>
        <p className={styles.unlockLifesJoy}>{unlockLifesJoy}</p>
        <p className={styles.withYour}>{withYour}</p>
      </h1>
      <div className={styles.featureOneCard}>
        <img className={styles.featureOneCardChild} alt="" src={picture} />
        <h1 className={styles.card}>Card</h1>
      </div>
    </div>
  );
};

export default FrameComponent3;
