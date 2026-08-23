import { useReducer } from "react";
import { tripReducer } from "./tripReducer";
import { TripContext } from "./TripContext";
import { TripState } from "./typex";

interface TripProviderProps {
  children: React.ReactNode
}

const initialState: TripState = {
  selectedBusIds: [],
  selectedHotelIds: []
}

function TripProvider({ children }: TripProviderProps) {
  const [state, dispatch] = useReducer(tripReducer, initialState);

  return <TripContext.Provider value={{
    state,
    dispatch
  }}>
    {children}
  </TripContext.Provider>
}

export default TripProvider;