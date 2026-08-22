import { MouseEventHandler } from "react";

interface RemoveSelectionButtonProps {
  cardId: string;
  onRemove: (cardId: string) => void;
  className?: string;
  children: React.ReactNode;
}

function RemoveSelectionButton({
  cardId,
  onRemove,
  className = '',
  children,
  ...props
}: RemoveSelectionButtonProps): React.JSX.Element {

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onRemove(cardId)
  }

  return (
    <button
      {...props}
      className={`remove-selection bg-danger rounded
        px-6 py-2 text-surface cursor-pointer
        hover:bg-red-600 transition-all duration-300 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default RemoveSelectionButton;