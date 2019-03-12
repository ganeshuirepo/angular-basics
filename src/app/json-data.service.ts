import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { postData } from './postData';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable()
export class JsonDataService {
  private edataUrl = 'api/employee.json';
  private postDataUrl = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }



  getEmployee() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.edataUrl)
      .pipe(tap(data => console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError));

  }

  addEmployee(addEmp: postData) : Observable<postData[]> {
    return this.http.post<postData[]>(this.postDataUrl, addEmp, httpOptions)
    .pipe(tap(postdata => console.log('Post: '+ JSON.stringify(postdata))),
      catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}

}
