import { AngularhooksComponent } from './angularhooks/angularhooks.component';
import { DirectivesComponent } from './directives/directives.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IocexComponent } from './iocex/iocex.component';
import { FormComponent } from './form/form.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';

export const routesSample: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },

  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'employeeinfo',
    component: EmployeeListComponent
  },
  {
    path: 'io',
    component: IocexComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'rxjs',
    component: RxjsDemoComponent
  },
  {
    path: 'hooks',
    component: AngularhooksComponent
  },
  {
    path: 'bindings',
    component: BindingsComponent,
    data: { title: 'Bindings' }
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    data: { title: 'Directives' }
  },
  {
    path: 'books',
    component: BookComponent,
    data: { title: 'Book List' }
  },
  {
    path: 'book-details/:id',
    component: BookDetailComponent,
    data: { title: 'Book Details' }
  },
  {
    path: 'book-create',
    component: BookCreateComponent,
    data: { title: 'Create Book' }
  },
  {
    path: 'book-edit/:id',
    component: BookEditComponent,
    data: { title: 'Edit Book' }
  }
];
