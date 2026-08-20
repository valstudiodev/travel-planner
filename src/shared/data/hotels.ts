interface Hotel {
  id: string;
  name: string;
  city: string;
  rating: number;
  pricePerNight: number;
  image: string
}

export const hotels: Hotel[] = [
  {
    id: 'hotel-1',
    name: 'Grand Hotel Montreal',
    city: 'Montreal',
    rating: 4,
    pricePerNight: 140,
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945',
  },
  {
    id: 'hotel-2',
    name: 'Royal Palace Montreal',
    city: 'Montreal',
    rating: 5,
    pricePerNight: 210,
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
  },
  {
    id: 'hotel-3',
    name: 'Downtown Suites',
    city: 'Toronto',
    rating: 4,
    pricePerNight: 175,
    image:
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791',
  },
  {
    id: 'hotel-4',
    name: 'Ottawa Riverside Hotel',
    city: 'Ottawa',
    rating: 3,
    pricePerNight: 115,
    image:
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7',
  },
  {
    id: 'hotel-5',
    name: 'Old Quebec Boutique Hotel',
    city: 'Quebec City',
    rating: 5,
    pricePerNight: 195,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
  },
  {
    id: 'hotel-6',
    name: 'Harbour View Hotel',
    city: 'Halifax',
    rating: 4,
    pricePerNight: 155,
    image:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d',
  },
];