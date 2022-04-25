import { Component, Input, OnInit } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
  // encapsulation: ViewEncapsulation.Emulated - CSS in this component cannot be accessed by other components.(Encapsulate)
  // Styles in this component won't be overridden at a global level
  // CSS by default is set to global - can access by all the elements shared by the same class 
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member; 

  constructor() { }

  ngOnInit(): void {
  }

}
