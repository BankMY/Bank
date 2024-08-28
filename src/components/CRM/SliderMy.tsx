import React from 'react';
import styles from './SliderMy.module.css';
import ThumbIcon from '../../assets/svg/CRM/Slider/sliderbackground.svg';
import TrackIcon from '../../assets/svg/CRM/Slider/sliderbtn.svg';

interface SliderMyProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (value: number) => void;
}

const SliderMy: React.FC<SliderMyProps> = ({ min, max, step = 1, value, onChange }) => {
  return (
    <div className={styles.customslidercontainer}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={styles.customslider}
        style={{ '--min': 0, '--max': 100, '--value': value } as React.CSSProperties}
      />
    </div>
  );
};

export default SliderMy;
