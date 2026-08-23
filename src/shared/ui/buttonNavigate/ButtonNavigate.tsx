import { useNavigate } from "react-router";
import './style.scss'

interface ButtonNavigateProps {
  direction: 1 | -1;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function ButtonNavigate({
  direction = 1,
  children,
  className = '',
  disabled = false,
  ...props
}: ButtonNavigateProps) {
  const navigate = useNavigate()

  const handleClick = (): void => {
    if (disabled) return

    navigate(direction)
  }

  return (
    <button
      type="button"
      className={`button-navigate ${className}`}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonNavigate;