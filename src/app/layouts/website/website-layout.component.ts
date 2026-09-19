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
  Router,
  NavigationStart
} from '@angular/router';

import { Subscription } from 'rxjs';

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

  /*
   * Galleria desktop / normale.
   */
  shuffledImages: number[] = [];

  /*
   * Galleria verticale mobile.
   * L'ordine viene randomizzato all'avvio.
   */
  verticalImages: number[] = [];

  imageStripOpen = false;

  @ViewChild('imageStrip')
  imageStrip?: ElementRef<HTMLDivElement>;

  @ViewChild('mobileImageStrip')
  mobileImageStrip?: ElementRef<HTMLDivElement>;

  private imageSetWidth = 0;

  private mobileImageSetWidth = 0;

  private isDragging = false;

  private dragLastX = 0;

  private dragLastTime = 0;

  private dragVelocity = 0;

  private momentumFrame = 0;

  private routerEventsSub?:
    Subscription;

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

    /*
     * Randomizza la galleria desktop.
     */
    this.shuffleImages();

    /*
     * Randomizza la galleria verticale mobile.
     */
    this.shuffleVerticalImages();

    this.startFeaturedFlipInterval();


    this.routerEventsSub =
      this.router.events.subscribe(
        (event) => {

          if (
            event instanceof NavigationStart
          ) {

            this.imageStripOpen = false;

            cancelAnimationFrame(
              this.momentumFrame
            );

            this.onImageStripMouseUp();

          }

        }
      );

    window.addEventListener(
      'resize',
      this.onWindowResize
    );

  }


  ngOnDestroy(): void {

    clearInterval(
      this.featuredFlipInterval
    );

    cancelAnimationFrame(
      this.momentumFrame
    );

    this.onImageStripMouseUp();

    this.routerEventsSub?.unsubscribe();

    window.removeEventListener(
      'resize',
      this.onWindowResize
    );

  }


  private onWindowResize = (): void => {

    this.resizeGalleryImages();

    this.resizeMobileVerticalImages();

  };


  /*
   * RANDOMIZZAZIONE GALLERIA DESKTOP
   */
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


  /*
   * RANDOMIZZAZIONE GALLERIA VERTICALE MOBILE
   */
  private shuffleVerticalImages(): void {

    this.verticalImages = Array.from(
      { length: 10 },
      (_, i) => i + 1
    );

    for (
      let i = this.verticalImages.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        this.verticalImages[i],
        this.verticalImages[j]
      ] = [
        this.verticalImages[j],
        this.verticalImages[i]
      ];

    }

  }


  toggleImageStrip(): void {

    this.imageStripOpen =
      !this.imageStripOpen;


    if (this.imageStripOpen) {

      requestAnimationFrame(() => {

        /*
         * Desktop / galleria normale.
         */
        const strip =
          this.imageStrip?.nativeElement;

        if (strip) {

          this.imageSetWidth =
            strip.scrollWidth / 3;

          if (this.imageSetWidth > 0) {

            strip.scrollLeft =
              this.imageSetWidth;

          }

        }


        /*
         * Mobile / galleria verticale.
         *
         * La sequenza è presente 3 volte.
         * Partiamo dalla copia centrale.
         */
        const mobileStrip =
          this.mobileImageStrip?.nativeElement;

        if (mobileStrip) {

          this.resizeMobileVerticalImages();

          requestAnimationFrame(() => {

            this.mobileImageSetWidth =
              mobileStrip.scrollWidth / 3;

            if (
              this.mobileImageSetWidth > 0
            ) {

              mobileStrip.scrollLeft =
                this.mobileImageSetWidth;

            }

          });

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


    this.applyGalleryImageSize(
      image,
      imageNumber
    );


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


  private applyGalleryImageSize(
    image: HTMLImageElement,
    imageNumber: number
  ): void {

    const size =
      this.galleryImageSizes.get(
        imageNumber
      );

    if (!size) {
      return;
    }


    /*
     * DESKTOP
     *
     * Invariato rispetto alla versione
     * attuale che funziona.
     */
    if (window.innerWidth > 768) {

      const galleryScale = 0.75;

      const maxGalleryHeight = 700;

      const availableHeight =
        window.innerHeight *
        galleryScale;

      const scale =
        Math.min(
          1,
          availableHeight /
          maxGalleryHeight
        );

      image.style.width =
        `${size.width * scale}px`;

      image.style.height =
        `${size.height * scale}px`;

      return;

    }


    /*
     * MOBILE
     *
     * Galleria normale, mantenuta per
     * la modalità precedente.
     */
    const mobileGalleryScale = 0.95;

    const availableHeight =
      window.innerHeight *
      mobileGalleryScale;

    const scale =
      Math.min(
        1,
        availableHeight / 700
      );

    image.style.width =
      `${size.width * scale}px`;

    image.style.height =
      `${size.height * scale}px`;

  }


  private resizeGalleryImages(): void {

    const strip =
      this.imageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    const images =
      strip.querySelectorAll(
        'img[data-gallery-image]'
      );


    images.forEach(
      (element) => {

        const image =
          element as HTMLImageElement;

        const imageNumber =
          Number(
            image.getAttribute(
              'data-gallery-image'
            )
          );

        if (
          !imageNumber ||
          !this.galleryImageSizes.has(
            imageNumber
          )
        ) {

          return;

        }


        this.applyGalleryImageSize(
          image,
          imageNumber
        );

      }
    );


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


  /*
   * DIMENSIONAMENTO GALLERIA
   * VERTICALE MOBILE
   *
   * 26px lasciati in fondo per
   * la scrollbar inferiore.
   */
  private resizeMobileVerticalImages(): void {

    const strip =
      this.mobileImageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    const images =
      strip.querySelectorAll(
        'img[data-vertical-gallery-image]'
      );


    const galleryHeight =
      window.innerHeight - 26;


    images.forEach(
      (element) => {

        const image =
          element as HTMLImageElement;

        if (
          image.naturalWidth <= 0 ||
          image.naturalHeight <= 0
        ) {

          return;

        }


        const scale =
          galleryHeight /
          image.naturalHeight;


        image.style.height =
          `${galleryHeight}px`;

        image.style.width =
          `${image.naturalWidth * scale}px`;

      }
    );


    requestAnimationFrame(() => {

      this.mobileImageSetWidth =
        strip.scrollWidth / 3;

      if (
        this.imageStripOpen &&
        this.mobileImageSetWidth > 0
      ) {

        if (
          strip.scrollLeft <
          this.mobileImageSetWidth * 0.5
        ) {

          strip.scrollLeft +=
            this.mobileImageSetWidth;

        }


        if (
          strip.scrollLeft >
          this.mobileImageSetWidth * 1.5
        ) {

          strip.scrollLeft -=
            this.mobileImageSetWidth;

        }

      }

    });

  }


  /*
   * SCROLL INFINITO DESKTOP
   */
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


  /*
   * SCROLL INFINITO MOBILE
   */
  onMobileImageStripScroll(): void {

    const strip =
      this.mobileImageStrip?.nativeElement;

    if (
      !strip ||
      !this.mobileImageSetWidth
    ) {

      return;

    }


    const oneSet =
      this.mobileImageSetWidth;


    /*
     * Se raggiungiamo la prima copia,
     * torniamo nella copia centrale.
     */
    if (
      strip.scrollLeft <
      oneSet * 0.5
    ) {

      strip.scrollLeft +=
        oneSet;

    }


    /*
     * Se raggiungiamo la terza copia,
     * torniamo nella copia centrale.
     */
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


    cancelAnimationFrame(
      this.momentumFrame
    );

    this.isDragging = true;

    this.dragLastX =
      event.pageX;

    this.dragLastTime =
      performance.now();

    this.dragVelocity = 0;

    strip.classList.add('dragging');


    window.addEventListener(
      'mousemove',
      this.onImageStripMouseMove
    );

    window.addEventListener(
      'mouseup',
      this.onImageStripMouseUp
    );

    event.preventDefault();

  }


  private onImageStripMouseMove = (
    event: MouseEvent
  ): void => {

    if (!this.isDragging) {
      return;
    }


    const strip =
      this.imageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    const now =
      performance.now();

    const dx =
      event.pageX -
      this.dragLastX;

    const dt =
      Math.max(now - this.dragLastTime, 1);


    strip.scrollLeft -= dx;

    this.onImageStripScroll();


    this.dragVelocity =
      0.8 * (dx / dt) +
      0.2 * this.dragVelocity;

    this.dragLastX =
      event.pageX;

    this.dragLastTime = now;

  };


  private onImageStripMouseUp = (): void => {

    window.removeEventListener(
      'mousemove',
      this.onImageStripMouseMove
    );

    window.removeEventListener(
      'mouseup',
      this.onImageStripMouseUp
    );

    this.imageStrip?.nativeElement
      .classList.remove('dragging');

    if (!this.isDragging) {
      return;
    }

    this.isDragging = false;


    if (
      performance.now() -
      this.dragLastTime > 100
    ) {
      return;
    }

    this.startMomentum();

  };


  private startMomentum(): void {

    const strip =
      this.imageStrip?.nativeElement;

    if (!strip) {
      return;
    }


    let velocity =
      this.dragVelocity;

    let position =
      strip.scrollLeft;

    let lastTime =
      performance.now();


    const step = (
      now: number
    ): void => {

      const dt =
        Math.min(now - lastTime, 32);

      lastTime = now;


      position -=
        velocity * dt;

      strip.scrollLeft =
        position;


      const before =
        strip.scrollLeft;

      this.onImageStripScroll();

      position +=
        strip.scrollLeft - before;


      velocity *=
        Math.pow(0.95, dt / 16);


      if (Math.abs(velocity) > 0.02) {

        this.momentumFrame =
          requestAnimationFrame(step);

      }

    };


    this.momentumFrame =
      requestAnimationFrame(step);

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