import React from 'react';
import { Image } from 'react-bootstrap';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md', className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      roundedCircle
      className={`avatar avatar-${size} ${className || ''}`}
    />
  );
};

export default Avatar;
