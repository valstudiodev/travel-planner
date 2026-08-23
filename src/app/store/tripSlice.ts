import { createSlice } from "@reduxjs/toolkit";

interface TripState {
  selectedBusIds: string[];
  selectedHotelIds: string[];
}

const initialState: TripState = {
  selectedBusIds: [],
  selectedHotelIds: []
}

export const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    toggle_bus(state, action) {
      if (state.selectedBusIds.includes(action.payload)) {
        state.selectedBusIds = state.selectedBusIds.filter(
          (id) => id !== action.payload
        )
      } else {
        state.selectedBusIds.push(action.payload)
      }
    },

    toggle_hotel(state, action) {
      if (state.selectedHotelIds.includes(action.payload)) {
        state.selectedHotelIds = state.selectedHotelIds.filter(
          (id) => id !== action.payload
        )
      } else {
        state.selectedHotelIds.push(action.payload)
      }
    },

    remove_bus(state, action) {
      state.selectedBusIds = state.selectedBusIds.filter(
        (id) => id !== action.payload
      )
    },

    remove_hotel(state, action) {
      state.selectedHotelIds = state.selectedHotelIds.filter(
        (id) => id !== action.payload
      )
    },

    clear_trip(state) {
      state.selectedBusIds = [];
      state.selectedHotelIds = [];
    }
  }
})

export const { toggle_bus, toggle_hotel, remove_bus, remove_hotel, clear_trip } = tripSlice.actions

export default tripSlice.reducer