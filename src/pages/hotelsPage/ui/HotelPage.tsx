import { hotels } from "@/shared/data/hotels";
import Container from "@/shared/primitives/container/Container";
import { HeadingTitle } from "@/shared/typography";
import Subtitle from "@/shared/typography/subtitle/Subtitle";
import NextButton from "@/shared/ui/nextButton/NextButton";
import HeaderPage from "@/widgets/header-page/ui/HeaderPage";
import HotelList from "@/widgets/hotel-list/ui/HotelList";
import { useState } from "react";

function HotelPage(): React.JSX.Element {
  console.log('---Hotel page render---');

  const [selectHotelId, setSelectHotelId] = useState<string[]>([]);

  const handleSelectHotel = (hotelId: string): void => {
    setSelectHotelId((prev) =>
      prev.includes(hotelId)
        ? prev.filter((id) => id !== hotelId)
        : [...prev, hotelId]
    )
  }

  const hasSelectedHotels = selectHotelId.length > 0

  return (
    <main className="hotel-page bg-text
    py-10">
      <Container
        className="hotel-page__container"
      >
        <div className="hotel-page__inner 
        bg-text-muted ">
          <HeaderPage />
          <div className="hotel-page__body p-5">
            <HeadingTitle
              title="Choose your hotel"
              className="text-surface
              text-5xl text-center mb-5"
            />
            <Subtitle className="text-surface
              text-4xl text-center mb-5">
              Choose one or more options
            </Subtitle>
            <HotelList
              hotels={hotels}
              selectedHotelId={selectHotelId}
              onSelect={handleSelectHotel}
              className="grid grid-cols-2 gap-5
              mb-10"
            />
            <NextButton
              to="/summary-page"
              className="bg-primary px-6 py-2
              rounded text-white"
              disabled={!hasSelectedHotels}
            >
              Continue to summary
            </NextButton>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default HotelPage;





