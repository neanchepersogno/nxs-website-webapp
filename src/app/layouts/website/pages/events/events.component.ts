import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {

  uriAssetsImages: string = environment.uriAssetsImages;

  constructor() {}

  ngOnInit(): void {

    // Modal Zoom Image Event
    const modal = document.getElementById('modalZoomEvent');
    const modalImg = document.getElementById('modal-img-event');
    const zoomableImages = document.querySelectorAll('.zoomable-event');
    zoomableImages.forEach(img => {
      img.addEventListener('click', () => {
        modal!.style.display = 'flex';
        modalImg!.setAttribute('src', img.getAttribute('src')!);
        modalImg!.setAttribute('alt', img.getAttribute('alt')!);
      });
    });

  }

  // Functions
  onCloseModal(): void {
    const modal = document.getElementById('modalZoomEvent');
    const modalImg = document.getElementById('modal-img-event');
    modal!.style.display = 'none';
    modalImg!.setAttribute('src', '');
    modalImg!.setAttribute('alt', '');
  }

  onToggleSottoEvento(event:any) {
    console.log('Toggle Sotto Evento:', event);
   const btn = event.target as HTMLElement;
    const item = btn.closest('.lista-item') as HTMLElement | null;
    if (!item) return;
    const desc = item.querySelector('.sotto-desc') as HTMLElement | null;
    if (!desc) return;
    const isOpen = item.classList.toggle('aperto');
    btn.textContent = isOpen ? 'Less' : 'More';

    if (isOpen) {
      // Prepara la animación
      desc.style.maxHeight = '0px';
      desc.setAttribute('aria-hidden', 'false');

      // Después de un tick, ajusta la altura real
      setTimeout(() => {
        desc.style.maxHeight = `${desc.scrollHeight}px`;
      }, 10);
    } else {
      desc.style.maxHeight = '0px';
      desc.setAttribute('aria-hidden', 'true');
    }
  }

  onOpenModalContentImage(event: any): void {
    const modalRef = document.getElementById("modal-content-image");

    const element = event.target as HTMLElement;
    const eventoElement = element.closest('.evento') as HTMLElement | null;
    const eventInfo = eventoElement ? eventoElement.querySelector('.evento-info') as HTMLElement | null : null;
    const dinamicContent = eventInfo ? eventInfo.cloneNode(true) as HTMLElement : null;

    const modalBody = modalRef ? modalRef.querySelector('.box-content') as HTMLElement | null : null;
    modalBody!.innerHTML = ''; // Clear previous content
    if (dinamicContent) {
      modalBody!.append(dinamicContent);

      // Re-attach event listeners
      const buttons = modalBody!.querySelectorAll('.sotto-toggle');
      console.log('Buttons found:', buttons.length);
      buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          
          
          this.onToggleSottoEvento(e);
        });
      });
    }

    modalRef!.style.display = 'block';
    document.body.style.overflow = 'auto';
  }

  onCloseModalContentImage(): void {
    const modalRef = document.getElementById("modal-content-image");
    modalRef!.style.display = 'none';
    document.body.style.overflow = "auto";
  }

}
