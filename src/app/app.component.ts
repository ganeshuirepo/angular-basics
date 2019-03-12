import { Component, Input } from '@angular/core';
import { add } from './customAnnotator';
import { Router } from '@angular/router';

//@add()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color: string;
  constructor() {

    // this.router.navigate(['/welcome'],{skipLocationChange: true});
  }

}
