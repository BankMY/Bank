import React from 'react';
import styles from './ImageComponent.module.css';

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  className,
  loading = 'lazy',
}) => {
  return (
    <img
      className={`${className} ${styles.image}`} // Применяем стили
      src={src}
      alt={alt}
      loading={loading}
    />
  );
};

export default ImageComponent;
