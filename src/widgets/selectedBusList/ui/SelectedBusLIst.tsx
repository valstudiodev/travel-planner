import BusCard from "@/entities/bus/ui/BusCard";
import RemoveSelectionButton from "@/features/remove-selection/ui/RemoveSelectionButton";
import { buses } from "@/shared/data/buses";
import { TripContextProps } from "@/widgets/mainLayout/tripContextTypes";
import { useOutletContext } from "react-router";


function SelectedBusList(): React.JSX.Element {

  const { selectedBusIds, onRemoveBus } = useOutletContext<TripContextProps>()

  const selectedBuses = buses.filter((bus) =>
    selectedBusIds.includes(bus.id)
  )

  return (
    <ul
      className="selected-bus-list flex 
      flex-col gap-4 mb-10"
    >
      {selectedBuses.map((bus) => (
        <li
          key={bus.id}
        >
          <BusCard
            bus={bus}
            variant="remove"
            action={
              <RemoveSelectionButton
                cardId={bus.id}
                onRemove={onRemoveBus}
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

export default SelectedBusList;