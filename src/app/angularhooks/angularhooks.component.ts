import {Input, Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-angularhooks',
  templateUrl: './angularhooks.component.html',
  styleUrls: ['./angularhooks.component.css']
})
export class AngularhooksComponent implements OnInit, OnChanges  {


  @Input() property: string = "Hi!";
  Hello: any;
  constructor() {
    console.log("I'm Constructor");
   }

  ngOnInit() {
    console.log("This is OnInit Hook");
  }
  ngOnChanges() {
    console.log("This is on Changes Hook");
  }
  ngDoCheck() {
    console.log("This is Do Check Hook");
  }

  ngAfterContentInit() {
    console.log("This is After Content Init Hook");
  }

  ngAfterContentChecked() {
    console.log("This is After Content Checked Hook");
  }

  ngAfterViewInit() {
    console.log("This is After View Init Hook");
  }

  ngAfterViewChecked() {
    console.log("This is After View Checked Hook");
  }

  ngOnDestroy() {
    console.log("I'm Destroy Hook, call me last to unsubscribe");
  }

}
