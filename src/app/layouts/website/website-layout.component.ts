import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class WebsiteLayoutComponent implements OnInit, OnDestroy {

  uriAssetsImages: string = environment.uriAssetsImages;

  featuredFlipped = false;
  private featuredFlipInterval?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startFeaturedFlipInterval();
  }

  ngOnDestroy(): void {
    clearInterval(this.featuredFlipInterval);
  }

  private startFeaturedFlipInterval(): void {
    clearInterval(this.featuredFlipInterval);
    this.featuredFlipInterval = setInterval(() => {
      this.featuredFlipped = !this.featuredFlipped;
    }, 7000);
  }

  onFeaturedFlipToggle(): void {
    this.featuredFlipped = !this.featuredFlipped;
    this.startFeaturedFlipInterval();
  }

  isHome(): boolean {
    return this.router.url.split('?')[0] === '/';
  }

  prepareRoute(outlet: RouterOutlet) {
   return outlet?.activatedRouteData?.['animation'];
  }

}
