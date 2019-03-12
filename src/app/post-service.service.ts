import { JsonDataService } from './json-data.service';
import { Injectable } from '@angular/core';
import { postData } from './postData';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Employee } from './Employee';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private postDataUrl = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient, private getDetails: JsonDataService) { }

  addEmployee(addEmp: postData) : Observable<postData[]> {
    return this.http.post<postData[]>(this.postDataUrl, addEmp, httpOptions)
    .pipe(tap(postdata => console.log('Post: '+ JSON.stringify(postdata))),
      catchError(this.handleError));
  }

  getEmpDetails() : Observable<Employee[]> {
   return this.getDetails.getEmployee();
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}
}
