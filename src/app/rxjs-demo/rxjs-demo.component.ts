import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable, fromEvent, pipe } from 'rxjs';
import { map, bufferCount, bufferWhen } from 'rxjs/operators';




@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent {
  Hello: any;


  constructor() { }
  ngAfterViewInit() {

    const output = document.querySelector('output');
    const button = document.querySelector('button');
    const click$ = fromEvent(button, 'click');

    click$.pipe(map((e: any) => e.target.value)).pipe(bufferCount(1))
  .subscribe(() => {
    output.textContent = Math.random().toString(36).slice(2);
});
  }


}



