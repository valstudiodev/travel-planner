import { useAppDispatch } from "@/app/store/hooks";
import { toggle_hotel } from "@/app/store/tripSlice";
import '../model/style.scss';

interface SelectHotelButtonProps {
  hotelId: string;
  isSelected: boolean;
}

function SelectHotelButton({
  hotelId,
  isSelected = false,
}: SelectHotelButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className={`select-bus-button
       rounded-xl px-4 py-1 cursor-pointer 
      transition-all duration-300 text-surface 
      ${isSelected ? 'bg-text-muted' : 'bg-primary'}`}
      aria-pressed={isSelected}
      onClick={() => dispatch(toggle_hotel(hotelId))}
    >
      {isSelected ? 'Selected' : ' Select'}
    </button>
  );
}

export default SelectHotelButton;