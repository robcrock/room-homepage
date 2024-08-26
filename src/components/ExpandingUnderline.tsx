import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface ExpandingUnderlineProps {
  children: ReactNode;
  className?: string;
}

const ExpandingUnderline: React.FC<ExpandingUnderlineProps> = ({
  children,
  className,
}) => {
  return (
    <span className={"group relative cursor-pointer"}>
      <span className="relative">
        {children}
        <span
          className={cn(
            "absolute -bottom-[8px] left-1/2 h-[2px] w-6 -translate-x-1/2 scale-x-0 transform bg-white transition-transform group-hover:scale-x-100",
            className,
          )}
        ></span>
      </span>
    </span>
  );
};

export default ExpandingUnderline;
