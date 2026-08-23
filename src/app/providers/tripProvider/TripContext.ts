import { createContext } from "react";
import { TripAction, TripState } from "./typex";

interface TripContextProps {
  state: TripState;
  dispatch: React.Dispatch<TripAction>;
}

export const TripContext = createContext<TripContextProps | undefined>(undefined)