import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-scroll-bar-bottom',
  imports: [],
  templateUrl: './scroll-bar-bottom.component.html',
  styleUrl: './scroll-bar-bottom.component.css'
})
export class ScrollBarBottomComponent
  implements AfterViewInit, OnDestroy {

  @ViewChild('scrollContent')
  scrollContent?: ElementRef<HTMLDivElement>;

  private animationFrame?: number;

  private lastTimestamp = 0;

  /*
   * Velocità in pixel al secondo.
   * 60 corrisponde circa alla velocità
   * della precedente animazione CSS.
   */
  private readonly speed = 60;


  ngAfterViewInit(): void {

    this.startScrolling();

  }


  ngOnDestroy(): void {

    if (this.animationFrame) {

      cancelAnimationFrame(
        this.animationFrame
      );

    }

  }


  private startScrolling(): void {

    const content =
      this.scrollContent?.nativeElement;

    if (!content) {
      return;
    }


    const firstWrapper =
      content.children[0] as HTMLElement;

    if (!firstWrapper) {
      return;
    }


    const loopWidth =
      firstWrapper.offsetWidth;


    if (!loopWidth) {
      return;
    }


    const animate = (
      timestamp: number
    ): void => {

      if (!this.lastTimestamp) {

        this.lastTimestamp =
          timestamp;

      }


      const delta =
        timestamp -
        this.lastTimestamp;


      this.lastTimestamp =
        timestamp;


      const movement =
        this.speed *
        delta /
        1000;


      const currentX =
        this.getCurrentTranslateX(
          content
        );


      let nextX =
        currentX -
        movement;


      /*
       * Quando abbiamo percorso
       * esattamente una copia della
       * sequenza, torniamo indietro
       * della stessa distanza.
       *
       * Visivamente non cambia nulla:
       * la seconda copia è identica
       * alla prima.
       */
      if (
        Math.abs(nextX) >= loopWidth
      ) {

        nextX += loopWidth;

      }


      content.style.transform =
        `translate3d(${nextX}px, 0, 0)`;


      this.animationFrame =
        requestAnimationFrame(
          animate
        );

    };


    this.animationFrame =
      requestAnimationFrame(
        animate
      );

  }


  private getCurrentTranslateX(
    element: HTMLElement
  ): number {

    const transform =
      window.getComputedStyle(
        element
      ).transform;


    if (
      !transform ||
      transform === 'none'
    ) {

      return 0;

    }


    const matrix =
      new DOMMatrix(transform);


    return matrix.m41;

  }

}