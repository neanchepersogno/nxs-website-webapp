import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-mixtape-archive',
  imports: [],
  templateUrl: './mixtape-archive.component.html',
  styleUrl: './mixtape-archive.component.css'
})
export class MixtapeArchiveComponent {

  uriAssetsImages: string = environment.uriAssetsImages;

}
