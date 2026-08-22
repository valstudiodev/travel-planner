import { useState } from "react";

interface UseSubmitTripResult {
  submitTrip: () => void;
  isSubmitted: boolean;
}

function useSubmitTrip(): UseSubmitTripResult {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitTrip = async (): Promise<void> => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000)
    })

    setIsSubmitted(true)
  }

  return {
    submitTrip,
    isSubmitted
  };
}

export default useSubmitTrip;