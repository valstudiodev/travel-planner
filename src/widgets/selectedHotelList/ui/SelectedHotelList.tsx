import HotelCard from "@/entities/hotel/ui/HotelCard";
import RemoveSelectionButton from "@/features/remove-selection/ui/RemoveSelectionButton";
import { hotels } from "@/shared/data/hotels";
import { TripContextProps } from "@/widgets/mainLayout/tripContextTypes";
import { useOutletContext } from "react-router";


function SelectedHotelList() {

  const { selectedHotelIds, onRemoveHotel } = useOutletContext<TripContextProps>()

  const selectedHotels = hotels.filter((hotel) =>
    selectedHotelIds.includes(hotel.id)
  )

  return (
    <ul
      className="selected-hotel-list flex
      flex-col gap-4 mb-10"
    >
      {selectedHotels.map((hotel) => (
        <li key={hotel.id}>
          <HotelCard
            hotel={hotel}
            action={
              <RemoveSelectionButton
                cardId={hotel.id}
                onRemove={onRemoveHotel}
              >
                Remove
              </RemoveSelectionButton>
            }
          />
        </li>
      ))}
    </ul>
  );
}

export default SelectedHotelList;