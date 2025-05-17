import HomeHero from '@/components/Hero/HomeHero/HomeHero';
import CoffeeHero from '@/components/Hero/CoffeeHero/CoffeeHero';
import PleasureHero from '@/components/Hero/PleasureHero/PleasureHero';

export const headerConfig = {
  '/': {
    Component: HomeHero,
    bgClass: 'header--home',
  },
  '/our-coffee': {
    Component: CoffeeHero,
    bgClass: 'header--coffee',
  },
  '/for-your-pleasure': {
    Component: PleasureHero,
    bgClass: 'header--pleasure',
  },
};