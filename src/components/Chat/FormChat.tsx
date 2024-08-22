import { FunctionComponent, useCallback } from "react";
import styles from "./FormChat.module.css";

import union from "../../assets/svg/Chat/Unionn.svg"
import vector1 from "../../assets/svg/Chat/Vector1.svg"
import group6874 from "../../assets/svg/Chat/Group 6874.svg"
import group6967 from "../../assets/svg/Chat/Group 6967.svg"
export type FormChatType = {
  className?: string;
  onClose: () => void;
};

const FormChat: FunctionComponent<FormChatType> = ({ className = "", onClose }) => {
  const onVectorIconClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <div className={styles.BlurFullScreen}>
      <div className={[styles.formChat, className].join(" ")}>
        <img className={styles.unionIcon} alt="" src={union} />
        <div className={styles.weAreHappy}>
          We are happy to answer your questions
        </div>
        <div className={styles.formChatChild} />
        <img
          className={styles.vectorIcon}
          alt=""
          src={vector1}
          onClick={onVectorIconClick}
        />
        <div className={styles.enterYourEmailWrapper}>
          <div className={styles.enterYourEmail}>Enter your email</div>
        </div>
        <div className={styles.enterYourQuestionsWrapper}>
          <div className={styles.enterYourQuestions}>Enter your questions</div>
        </div>
        <div className={styles.addFileParent}>
          <div className={styles.addFile}>Add File</div>
          <img className={styles.frameChild} alt="" src={group6874} />
        </div>
        <div className={styles.enterYourFullNameWrapper}>
          <div className={styles.enterYourFull}>Enter your full name</div>
        </div>
        <div className={styles.emailAddress}>Email address</div>
        <div className={styles.questions}>Questions</div>
        <div className={styles.fullName}>Full name</div>
        <div className={styles.technicalSupport}>Technical support</div>
        <img className={styles.formChatItem} alt="" src={group6967} />
      </div>
    </div>
  );
};

export default FormChat;
