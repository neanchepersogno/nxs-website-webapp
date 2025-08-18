import { Routes } from '@angular/router';
import { WebsiteLayoutComponent } from './website-layout.component';

export const WEBSITE_LAYOUT_ROUTES: Routes = [
  {
    path: '',
    component: WebsiteLayoutComponent,
    children: [
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),  data: { animation: 'AboutPage' } },
      { path: 'releases', loadComponent: () => import('./pages/releases/releases.component').then(m => m.ReleasesComponent), data: { animation: 'ReleasesPage' } },
      { path: 'events', loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent), data: { animation: 'EventsPage' } },
      { path: 'mixtape-archive', loadComponent: () => import('./pages/mixtape-archive/mixtape-archive.component').then(m => m.MixtapeArchiveComponent), data: { animation: 'MixtapeArchivePage' } },
    ],
  },
];