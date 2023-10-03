import { Component } from '@angular/core';
import { fadeInOut } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations:[fadeInOut]
})
export class HeaderComponent {

}
