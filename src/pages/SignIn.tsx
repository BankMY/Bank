import { FunctionComponent } from "react";
import LeftSide1 from "../components/signIn/LeftSide1";
import FormContainer1 from "../components/signIn/FormContainer1";
import styles from "./SignIn.module.css";

const SignIn: FunctionComponent = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.formSignIn}>
        <LeftSide1 />
        <div className={styles.formRight}>
          <FormContainer1 />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
