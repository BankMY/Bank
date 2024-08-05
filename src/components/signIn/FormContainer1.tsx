import { FunctionComponent, useState } from "react";
import FieldLabels from "../FieldLabels";
import SubmitButton from "../SubmitButton";
import styles from "./FormContainer1.module.css";

export interface FormContainer1Type {
  className?: string;
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <form className={[styles.formContainer, className].join(" ")}>
      <h1 className={styles.signIn}>Sign in</h1>
      <div className={styles.inputFields}>
        <FieldLabels
          fullName="Email address"
          enterYourFullNamePlacehol="Enter your email"
        />
        <FieldLabels
          fullName="Set password"
          enterYourFullNamePlacehol="Enter your password"
          inputType={showPassword ? "text" : "password"}
        />
         <div className={styles.passwordToggle}>
          <input
            className={styles.toggle}
            type="checkbox"
            checked={showPassword}
            onChange={handleToggle}
          />
          <div className={styles.showPassword}>Show password</div>
        </div>
      </div>
      <SubmitButton singUp="Sing In" propGap="9px" />
    </form>
  );
};

export default FormContainer1;
