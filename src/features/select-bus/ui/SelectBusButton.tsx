import { MouseEventHandler } from "react";

interface SelectBusButtonProps {
  busId: string;
  isSelected: boolean;
  onSelect: (busId: string) => void
}

function SelectBusButton({
  busId,
  isSelected = false,
  onSelect
}: SelectBusButtonProps): React.JSX.Element {

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onSelect(busId)
  }
  return (
    <button
      type="button"
      className={`select-bus-button
       rounded-xl px-4 py-1
      cursor-pointer hover:bg-primary-hover
      transition-all duration-300 text-surface ${isSelected ? 'bg-text-muted' : 'bg-primary'}`}
      aria-pressed={isSelected}
      onClick={handleClick}
    >
      {isSelected ? 'Selected' : ' Select'}
    </button>
  );
}

export default SelectBusButton;

