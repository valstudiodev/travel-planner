import BusList from "@/widgets/bus-list/ui/BusList";
import { buses } from "@/shared/data/buses";
import Container from "@/shared/primitives/container/Container";
import { HeadingTitle } from "@/shared/typography";
import NextButton from "@/shared/ui/nextButton/NextButton";
import HeaderPage from "@/widgets/header-page/ui/HeaderPage";
import Subtitle from "@/shared/typography/subtitle/Subtitle";
import { useOutletContext } from "react-router";
import { TripContextProps } from "@/widgets/mainLayout/tripContextTypes";

function BusesPage(): React.JSX.Element {
  console.log('---Buses page render---');

  const { selectedBusIds, onSelectBus } = useOutletContext<TripContextProps>()

  const hasSelectedBuses = selectedBusIds.length > 0

  return (
    <section className="buses-page
    py-10">
      <Container>
        <div className="buses-page__inner
        bg-text-muted 
          rounded">
          <HeaderPage />
          <div className="buses-page__body  p-10">
            <HeadingTitle
              className="text-surface
          text-5xl text-center mb-5"
              title="Choose your bus" />
            <Subtitle className="text-surface
              text-4xl text-center mb-5">
              Select one or more options
            </Subtitle>
            <BusList
              buses={buses}
              selectedBusId={selectedBusIds}
              onSelect={onSelectBus}
              className="grid grid-cols-2 gap-5
              mb-10"
            />
            <NextButton
              to="/hotel-page"
              className="bg-primary px-6 py-2
          rounded text-white"
              disabled={!hasSelectedBuses}
            >
              Continue to Hotels
            </NextButton>
          </div>
        </div>
      </Container>

    </section>
  );
}

export default BusesPage;

