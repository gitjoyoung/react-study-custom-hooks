import React from "react";

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  className,
  onClick,
}: IProps) {
  const style = `p-2 border border-black bg-white ${className}`;

  return (
    <button onClick={onClick} className={style}>
      {children}
    </button>
  );
}
