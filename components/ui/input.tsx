"use client";

import { cn } from "../../lib/utils";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        "px-3 py-2 border rounded-md border-gray-600 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white hover:ring-white transition",
        className
      )}
      {...props}
    />
  );
};
