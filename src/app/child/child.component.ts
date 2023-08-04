import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  banyan = '../../assets/banyan.jpg';
  india = '../../assets/india.jpg';
  tiger = '../../assets/tiger.jpg';
  peacock = '../../assets/peacock.jpg';


  @Input() emblem!:string;
  // @Output() myEvent: EventEmitter<String> = new EventEmitter<String>();



  
}
