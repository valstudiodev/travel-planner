import BusCard from "@/entities/bus/ui/BusCard";
import SelectBusButton from "@/features/select-bus/ui/SelectBusButton";
import { Bus } from "@/entities/bus/types/busTypes";
import useTrip from "@/app/providers/tripProvider/useTrip";
// import SelectButton from "@/shared/ui/selectButton/SelectButton";

export interface BusListProps {
  buses: Bus[];
  className?: string;
}

function BusList({
  buses,
  className,
}: BusListProps): React.JSX.Element {

  const { state } = useTrip()

  return (
    <ul className={`bus-list ${className}`}>
      {buses.map((bus) => {
        const isSelected = state.selectedBusIds.includes(bus.id)

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