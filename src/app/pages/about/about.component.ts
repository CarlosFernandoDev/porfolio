import { Component } from '@angular/core';
import { slideInOutBottom } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[slideInOutBottom]
})
export class AboutComponent {

}
