import HomeHero from '@/components/Heros/HomeHero/HomeHero';
import CoffeeHero from '@/components/Heros/CoffeeHero/CoffeeHero';
import PleasureHero from '@/components/Heros/PleasureHero/PleasureHero';

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