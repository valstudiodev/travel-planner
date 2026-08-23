export interface TripState {
  selectedBusIds: string[];
  selectedHotelIds: string[];
}

export type TripAction =
  | {
    type: 'TOGGLE_BUS';
    payload: string;
  }
  | {
    type: 'TOGGLE_HOTEL';
    payload: string;
  }
  | {
    type: 'REMOVE_BUS';
    payload: string;
  }
  | {
    type: 'REMOVE_HOTEL';
    payload: string;
  }
  | {
    type: 'CLEAR_TRIP';
  }
