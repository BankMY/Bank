import React from 'react';
import styles from '../styles/myButton.module.css';
import { Link } from 'react-router-dom';

interface MyButtonProps {
  image: string;
  userhref: string;
}

const MyButton: React.FC<MyButtonProps> = ({ image, userhref }) => {
  return (
    <Link to={userhref} className={styles.mybutton}>
      <img src={image} alt="Button" />
    </Link>
  );
};

export default MyButton;
