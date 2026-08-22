import { Hotel } from "@/entities/hotel/types/hotelCardTypes";
import HotelCard from "@/entities/hotel/ui/HotelCard";
import SelectHotelButton from "@/features/select-hotel/ui/SelectHotelButton";
// import SelectButton from "@/shared/ui/selectButton/SelectButton";


interface HotelListProps {
  hotels: Hotel[];
  selectedHotelId: string[];
  onSelect: (id: string) => void;
  className?: string;
}

function HotelList({
  hotels,
  selectedHotelId,
  onSelect,
  className = ''
}: HotelListProps) {
  return (
    <ul className={`hotel-list ${className}`}>
      {hotels.map((hotel) => {
        const isSelected = selectedHotelId.includes(hotel.id)
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
                  onSelect={onSelect}
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