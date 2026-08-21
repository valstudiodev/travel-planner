import { useNavigate } from "react-router";
import './style.scss'

interface NextButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

function NextButton({
  to,
  children,
  className = '',
  ...props
}: NextButtonProps): React.JSX.Element {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(to)
  }

  return (
    <button
      {...props}
      className={`button-next ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default NextButton;