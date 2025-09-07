import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "default"
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-300 bg-white hover:bg-gray-100",
          size === "default" && "px-4 py-2 text-sm",
          size === "sm" && "px-3 py-1 text-xs",
          size === "lg" && "px-6 py-3 text-base",
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
