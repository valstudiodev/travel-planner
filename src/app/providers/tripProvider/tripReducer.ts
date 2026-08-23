import { TripAction, TripState } from "./typex";


export const tripReducer = (state: TripState, action: TripAction) => {
  switch (action.type) {
    case 'TOGGLE_BUS':
      return {
        ...state,
        selectedBusIds: state.selectedBusIds.includes(action.payload)
          ? state.selectedBusIds.filter(
            (id) => id !== action.payload
          )
          : [...state.selectedBusIds, action.payload]
      }
    case 'TOGGLE_HOTEL':
      return {
        ...state,
        selectedHotelIds: state.selectedHotelIds.includes(action.payload)
          ? state.selectedHotelIds.filter(
            (id) => id !== action.payload
          )
          : [...state.selectedHotelIds, action.payload]
      }
    case 'REMOVE_BUS':
      return {
        ...state,
        selectedBusIds: state.selectedBusIds.filter(
          (id) => id !== action.payload
        )
      }
    case 'REMOVE_HOTEL':
      return {
        ...state,
        selectedHotelIds: state.selectedHotelIds.filter(
          (id) => id !== action.payload
        )
      }
    case 'CLEAR_TRIP':
      return {
        selectedBusIds: [],
        selectedHotelIds: []
      }
    default:
      return state
  }
}