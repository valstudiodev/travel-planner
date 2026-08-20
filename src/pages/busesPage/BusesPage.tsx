import BusList from "@/widgets/bus-list/ui/BusList";
import { useState } from "react";
import { buses } from "@/shared/data/buses";
import Container from "@/shared/primitives/container/Container";

function BusesPage(): React.JSX.Element {
  console.log('---Buses page render---');

  const [selectedBusId, setSelectedBusId] = useState<string[]>([]);

  const handleSelectBus = (busId: string): void => {
    setSelectedBusId((prev) =>
      prev.includes(busId)
        ? prev.filter((id) => id !== busId)
        : [...prev, busId]
    )
  }

  return (
    <main className="buses-page bg-text
    py-10">
      <Container>
        <h1 className="text-surface
        text-5xl">
          Choose your bus
        </h1>
        <p className="text-surface
        text-4xl">
          Select one or more options
        </p>
        <BusList
          buses={buses}
          selectedBusId={selectedBusId}
          onSelect={handleSelectBus}
        />
      </Container>

    </main>
  );
}

export default BusesPage;