import useTrip from "@/app/providers/tripProvider/useTrip";
import BusCard from "@/entities/bus/ui/BusCard";
import RemoveSelectionButton from "@/features/remove-selection/ui/RemoveSelectionButton";
import { buses } from "@/shared/data/buses";


function SelectedBusList(): React.JSX.Element {

  const { state } = useTrip()

  const selectedBuses = buses.filter(
    (bus) => state.selectedBusIds.includes(bus.id)
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
                type="bus"
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