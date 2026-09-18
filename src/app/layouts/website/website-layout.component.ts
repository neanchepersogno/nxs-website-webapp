import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';

import {
  RouterOutlet,
  RouterLink,
  Router
} from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

import { ScrollBarBottomComponent } from './components/scroll-bar-bottom/scroll-bar-bottom.component';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-website-layout',
  standalone: true,

  imports: [
    FooterComponent,
    HeaderComponent,
    ScrollBarBottomComponent,
    CommonModule,
    RouterOutlet,
    RouterLink
  ],

  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css',

  animations: [
    trigger('routeAnimation', [
      transition('* <=> *', [
        style({
          transform: 'translateY(10%)',
          opacity: 0
        }),
        animate(
          '800ms ease-out',
          style({
            transform: 'translateY(0)',
            opacity: 1
          })
        )
      ])
    ])
  ]
})
export class WebsiteLayoutComponent
  implements OnInit, OnDestroy {

  uriAssetsImages: string =
    environment.uriAssetsImages;

  featuredFlipped = false;

  private featuredFlipInterval?:
    ReturnType<typeof setInterval>;

  shuffledImages: number[] = [];

  imageStripOpen = false;

  @ViewChild('imageStrip')
  imageStrip?: ElementRef<HTMLDivElement>;

  private imageSetWidth = 0;

  private isDragging = false;

  private dragStartX = 0;

  private scrollStartX = 0;

  private loadedGalleryImages =
    new Set<number>();

  private galleryImageSizes =
    new Map<
      number,
      {
        width: number;
        height: number;
      }
    >();


  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {

    this.imageStripOpen = false;

    this.shuffleImages();

    this.startFeaturedFlipInterval();

  }


  ngOnDestroy(): void {

    clearInterval(
      this.featuredFlipInterval
    );

  }


  private shuffleImages(): void {

    this.shuffledImages = Array.from(
      { length: 15 },
      (_, i) => i + 1
    );

    for (
      let i = this.shuffledImages.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        this.shuffledImages[i],
        this.shuffledImages[j]
      ] = [
        this.shuffledImages[j],
        this.shuffledImages[i]
      ];

    }

  }


  toggleImageStrip(): void {

    this.imageStripOpen =
      !this.imageStripOpen;

    if (this.imageStripOpen) {

      requestAnimationFrame(() => {

        const strip =
          this.imageStrip?.nativeElement;

        if (!strip) {
          return;
        }

        if (!this.imageSetWidth) {

          this.imageSetWidth =
            strip.scrollWidth / 3;

        }

        if (this.imageSetWidth > 0) {

          strip.scrollLeft =
            this.imageSetWidth;

        }

      });

    }

  }


  onGalleryImageLoad(
    event: Event,
    imageNumber: number
  ): void {

    const image =
      event.currentTarget as HTMLImageElement;

    if (
      !image ||
      image.naturalWidth <= 0 ||
      image.naturalHeight <= 0
    ) {

      return;

    }


    if (
      !this.galleryImageSizes.has(
        imageNumber
      )
    ) {

      const minSize =
        Math.min(
          550,
          window.innerHeight * 0.68
        );

      const maxSize =
        Math.max(
          minSize,
          Math.min(
            700,
            window.innerHeight * 0.82
          )
        );

      const longSide =
        Math.floor(
          Math.random() *
          (
            maxSize -
            minSize +
            1
          )
        ) + minSize;


      let width: number;
      let height: number;


      if (
        image.naturalWidth >=
        image.naturalHeight
      ) {

        width =
          longSide;

        height =
          longSide *
          (
            image.naturalHeight /
            image.naturalWidth
          );

      } else {

        height =
          longSide;

        width =
          longSide *
          (
            image.naturalWidth /
            image.naturalHeight
          );

      }


      this.galleryImageSizes.set(
        imageNumber,
        {
          width,
          height
        }
      );

    }


    const size =
      this.galleryImageSizes.get(
        imageNumber
      );

    if (!size) {
      return;
    }


    image.style.width =
      `${size.width}px`;

    image.style.height =
      `${size.height}px`;

    image.style.opacity =
      '1';


    this.loadedGalleryImages.add(
      imageNumber
    );


    const strip =
      this.imageStrip?.nativeElement;

    if (
      strip &&
      this.loadedGalleryImages.size >= 15
    ) {

      requestAnimationFrame(() => {

        this.imageSetWidth =
          strip.scrollWidth / 3;

        if (
          this.imageStripOpen &&
          this.imageSetWidth > 0
        ) {

          strip.scrollLeft =
            this.imageSetWidth;

        }

      });

    }

  }


  onImageStripScroll(): void {

    const strip =
      this.imageStrip?.nativeElement;

    if (
      !strip ||
      !this.imageSetWidth
    ) {

      return;

    }


    const oneSet =
      this.imageSetWidth;


    if (
      strip.scrollLeft <
      oneSet * 0.5
    ) {

      strip.scrollLeft +=
        oneSet;

    }


    if (
      strip.scrollLeft >
      oneSet * 1.5
    ) {

      strip.scrollLeft -=
        oneSet;

    }

  }


  onImageStripMouseDown(
    event: MouseEvent
  ): void {

    const strip =
      this.imageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    this.isDragging = true;

    this.dragStartX =
      event.pageX;

    this.scrollStartX =
      strip.scrollLeft;

    event.preventDefault();

  }


  onImageStripMouseMove(
    event: MouseEvent
  ): void {

    if (!this.isDragging) {
      return;
    }


    const strip =
      this.imageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    const distance =
      event.pageX -
      this.dragStartX;


    strip.scrollLeft =
      this.scrollStartX -
      distance;


    this.onImageStripScroll();

  }


  onImageStripMouseUp(): void {

    this.isDragging = false;

  }


  private startFeaturedFlipInterval(): void {

    clearInterval(
      this.featuredFlipInterval
    );


    this.featuredFlipInterval =
      setInterval(() => {

        if (!this.imageStripOpen) {

          this.featuredFlipped =
            !this.featuredFlipped;

        }

      }, 7000);

  }


  onFeaturedFlipToggle(): void {

    this.featuredFlipped =
      !this.featuredFlipped;

    this.startFeaturedFlipInterval();

  }


  isHome(): boolean {

    return this.router.url
      .split('?')[0] === '/';

  }


  prepareRoute(
    outlet: RouterOutlet
  ) {

    return outlet
      ?.activatedRouteData?.['animation'];

  }

}