import { Reviews } from './../types/offer';

export const reviews: Reviews = [
  {
    id: 1,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/6.jpg'
    },
    rating: 2,
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-02-19T07:31:24.880Z'
  },
  {
    id: 2,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://12.react.pages.academy/static/avatar/4.jpg'
    },
    rating: 5,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-02-09T07:31:24.881Z'
  }
];
