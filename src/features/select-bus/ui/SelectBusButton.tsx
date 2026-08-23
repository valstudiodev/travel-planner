import { useAppDispatch } from "@/app/store/hooks";
import { toggle_bus } from "@/app/store/tripSlice";
import '../model/style.scss';
interface SelectBusButtonProps {
  busId: string;
  isSelected: boolean;
}

function SelectBusButton({
  busId,
  isSelected = false,
}: SelectBusButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch()

  return (
    <button
      type="button"
      className={`select-bus-button
       rounded-xl px-4 py-1 cursor-pointer
      transition-all duration-300 text-surface 
      ${isSelected ? 'bg-text-muted' : 'bg-primary'}`}
      aria-pressed={isSelected}
      onClick={() => dispatch(toggle_bus(busId))}
    >
      {isSelected ? 'Selected' : ' Select'}
    </button>
  );
}

export default SelectBusButton;

