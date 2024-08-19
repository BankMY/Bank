import { FunctionComponent } from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";

interface SignUpProps {
  title: string;
  href: string;
}

const SignUp: FunctionComponent<SignUpProps> = ({title, href}) => {
  return (
    <button className={styles.signUp}>
      <nav>
        <Link to={href} className={styles.singUp}>{title}</Link>
      </nav>
    </button>
  );
};

export default SignUp;
