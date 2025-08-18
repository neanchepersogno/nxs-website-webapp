import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ScrollBarBottomComponent } from "./components/scroll-bar-bottom/scroll-bar-bottom.component";
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [FooterComponent, ScrollBarBottomComponent, CommonModule, RouterOutlet, ScrollBarBottomComponent],
  templateUrl: './website-layout.component.html',
  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({ transform: 'translateY(100%)', opacity: 0 }), // empieza desde abajo
        animate('600ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // termina en su lugar
      ])
    ])
  ]
})
export class WebsiteLayoutComponent {

  uriAssetsImages: string = environment.uriAssetsImages;

  prepareRoute(outlet: RouterOutlet) {
   return outlet?.activatedRouteData?.['animation'];
  }

}
