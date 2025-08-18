import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import { routes } from './app.routes';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {PrimeNGPreset} from './layouts/website/theme/presset';
import {provideHttpClient} from '@angular/common/http';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es', localeEsExtra);

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled'
      }),
    ),
    { provide: LOCALE_ID, useValue: 'es' },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: PrimeNGPreset,
        options: {
          darkModeSelector: '.dark-mode-enabled',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      }
    })
  ]
};
