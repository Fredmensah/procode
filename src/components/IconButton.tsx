import React from "react";
import "../styles/iconButton.scss";

interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void; 
  size?: "small" | "medium" | "large"; 
  color?: string;
  tooltip?: string; 
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  size = "medium",
  color = "#000",
  tooltip,
}) => {
  return (
    <button
      className={`icon-button icon-button--${size}`}
      onClick={onClick}
      style={{ color }}
      title={tooltip}
    >
      {icon}
    </button>
  );
};

export default IconButton;
