import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

/*
Customize styles PrimeNg
 */
export const PrimeNGPreset = definePreset(Aura, {
  semantic: {
    primary: {
      500: '#1D345D',
      600: '#22427a',
      700: '#22427a'
    },
  }
});
