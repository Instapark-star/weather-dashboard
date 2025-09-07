"use client";

import { cn } from "../../lib/utils";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-800 shadow-md transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
