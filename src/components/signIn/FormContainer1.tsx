import { FunctionComponent, useState, ChangeEvent, FormEvent } from "react";
import { postData } from '../../api';
import FieldLabels from "../FieldLabels";
import SubmitButton from "../SubmitButton";
import styles from "./FormContainer1.module.css";
import { Navigate, useNavigate } from "react-router-dom";

const FormContainer1: FunctionComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleToggle = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await postData('/auth/login', {       
        email,
        password,
      });
  
      console.log('Server response:', response);
    } catch (error) {
      console.error('Error sending data:', error);
      setError('An error occurred while sending data. Please try again.');
    }

    
    navigate('/dashbord');
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <h1 className={styles.signIn}>Sign in</h1>
      <div className={styles.inputFields}>
        <FieldLabels
          fullName="Email address"
          enterYourFullNamePlacehol="Enter your email"
          value={email}
          onChange={handleEmailChange}
        />
        <FieldLabels
          fullName="Set password"
          enterYourFullNamePlacehol="Enter your password"
          inputType={showPassword ? "text" : "password"}
          value={password}
          onChange={handlePasswordChange}
        />
        <div className={styles.passwordToggle}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleToggle}
          />
          <div className={styles.showPassword}>Show password</div>
        </div>
      </div>
      {error && <div className={styles.errorMessage}>{error}</div>}
      <SubmitButton singUp="Sing In" propGap="9px" />
    </form>
  );
};

export default FormContainer1;
