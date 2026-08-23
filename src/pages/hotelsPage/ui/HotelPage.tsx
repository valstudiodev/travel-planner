import { useAppSelector } from "@/app/store/hooks";
import { hotels } from "@/shared/data/hotels";
import Container from "@/shared/primitives/container/Container";
import { HeadingTitle } from "@/shared/typography";
import Subtitle from "@/shared/typography/subtitle/Subtitle";
import ButtonNavigate from "@/shared/ui/buttonNavigate/ButtonNavigate";
import NextButton from "@/shared/ui/nextButton/NextButton";
import HeaderPage from "@/widgets/header-page/ui/HeaderPage";
import HotelList from "@/widgets/hotel-list/ui/HotelList";

function HotelPage(): React.JSX.Element {
  console.log('---Hotel page render---');

  const selectedHotelIds = useAppSelector(
    (state) => state.trip.selectedHotelIds
  )

  const hasSelectedHotels = selectedHotelIds.length > 0

  return (
    <section className="hotel-page
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
              className="grid grid-cols-2 max-[750px]:grid-cols-1 gap-5
              mb-10"
            />
            <div className="hotel-page__actions
            flex items-center gap-5 justify-between">
              <ButtonNavigate
                direction={-1}
                className="px-6 py-2 rounded text-surface
                 transition-all duration-300 cursor-pointer"
              >
                Back
              </ButtonNavigate>
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
        </div>
      </Container>
    </section>
  );
}

export default HotelPage;





