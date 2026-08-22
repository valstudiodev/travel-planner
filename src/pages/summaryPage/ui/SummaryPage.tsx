import useSubmitTrip from "@/features/submit-trip/model/useSubmitTrip";
import SubmitTripButton from "@/features/submit-trip/ui/submitTripButtton/SubmitTripButton";
import Container from "@/shared/primitives/container/Container";
import { HeadingTitle } from "@/shared/typography";
import Subtitle from "@/shared/typography/subtitle/Subtitle";
import ButtonNavigate from "@/shared/ui/buttonNavigate/ButtonNavigate";
import HeaderPage from "@/widgets/header-page/ui/HeaderPage";
import { TripContextProps } from "@/widgets/mainLayout/tripContextTypes";
import SelectedBusList from "@/widgets/selectedBusList/ui/SelectedBusLIst";
import SelectedHotelList from "@/widgets/selectedHotelList/ui/SelectedHotelList";
import { useOutletContext } from "react-router";
import { useState } from "react";
import SuccessModal from "@/features/submit-trip/ui/successModal/SuccessModal";


function SummaryPage(): React.JSX.Element {
  console.log('---Summary page render---');

  const { selectedBusIds, selectedHotelIds } = useOutletContext<TripContextProps>()
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const { submitTrip, isSubmitted } = useSubmitTrip()

  const handleSubmit = async (): Promise<void> => {
    await submitTrip()
    setIsSuccessModalOpen(true)
  }

  const hasSelection = selectedBusIds.length > 0 || selectedHotelIds.length > 0

  return (
    <section className="summary-page py-10 relative">
      <Container>
        <div className="summary-page__inner bg-text-muted">
          <HeaderPage />

          {hasSelection && (
            <div className="summary-page__body p-5">
              <HeadingTitle
                className="text-text
              text-5xl text-center mb-10"
                title="Your trip"
              />

              {selectedBusIds.length > 0 && (
                <>
                  <Subtitle
                    className="text-4xl text-surface mb-10"
                  >
                    Selected Busses:
                  </Subtitle>
                  <SelectedBusList />
                </>
              )}

              {selectedHotelIds.length > 0 && (
                <>
                  <Subtitle
                    className="text-4xl text-surface mb-10"
                  >
                    Selected Hotels:
                  </Subtitle>
                  <SelectedHotelList />
                </>
              )}

              <div className="bg-surface text-text
              text-center text-3xl p-5 rounded mb-10
              flex flex-col items-center gap-5">
                {` Your request contains ${selectedBusIds.length} buses and ${selectedHotelIds.length} hotels`}

                <SubmitTripButton
                  onClick={handleSubmit}
                  className="bg-text text-bg
                  px-4 py-2 rounded cursor-pointer 
                  hover:bg-gray-700 transition-all
                  duration-300"
                >
                  Submit request
                </SubmitTripButton>
              </div>

              <ButtonNavigate
                direction={-1}
                className="bg-success px-6 py-2 rounded text-surface
                hover:bg-green-700 transition-all duration-300 cursor-pointer"
              >
                Back
              </ButtonNavigate>

              {isSubmitted && (
                <SuccessModal
                  isOpen={isSuccessModalOpen}
                  onClose={() => setIsSuccessModalOpen(false)}
                />
              )}
            </div>
          )}


        </div>
      </Container>
    </section>
  );
}

export default SummaryPage;