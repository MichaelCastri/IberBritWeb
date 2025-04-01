import * as React from "react";
import { cn } from "../lib/utils";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef(
  (
    { className, variant = "default", size = "default", asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-[rgb(136,19,55)] text-white hover:bg-[rgb(184,29,34)]": variant === "default",
            "bg-[rgb(205,34,40)] text-white hover:bg-[rgb(152,28,32)]": variant === "destructive",
            "border border-[rgb(252,202,204)] bg-background hover:bg-[rgb(252,165,168)] hover:text-[rgb(69,10,12)]":
              variant === "outline",
            "bg-[rgb(254,226,227)] text-[rgb(127,29,32)] hover:bg-[rgb(252,202,204)]": variant === "secondary",
            "bg-transparent hover:bg-[rgb(252,202,204)] hover:text-[rgb(69,10,12)]": variant === "ghost",
            "bg-transparent underline-offset-4 hover:underline text-[rgb(136,19,55)]": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-11 rounded-md px-8": size === "lg",
            "h-9 w-9": size === "icon",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };