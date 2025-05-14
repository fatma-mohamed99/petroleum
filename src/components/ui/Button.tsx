"use client";
import React from 'react';
import { StyledWrapper } from '../styles-wrappers/StyledWrapper';

export const Button = ({
  children,
  className = "",
  onClick = () => {},
  bgColor = "#ffffff",
  fullRounded = false,
  size = 'md',
  noBefore = false
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
  fullRounded?: boolean;
  size?: 'sm' | 'md' | 'lg';
  noBefore?: boolean;
}) => {
  return (
    <StyledWrapper 
      $bgColor={bgColor} 
      $fullRounded={fullRounded}
      $size={size}
      $noBefore={noBefore}
    >
      <button onClick={onClick} className={`fancy `}>
        {!noBefore && <span className="top-key" />}
        <div  className={`text  ${className}`} >
            <p className={`${className}`}>
{children}
            </p>
            </div>
        {!noBefore && (
          <>
            <span className="bottom-key-1" />
            <span className="bottom-key-2" />
          </>
        )}
      </button>
    </StyledWrapper>
  );
};
