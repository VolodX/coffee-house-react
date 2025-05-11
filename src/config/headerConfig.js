import HomeHero from '@/components/hero/HomeHero/HomeHero';
import CoffeeHero from '@/components/hero/CoffeeHero/CoffeeHero';
import PleasureHero from '@/components/hero/PleasureHero/PleasureHero';

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