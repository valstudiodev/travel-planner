import BusCard from "@/entities/bus/ui/BusCard";
import SelectBusButton from "@/features/select-bus/ui/SelectBusButton";
import { Bus } from "@/entities/bus/types/busTypes";
import { useAppSelector } from "@/app/store/hooks";

export interface BusListProps {
  buses: Bus[];
  className?: string;
}

function BusList({
  buses,
  className,
}: BusListProps): React.JSX.Element {

  const selectedBusIds = useAppSelector(
    (state) => state.trip.selectedBusIds
  )

  return (
    <ul className={`bus-list ${className}`}>
      {buses.map((bus) => {
        const isSelected = selectedBusIds.includes(bus.id)

        return (
          <li
            key={bus.id}
            className="bus-list__item"
          >
            <BusCard
              bus={bus}
              variant="default"
              action={
                <SelectBusButton
                  busId={bus.id}
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

export default BusList; 