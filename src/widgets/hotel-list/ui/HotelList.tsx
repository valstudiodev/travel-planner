import { Hotel } from "@/entities/hotel/types/hotelCardTypes";
import HotelCard from "@/entities/hotel/ui/HotelCard";
// import SelectHotelButton from "@/features/select-hotel/ui/SelectHotelButton";
import SelectButton from "@/shared/ui/selectButton/SelectButton";


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
                <SelectButton
                  id={hotel.id}
                  isSelected={isSelected}
                  onSelect={onSelect}
                  className={`
                    px-6 py-2 rounded cursor-pointer hover:bg-primary-hover
                    transition-all duration-300 text-surface
                    ${isSelected ? 'bg-text-muted' : 'bg-primary'}`}
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