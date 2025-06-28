"use client";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <>
    <button
      className={`uiverse-n21-btn ${className}`}
      style={{
        width: '10em',
        height: '3.5em',
        position: 'relative',
        border: '3px ridge #149CEA',
        outline: 'none',
        color: 'white',
        transition: '1s',
        borderRadius: '0.3em',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      {...props}
    >
      {children}
    </button>
    <style jsx global>{`
      .uiverse-n21-btn::after {
        content: "";
        position: absolute;
        top: -10px;
        left: 3%;
        width: 95%;
        height: 40%;
        transition: 0.5s;
        transform-origin: center;
      }
      .uiverse-n21-btn::before {
        content: "";
        transform-origin: center;
        position: absolute;
        top: 80%;
        left: 3%;
        width: 95%;
        height: 40%;
        transition: 0.5s;
      }
      .uiverse-n21-btn:hover::before, .uiverse-n21-btn:hover::after {
        transform: scale(0);
      }
      .uiverse-n21-btn:hover {
        box-shadow: inset 0px 0px 25px #1479EA;
      }
    `}</style>
  </>
); 