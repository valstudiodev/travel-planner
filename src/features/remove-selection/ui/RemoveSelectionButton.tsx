import useTrip from "@/app/providers/tripProvider/useTrip";

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

  const { dispatch } = useTrip()

  const handleRemoveBus = (): void => {
    dispatch({
      type: type === 'bus' ? 'REMOVE_BUS' : 'REMOVE_HOTEL',
      payload: cardId
    })
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