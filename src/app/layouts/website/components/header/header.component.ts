import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  uriAssetsImages: string = environment.uriAssetsImages;

  constructor(private router: Router) {}

  isHome(): boolean {
    return this.router.url === '/';
  }
}
