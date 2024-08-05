import { FunctionComponent } from "react";
import LeftSide from "../components/signUp/LeftSide";
import FormContainer from "../components/signUp/FormContainer";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.formSignUp}>
        <LeftSide />
        <div className={styles.formContainerWrapper}>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
