import { Outlet } from "react-router";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useState } from "react";

function MainLayout() {
  console.log('Main layout render');

  const [selectedBusIds, setSelectedBusIds] = useState<string[]>([]);
  const [selectedHotelIds, setSelectedHotelIds] = useState<string[]>([]);

  const hendleSelectBus = (busId: string): void => {
    setSelectedBusIds((prev) =>
      prev.includes(busId)
        ? prev.filter((id) => id !== busId)
        : [...prev, busId]
    )
  }

  const handleSelectHotel = (hotelId: string): void => {
    setSelectedHotelIds((prev) =>
      prev.includes(hotelId)
        ? prev.filter((id) => id !== hotelId)
        : [...prev, hotelId]
    )
  }

  const handleRemoveBus = (busId: string): void => {
    setSelectedBusIds((prev) =>
      prev.filter((id) => id !== busId)
    )
  }

  const handleRemoveHotel = (hotelId: string): void => {
    setSelectedHotelIds((prev) =>
      prev.filter((id) => id !== hotelId)
    )
  }

  return (
    <div className="wrapper relative ">
      <Header />

      <main className="page bg-text ">
        <Outlet
          context={{
            selectedBusIds,
            selectedHotelIds,
            onSelectBus: hendleSelectBus,
            onSelectHotel: handleSelectHotel,
            onRemoveBus: handleRemoveBus,
            onRemoveHotel: handleRemoveHotel
          }}
        />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;