import { FC, ReactNode } from 'react';

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  bgColor?: string;
  textColor?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  label,
  icon,
  bgColor = 'bg-green-500',
  textColor = 'text-white',
  onClick,
}) => {
  return (
    <button
      className={`px-4 py-2 ${bgColor} ${textColor} hover:bg-opacity-80 rounded-lg`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;