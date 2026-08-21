import { MouseEventHandler } from "react";

interface SelectButton {
  id: string;
  isSelected: boolean;
  onSelect: (id: string) => void,
  className?: string;
}

function SelectButton({
  id,
  isSelected,
  onSelect,
  className,
  ...props
}: SelectButton): React.JSX.Element {

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onSelect(id)
  }

  return (
    <button
      {...props}
      className={`select-button ${className}`}
      aria-pressed={isSelected}
      onClick={handleClick}
    >
      {isSelected ? 'Selected' : 'Select'}
    </button>
  );
}

export default SelectButton;