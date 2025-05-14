"use client";
import React from "react";
import { StyledWrapper } from "../styles-wrappers/StyledWrapper";
import { useRouter } from "next/navigation";

export const Button = ({
  children,
  className = "",
  onClick = () => {},
  bgColor = "#ffffff",
  fullRounded = false,
  size = "md",
  linkRef = "",
  noBefore = false,
  isDisable=false
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bgColor?: string;
  fullRounded?: boolean;
  size?: "sm" | "md" | "lg";
  noBefore?: boolean;
  linkRef?: string;
  isDisable?: boolean;
}) => {
  const router = useRouter();

  const clickHandler = () => {
    if (linkRef) {
      router.push(linkRef);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <StyledWrapper
      $bgColor={bgColor}
      $fullRounded={fullRounded}
      $size={size}
      $noBefore={noBefore}
    >
      <button disabled={isDisable} onClick={clickHandler} className={`fancy `}>
        {!noBefore && <span className="top-key" />}
        <div className={`text  `}>
          <p className={`${className}`}>{children}</p>
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
