export interface TripContextProps {
  selectedBusIds: string[];
  selectedHotelIds: string[];

  onSelectBus: (busId: string) => void;
  onSelectHotel: (hotelId: string) => void;

  onRemoveBus: (busId: string) => void;
  onRemoveHotel: (hotelId: string) => void;
}