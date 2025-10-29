import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-moreismoreismore',
  imports: [],
  templateUrl: './moreismoreismore.component.html',
  styleUrl: './moreismoreismore.component.css'
})
export class MoreismoreismoreComponent {

uriAssetsImages: string = environment.uriAssetsImages;

  constructor() {}

  ngOnInit(): void {

    const modal = document.getElementById('modal');
    const modalImg= document.getElementById('modal-img');
    const zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(img => {
      img.addEventListener('click', () => {
        modal!.style.display = 'flex';
        modalImg!.setAttribute('src', img.getAttribute('src')!);
        modalImg!.setAttribute('alt', img.getAttribute('alt')!);
      });
    });

  }

  // Functions
  onCloseModal(): void{
    const modal = document.getElementById('modal');
    const modalImg= document.getElementById('modal-img');
    modal!.style.display = 'none';
    modalImg!.setAttribute('src', '');  
    modalImg!.setAttribute('alt', '');
  }

}
