import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee1',
  templateUrl: './employee1.component.html',
  styleUrls: ['./employee1.component.css']
})
export class Employee1Component implements OnInit {

  @Input() parentText: string;
  @Output() childEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }
  onChange(value: string){
    this.childEvent.emit(value);
  }
}
