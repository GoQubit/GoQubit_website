"use client"
import React, { useState } from 'react';
import Magnet from './Animations/Magnet';

interface ButtonProps {
  children: React.ReactNode;      // Text for the solid button
  onClick: () => void;      // Optional click handler
  isSolid?: boolean; // Initial state for solid or not solid
  className?: string;      // Custom classes for button (optional)
  solidClass?: string;      // Custom classes for solid button (optional)
  isDisabled?: boolean; // for making button disabled or not
  transparentClass?: string; // Custom classes for transparent button (optional)
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  isSolid = true,
  className,
  isDisabled = false,
  solidClass = "bg-logo text-white hover:bg-[#7332ff] ",
  transparentClass = "bg-transparent border border-logo text-logo hover:bg-[#7332ff]"
}) => {

  const toggleButtonStyle = () => {
    onClick(); // Optional onClick functionality
  };

  return (
    <Magnet padding={50} disabled={false} magnetStrength={10}>
      <button
        onClick={toggleButtonStyle}
        disabled={isDisabled}
        className={`w-full rounded-[50px] font-medium transition-all   duration-300 px-[25px] py-[18px] ${isSolid ? solidClass : transparentClass} ${className}`}
      >
        {children}
      </button>
    </Magnet>
  );
};

export default Button;
