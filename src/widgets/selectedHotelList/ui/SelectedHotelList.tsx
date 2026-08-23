import { useAppSelector } from "@/app/store/hooks";
import HotelCard from "@/entities/hotel/ui/HotelCard";
import RemoveSelectionButton from "@/features/remove-selection/ui/RemoveSelectionButton";
import { hotels } from "@/shared/data/hotels";

function SelectedHotelList() {

  const selectedHotelIds = useAppSelector(
    (state) => state.trip.selectedHotelIds
  )

  const selectedHotels = hotels.filter(
    (hotel) => selectedHotelIds.includes(hotel.id)
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
            variant="remove"
            action={
              <RemoveSelectionButton
                cardId={hotel.id}
                type="hotel"
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