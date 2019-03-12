import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  title = 'Angular Demo';
  constructor(private router: Router) {
    //this.router.navigate(['/welcome'],{skipLocationChange: true});
  }

  bindings() {
    this.router.navigate(['/bindings'],{skipLocationChange: true});
  }

}
