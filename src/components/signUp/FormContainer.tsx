import { FunctionComponent, useState } from "react";
import FieldLabels from "../FieldLabels";
import SubmitButton from "../SubmitButton";
import styles from "./FormContainer.module.css";
import btnimg from '../../assets/svg/auth/vector.svg';


const FormContainer: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <form className={styles.formContainer}>
      <h1 className={styles.signUp}>Sign up</h1>
      <div className={styles.inputFields}>
        <FieldLabels
          fullName="Full Name"
          enterYourFullNamePlacehol="Enter your full name"
        />
        <FieldLabels
          fullName="Phone number"
          enterYourFullNamePlacehol="Enter your phone number"
        />
        <FieldLabels
          fullName="Email address"
          enterYourFullNamePlacehol="Enter your email"
        />
        <FieldLabels
          fullName="Password"
          enterYourFullNamePlacehol="Enter your password"
          inputType={showPassword ? "text" : "password"}
        />
        <FieldLabels
          fullName="Confirm password"
          enterYourFullNamePlacehol="Confirm your password"
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
      <SubmitButton singUp="Sing Up"/>
    </form>
  );
};

export default FormContainer;
