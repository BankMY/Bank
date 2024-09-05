import React from 'react';
import styles from './ToggleSwitch.module.css';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  width?: number;
  height?: number;
  onColor?: string;
  offColor?: string;
  thumbColor?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked,
  onChange,
  width = 50,
  height = 25,
  onColor = '#4CAF50',
  offColor = '#ccc',
  thumbColor = '#fff',
}) => {
  return (
    <div
      className={styles.toggleSwitch}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: checked ? onColor : offColor,
      }}
      onClick={onChange}
    >
      <div
        className={styles.toggleThumb}
        style={{
          width: `${height*0.8}px`,
          height: `${height*0.8}px`,
          backgroundColor: thumbColor,
          transform: checked ? `translateX(${width - height}px)` : 'translateX(5px)',
        }}
      />
    </div>
  );
};

export default ToggleSwitch;
