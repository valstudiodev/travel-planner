import BusCard from "@/entities/bus/ui/BusCard";
import SelectBusButton from "@/features/select-bus/ui/SelectBusButton";
import { Bus } from "@/entities/bus/types/busTypes";
// import SelectButton from "@/shared/ui/selectButton/SelectButton";

export interface BusListProps {
  buses: Bus[];
  selectedBusId: string[];
  onSelect: (id: string) => void;
  className?: string;
}

function BusList({
  buses,
  selectedBusId,
  onSelect,
  className,
}: BusListProps): React.JSX.Element {

  return (
    <ul className={`bus-list ${className}`}>
      {buses.map((bus) => {
        const isSelected = selectedBusId.includes(bus.id)
        return (
          <li
            key={bus.id}
            className="bus-list__item"
          >
            <BusCard
              bus={bus}
              action={
                <SelectBusButton
                  busId={bus.id}
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

export default BusList; 