import { PostServiceService } from './../post-service.service';
import { postData } from './../postData';
import { JsonDataService } from './../json-data.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from  "@angular/common/http";
import { Employee } from '../Employee';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {

  searchBox: any;
  showpostData: boolean;
  //emppostdata: string[] = [];
  addEmployee: Employee;
  employeeData : Employee[] = [];
  postedData: postData[] = [];
  errorMsg: string;
  registerData: FormGroup;
  constructor(private empService: PostServiceService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.showpostData = false;
    this.registerData = this.formBuilder.group({
      userId: ['', Validators.compose([
        Validators.required
      ])],
      id: ['', Validators.compose([
        Validators.required
      ])],
      title: ['', Validators.compose([
        Validators.required
      ])],
      body: ['', Validators.compose([
        Validators.required
      ])]
    })

    this.empService.getEmpDetails().subscribe(empdata => this.employeeData = empdata,
      error => this.errorMsg = <any>error);
  }

  onSubmit(form: NgForm) {

    let addEmployeeDetail = form.value;
    let details = JSON.stringify(addEmployeeDetail);
    this.empService.addEmployee(addEmployeeDetail).subscribe(postData =>
      this.postedData = postData,
      error => this.errorMsg = <any>error);
      this.showpostData = true;
      console.log("add post data", JSON.stringify(postData));

    // JSON.stringify(this.emp);

    // this.employeeData.push(emp);
    // console.log("add emp data", emp);
  }

}

