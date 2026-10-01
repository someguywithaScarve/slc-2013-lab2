export interface ResortListing {
  id: number;
  pic: string;
  country: string;
  location: string;
  rating: number;
  price: number;
}

const listings: ResortListing[] = [
  {
    id: 1,
    pic: "/src/assets/images/1.jpg",
    country: "Indonesia",
    location: "Gili Air Hotel",
    rating: 4.8,
    price: 589,
  },
  {
    id: 2,
    pic: "/src/assets/images/2.jpg",
    country: "Seychelles",
    location: "Hilton Resort",
    rating: 4.2,
    price: 629,
  },
  {
    id: 3,
    pic: "/src/assets/images/3.jpg",
    country: "Virgin Islands",
    location: "Goa Resort",
    rating: 3.5,
    price: 485,
  },
  {
    id: 4,
    pic: "/src/assets/images/4.jpg",
    country: "Bahamas",
    location: "Kuredu Resort",
    rating: 4.2,
    price: 729,
  },
  {
    id: 5,
    pic: "/src/assets/images/5.jpg",
    country: "Mauritius",
    location: "Tour D'eau Douce",
    rating: 4.9,
    price: 877,
  },
  {
    id: 6,
    pic: "/src/assets/images/6.jpg",
    country: "Bermuda",
    location: "Staniel Cay Hotel",
    rating: 3.2,
    price: 365,
  },
];

export default listings;
