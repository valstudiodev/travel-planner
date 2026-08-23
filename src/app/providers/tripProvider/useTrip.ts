import { useContext } from "react";
import { TripContext } from "./TripContext";


function useTrip() {
  const context = useContext(TripContext)

  if (!context) {
    throw new Error("useTrip must be used inside TripProvider");
  }

  return context
}

export default useTrip;