import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../../Student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() ctMsg: string;
  @Input('ctArray') myArray: Array<string>;
  @Input('studentAddMsg') addMsg : string;
  @Output('addoneEvent') addEvent = new EventEmitter<Student>();
  @Output() sendmsgEvent = new EventEmitter<string>();

  student = new Student();

  message = 'send message';
  msg: string;
  childTitle = "-- This is Child Title --";
  constructor() { }

  addStudentData(){
    this.addEvent.emit(this.student);
  }

  sendMsg() {
    this.sendmsgEvent.emit(this.msg);
  }

}

