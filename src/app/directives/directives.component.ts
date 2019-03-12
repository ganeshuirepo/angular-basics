import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  color: string;
  isChecked: boolean = true;
  colors: any[] = ['blue', 'green', 'red', 'pink', 'yellow', 'white', 'black'];
  vehicles = [{
    seat: 2,
    type: 'bike',
    company: 'Bajaj',
    Model: "Avenger"
  },{
    seat: 4,
    type: 'car',
    company: 'Maruthi',
    Model: "Ciaz"
  },{
    seat: 12,
    type: 'Bus',
    company: 'Volvo',
    Model: "mini"
  }]

  constructor() { }

}
