import useTrip from "@/app/providers/tripProvider/useTrip";
import { Hotel } from "@/entities/hotel/types/hotelCardTypes";
import HotelCard from "@/entities/hotel/ui/HotelCard";
import SelectHotelButton from "@/features/select-hotel/ui/SelectHotelButton";

interface HotelListProps {
  hotels: Hotel[];
  className?: string;
}

function HotelList({
  hotels,
  className = ''
}: HotelListProps) {
  console.log('---Hotel list render---');

  const { state } = useTrip()

  return (
    <ul className={`hotel-list ${className}`}>
      {hotels.map((hotel) => {
        const isSelected = state.selectedHotelIds.includes(hotel.id)
        return (
          <li
            key={hotel.id}
          >
            <HotelCard
              hotel={hotel}
              action={
                <SelectHotelButton
                  hotelId={hotel.id}
                  isSelected={isSelected}
                />
              }
            />
          </li>
        )
      })}
    </ul>
  );
}

export default HotelList;