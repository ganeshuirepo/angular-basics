import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {

  // constructor() {


  // }
  interpolation: string = "Interpolation Binding";
  submit: string = "Property Binding";
  twoway: string = "Two Way Data Binding";

  onsubmit() {
    alert("This is Event Binding");
    console.log("this is event binding");

  }

}
