import '../../model/style.scss'
interface SubmitTripButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

function SubmitTripButton({
  children,
  onClick,
  className,
}: SubmitTripButtonProps) {
  return (
    <button
      className={`submit-trip ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default SubmitTripButton;