import useTrip from "@/app/providers/tripProvider/useTrip";
interface SelectBusButtonProps {
  busId: string;
  isSelected: boolean;
}

function SelectBusButton({
  busId,
  isSelected = false,
}: SelectBusButtonProps): React.JSX.Element {

  const { dispatch } = useTrip()

  const handleSelectBus = (): void => {
    dispatch({
      type: 'TOGGLE_BUS',
      payload: busId
    })
  }

  return (
    <button
      type="button"
      className={`select-bus-button
       rounded-xl px-4 py-1
      cursor-pointer hover:bg-primary-hover
      transition-all duration-300 text-surface ${isSelected ? 'bg-text-muted' : 'bg-primary'}`}
      aria-pressed={isSelected}
      onClick={handleSelectBus}
    >
      {isSelected ? 'Selected' : ' Select'}
    </button>
  );
}

export default SelectBusButton;

