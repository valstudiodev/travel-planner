import { useAppDispatch } from "@/app/store/hooks";
import { remove_bus, remove_hotel } from "@/app/store/tripSlice";

interface RemoveSelectionButtonProps {
  cardId: string;
  className?: string;
  children: React.ReactNode;
  type: 'bus' | 'hotel'
}

function RemoveSelectionButton({
  cardId,
  type,
  className = '',
  children,
  ...props
}: RemoveSelectionButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch()

  const handleRemoveBus = (): void => {
    if (type === 'bus') {
      dispatch(remove_bus(cardId))
    } else {
      dispatch(remove_hotel(cardId))
    }
  }

  return (
    <button
      {...props}
      className={`remove-selection bg-danger rounded
        px-6 py-2 text-surface cursor-pointer
        hover:bg-red-600 transition-all duration-300 ${className}`}
      onClick={handleRemoveBus}
    >
      {children}
    </button>
  );
}

export default RemoveSelectionButton;