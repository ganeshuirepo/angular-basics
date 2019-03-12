import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iocex',
  templateUrl: './iocex.component.html',
  styleUrls: ['./iocex.component.css']
})
export class IocexComponent implements OnInit {

  constructor() { }
  cityMsg = "My City names:";
  cityArray = ['Vizag','Chennai','Bangalore','Vijayawada','Mysore'];
  stdAddMsg = 'Add Student';
  msg = '';
  check: boolean = true;

  stdFullName: string;

  saveData(std) {
    this.check = false;
    this.stdFullName = std.fname + ' ' + std.lname;
  }

  printMsg(msg) {
    this.msg = msg;
  }


  ngOnInit() {
  }

}
