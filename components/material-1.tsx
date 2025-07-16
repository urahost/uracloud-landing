import React, { forwardRef } from "react";
import clsx from "clsx";

const types = {
  base: "rounded-md shadow-border",
  small: "rounded-md shadow-border-small",
  medium: "rounded-xl shadow-border-medium",
  large: "rounded-xl shadow-border-large",
  tooltip: "rounded-md shadow-tooltip",
  menu: "rounded-xl shadow-menu",
  modal: "rounded-xl shadow-modal",
  fullscreen: "rounded-2xl shadow-fullscreen"
};

interface MaterialProps {
  type: keyof typeof types;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Material = forwardRef<HTMLDivElement, MaterialProps>(({ type, children, className, style, onClick }, ref) => {
  return (
    <div
      className={clsx(
        "bg-background-100",
        types[type],
        className
      )}
      ref={ref}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

Material.displayName = "Material";