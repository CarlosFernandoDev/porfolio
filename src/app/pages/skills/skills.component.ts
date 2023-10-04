import { Component } from '@angular/core';
import { slideInOutBottom, slideInOutLeft } from 'src/app/animations/app-animations';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations:[slideInOutLeft,slideInOutBottom]
})
export class SkillsComponent {



}
