import { MouseEventHandler } from "react";

interface SelectHotelButtonProps {
  hotelId: string;
  isSelected: boolean;
  onSelect: (hotelId: string) => void
}

function SelectHotelButton({
  hotelId,
  isSelected = false,
  onSelect
}: SelectHotelButtonProps): React.JSX.Element {

  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onSelect(hotelId)
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

export default SelectHotelButton;