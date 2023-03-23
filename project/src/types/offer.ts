export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: User;
  description: string;
  location: Location;
  id: number;
};

export type City = {
  name: string;
  location: Location;
};

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type Locations = City[];

export type User = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
};

export type Offers = Offer[];

export type Reviews = Review[];
