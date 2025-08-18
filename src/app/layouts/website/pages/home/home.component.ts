import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
