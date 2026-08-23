import useTrip from "@/app/providers/tripProvider/useTrip";

interface SelectHotelButtonProps {
  hotelId: string;
  isSelected: boolean;
}

function SelectHotelButton({
  hotelId,
  isSelected = false,
}: SelectHotelButtonProps): React.JSX.Element {

  const { dispatch } = useTrip()

  const handleSelectHotel = (): void => {
    dispatch({
      type: 'TOGGLE_HOTEL',
      payload: hotelId
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
      onClick={handleSelectHotel}
    >
      {isSelected ? 'Selected' : ' Select'}
    </button>
  );
}

export default SelectHotelButton;