import { FunctionComponent } from "react";
import styles from "./SignIn.module.css";
import { Link } from "react-router-dom";

interface SignInProps {
  title: string;
  href: string;
}

const SignIn: FunctionComponent<SignInProps> = ({title, href}) => {
  return (
    <button className={styles.signIn}>
      <Link to={href} className={styles.signIn1}>{title}</Link>
    </button>
  );
};

export default SignIn;
