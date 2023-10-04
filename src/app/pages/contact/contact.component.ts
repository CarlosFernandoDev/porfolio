import { Component } from '@angular/core';
import { slideInOutLeft, slideInOutRight } from 'src/app/animations/app-animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations:[slideInOutLeft,slideInOutRight]
})
export class ContactComponent {

}
