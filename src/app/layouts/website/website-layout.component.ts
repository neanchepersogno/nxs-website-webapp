import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ScrollBarBottomComponent } from "./components/scroll-bar-bottom/scroll-bar-bottom.component";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, ScrollBarBottomComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ transform: 'translateY(10%)', opacity: 0 }), // empieza desde abajo
        animate('800ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // termina en su lugar
      ])
    ])
  ]
})
export class WebsiteLayoutComponent {

  uriAssetsImages: string = environment.uriAssetsImages;

  constructor(private router: Router) {}

  isHome(): boolean {
    return this.router.url.split('?')[0] === '/';
  }

  prepareRoute(outlet: RouterOutlet) {
   return outlet?.activatedRouteData?.['animation'];
  }

}
