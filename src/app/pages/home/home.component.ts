import { Component } from '@angular/core';
import { fadeInOut, slideInOutLeft, slideInOutRight } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[fadeInOut, slideInOutLeft,slideInOutRight]
})
export class HomeComponent {

}
