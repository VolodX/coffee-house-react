import HomePage from '@/pages/HomePage/HomePage';
import OurCoffeePage from '@/pages/OurCoffeePage/OurCoffeePage';
import ForYourPleasurePage from '@/pages/ForYourPleasurePage/ForYourPleasurePage';

export const routes = [
  { path: '/', Component: HomePage },
  { path: '/our-coffee', Component: OurCoffeePage },
  { path: '/for-your-pleasure', Component: ForYourPleasurePage },
];
