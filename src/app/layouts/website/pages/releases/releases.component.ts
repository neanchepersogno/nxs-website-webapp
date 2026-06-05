import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../../../../environments/environment';

interface CoverImage { src: string; alt: string; }

@Component({
  selector: 'app-releases',
  imports: [],
  templateUrl: './releases.component.html',
  styleUrl: './releases.component.css'
})
export class ReleasesComponent implements OnInit, OnDestroy {

  uriAssetsImages = environment.uriAssetsImages;

  imageGroups: CoverImage[][] = [
    [
      { src: `${environment.uriAssetsImages}/aposematic-cover.png`, alt: 'Martenot - Aposematic' },
      { src: `${environment.uriAssetsImages}/APOSEMATIC-COVER-RETRO2-DEF.png`, alt: 'Martenot - Aposematic (back)' },
    ],
    [
      { src: `${environment.uriAssetsImages}/gu-lefka-split.png`, alt: 'Guglielmo Diana / Lefka – Split' },
      { src: `${environment.uriAssetsImages}/nxs003-retro.png`, alt: 'Guglielmo Diana / Lefka – Split (back)' },
    ],
    [
      { src: `${environment.uriAssetsImages}/face-shopping-rmx.png`, alt: 'Faceshopping RMX' },
      { src: `${environment.uriAssetsImages}/face-shopping-rmx.png`, alt: 'Faceshopping RMX (back)' },
    ],
    [
      { src: `${environment.uriAssetsImages}/sfilate-spaziali.png`, alt: 'Sfilate Spaziali' },
      { src: `${environment.uriAssetsImages}/ss-retro.png`, alt: 'Sfilate Spaziali (back)' },
    ],
  ];

  flippedStates: boolean[] = [false, false, false, false];
  private intervalMap = new Map<number, ReturnType<typeof setInterval>>();

  constructor() {}

  ngOnInit(): void {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const zoomableImages = document.querySelectorAll('.zoomable');
    zoomableImages.forEach(img => {
      img.addEventListener('click', () => {
        modal!.style.display = 'flex';
        modalImg!.setAttribute('src', img.getAttribute('src')!);
        modalImg!.setAttribute('alt', img.getAttribute('alt')!);
      });
    });

    for (let i = 0; i < this.imageGroups.length; i++) {
      this.startInterval(i);
    }
  }

  ngOnDestroy(): void {
    this.intervalMap.forEach(id => clearInterval(id));
  }

  private startInterval(index: number): void {
    const existing = this.intervalMap.get(index);
    if (existing) clearInterval(existing);
    const id = setInterval(() => {
      this.flippedStates[index] = !this.flippedStates[index];
    }, 7000);
    this.intervalMap.set(index, id);
  }

  onFlipToggle(index: number): void {
    this.flippedStates[index] = !this.flippedStates[index];
    this.startInterval(index);
  }

  onCloseModal(): void {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    modal!.style.display = 'none';
    modalImg!.setAttribute('src', '');
    modalImg!.setAttribute('alt', '');
  }

}
