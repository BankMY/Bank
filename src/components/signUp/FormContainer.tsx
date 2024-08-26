import { FunctionComponent, useState, ChangeEvent, FormEvent } from "react";
/* import axios from "axios"; */
import FieldLabels from "../FieldLabels";
import SubmitButton from "../SubmitButton";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleToggle = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleFullNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log(email + " , " + password)
   /*  try {
      const response = await axios.post('/your-endpoint', {
        fullName,
        phoneNumber,
        email,
        password,
      });

      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    } */
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1 className={styles.signUp}>Sign up</h1>
      <div className={styles.inputFields}>
        <FieldLabels
          fullName="Full Name"
          enterYourFullNamePlacehol="Enter your full name"
          value={fullName}
          onChange={handleFullNameChange}
        />
        <FieldLabels
          fullName="Phone number"
          enterYourFullNamePlacehol="Enter your phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <FieldLabels
          fullName="Email address"
          enterYourFullNamePlacehol="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <FieldLabels
          fullName="Password"
          enterYourFullNamePlacehol="Enter your password"
          inputType={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <FieldLabels
          fullName="Confirm password"
          enterYourFullNamePlacehol="Confirm your password"
          inputType={showPassword ? "text" : "password"}
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
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
      <SubmitButton singUp="Sign Up" />
    </form>
  );
};

export default FormContainer;
